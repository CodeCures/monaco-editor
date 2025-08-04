import { ref, onMounted, onUnmounted } from 'vue'
import * as monaco from 'monaco-editor-core'
import { editor } from 'monaco-editor-core'

import { loadGrammars, loadTheme } from 'monaco-volar'
import { setupMonacoEnv, loadOnigasm } from '../utils/env'
import { getOrCreateModel } from '../utils'

export function useMonacoEditor(vModel: any, props: { fileName?: string, lang?: string }) {
    const editorEl = ref<HTMLElement>()
    let editorInstance: editor.IStandaloneCodeEditor

    const afterReady = (theme: string) => {
        const model = getOrCreateModel(
            monaco.Uri.parse(`file:///${props.fileName}`),
            props.lang,
            vModel.value as string
        )

        editorInstance = monaco.editor.create(editorEl.value!, {
            theme,
            model,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            fontSize: 13.5,
            minimap: {
                enabled: false
            },
            inlineSuggest: {
                enabled: false
            },
            'semanticHighlighting.enabled': true
        })

        // Update vModel whenever the content changes
        editorInstance.onDidChangeModelContent(() => {
            vModel.value = editorInstance.getValue()
        })

        // Support for semantic highlighting
        const t = (editorInstance as any)._themeService._theme
        t.getTokenStyleMetadata = (type: string, modifiers: string[], _language: string) => {
            const _readonly = modifiers.includes('readonly')
            switch (type) {
                case 'function':
                case 'method':
                    return { foreground: 12 }
                case 'class':
                    return { foreground: 11 }
                case 'variable':
                case 'property':
                    return { foreground: _readonly ? 21 : 9 }
                default:
                    return { foreground: 0 }
            }
        }

        loadGrammars(monaco, editorInstance)
    }

    onMounted(() => {
        Promise.all([setupMonacoEnv(true), loadOnigasm(), loadTheme(monaco.editor)]).then(([, , theme]) => {
            afterReady(theme.dark)
        })
    })

    onUnmounted(() => {
        if (editorInstance) {
            editorInstance.dispose()
        }
    })

    return {
        editorEl
    }
}
