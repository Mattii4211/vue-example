<script setup>
import { computed } from 'vue'

const props = defineProps({
  labels: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  class: {
    type: String,
    default: 'table table-striped table-dark table-hover',
    required: false
  }
});

const itemKeys = computed(() => {
  return props.items.length > 0 ? Object.keys(props.items[0]) : []
})

</script>
<template>
  <table :class="props.class">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" v-for="(label, i) in labels" :key="i">{{ label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, rowIndex) in items" :key="rowIndex">
        <td>{{ rowIndex + 1 }}</td>
        <td v-for="(key, colIndex) in itemKeys" :key="colIndex">
          {{ item[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
