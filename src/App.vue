<script setup lang="ts">
import MonacoEditor from './components/MonacoEditor.vue'
</script>

<template>
  <Suspense>
    <MonacoEditor />
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
