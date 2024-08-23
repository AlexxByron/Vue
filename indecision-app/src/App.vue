<template>
  <h1>My App</h1>
  <hr />

  <MyCounter :value="7" />
  <MyCounterScript :value="7" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue'
import MyCounterScript from './components/MyCounterScript.vue'
</script>
