<script setup lang="ts">
import { ref, watch } from 'vue'
import MonacoEditor from './components/MonacoEditor.vue'
import data from './components/Test.vue?raw'
const vueBiolerplate = ref(data)

watch(vueBiolerplate, (value) => console.log(value))
</script>

<template>
  <Suspense>
    <MonacoEditor v-model="vueBiolerplate" lang="vue" file-name="Test.vue" />
  </Suspense>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
html,
body,
#app,
#editor {
  height: 100%;
}
</style>
