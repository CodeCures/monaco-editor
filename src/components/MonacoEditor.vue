<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as monaco from 'monaco-editor-core'
import { editor } from 'monaco-editor-core'
import { loadGrammars, loadTheme } from 'monaco-volar'
import { vueBiolerplait, tsBiolerplait } from '@/demo'

const editorEl = ref<HTMLElement>()
let editorInstance: editor.IStandaloneCodeEditor

const theme = await loadTheme(editor)
const model = editor.createModel(vueBiolerplait, 'vue')
onMounted(() => {
  editorInstance = editor.create(editorEl.value as HTMLElement, {
    model,
    theme: theme.dark
  })

  loadGrammars(monaco, editorInstance)
})
</script>

<template>
  <div ref="editorEl" id="editor"></div>
</template>
