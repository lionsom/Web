<script setup>
import { defineModel } from 'vue'
const modelValue = defineModel()
</script>

<template>
<div>
  <input 
    type="text" 
    :value="modelValue" 
    @input="e => modelValue = e.target.value"
  >
</div>
</template>



