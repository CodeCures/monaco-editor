export const vueBiolerplait = `<script lang="ts" setup>
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

export const tsBiolerplait =
    `const user = {name: "Courage"};

function getUserName(user: Record<string, any>) {
    return user.name
}

console.log(getUserName(user))
`