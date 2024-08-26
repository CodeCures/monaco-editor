import { createApp } from 'vue'
import App from './App.vue'

import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import * as onigasm from "onigasm";
import onigasmWasm from "onigasm/lib/onigasm.wasm?url";
onigasm.loadWASM(onigasmWasm)

import editorWorker from "monaco-editor-core/esm/vs/editor/editor.worker?worker";
import vueWorker from "monaco-volar/vue.worker?worker";

function loadMonacoEnv() {
    (self as any).MonacoEnvironment = {
        async getWorker(_: any, label: string) {
            if (label === "vue") {
                return new vueWorker();
            }
            if (label === 'json') {
                return new jsonWorker();
            }
            if (label === 'css' || label === 'scss' || label === 'less') {
                return new cssWorker();
            }
            if (label === 'html' || label === 'handlebars' || label === 'razor') {
                return new htmlWorker();
            }
            if (label === 'typescript' || label === 'javascript') {
                return new tsWorker();
            }
            return new editorWorker();
        },
    };
}

loadMonacoEnv()

createApp(App).mount('#app')
