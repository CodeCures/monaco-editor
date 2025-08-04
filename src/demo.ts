import { languages } from "monaco-editor-core"

export const vueBiolerplait = {
    language: 'vue',
    content: `<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello world')

const count = ref(0)
const increment = () => count.value++
<\/script>

<template>
    <div>{{ msg }}</div>
    <h1>{{ count }}</h1>
    <button type="button" @click="increment">increment</button>
</template>

<style scoped>
    div {
        background-color: #000;
    }
</style>`
}

export const tsBiolerplait = {
    language: 'typescript',
    content: `const user = {name: "Courage"};

function getUserName(user: Record<string, any>) {
    return user.name
}

console.log(getUserName(user))
`
}

export const cssBiolerplait = {
    language: 'css',
    content: `body {
    background-color: #000;
}`
}

export const svgBiolerplait = {
    language: 'svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
<\/svg>`
}

export const htmlBiolerplait = {
    language: 'html',
    content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`
}