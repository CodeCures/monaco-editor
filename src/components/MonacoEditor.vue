<script setup lang="ts">
import { useMonacoEditor } from '../composables/useMonacoEditor'

const vModel = defineModel()
const props = defineProps({
  fileName: String,
  lang: String
})

const { editorEl } = useMonacoEditor(vModel, props)
</script>

<template>
  <div ref="editorEl" id="editor" style="height: 100vh"></div>
</template>

<style scoped>
#editor {
  width: 100%;
  height: 100%;
}
</style>
