<script setup>
import { nextTick, onMounted, ref,watch } from 'vue'
import { mock } from '../../mock'

const chartRef = ref(null)
nextTick(()=>{
  chartRef.value?.setData(mock)
})


</script>

<template>
  <my-component ref="chartRef"></my-component>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
