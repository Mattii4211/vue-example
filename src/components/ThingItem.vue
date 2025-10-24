<script setup>
import { useProductHelper } from '@/composables/useProductHelper'

const props = defineProps({
  item: { type: Object, required: true }
})

const { colorLevel, increment, decrement, formatDate, incrementColor, decrementColor } = useProductHelper(props.item)

</script>

<template>
  <div class="card mb-2">
    <div class="card-body" :class="item.level ? `bg-green-${colorLevel}` : ''">
      <h4>{{ item.name }}</h4>
      <h5>Ilość: {{ item.quantity }} {{ item.unit }}</h5>
      <span class="badge bg-secondary">{{ item.priority }}</span>
       <p>Dodano: {{ formatDate() }}</p>
      <button @click.stop="increment" class="btn btn-sm btn-success me-1">+</button>
      <button @click.stop="decrement" class="btn btn-sm btn-danger me-1">-</button>
      <br>
      <button @click.stop="incrementColor" class="btn btn-sm btn-info me-1">Kolor+</button>
      <button @click.stop="decrementColor" class="btn btn-sm btn-info me-1">Kolor-</button>
      <button class="btn btn-danger float-end" @click.stop="$emit('remove', item.id)">Usuń</button>
    </div>
  </div>
</template>
<style scoped>
.bg-green-100 {
  background-color: #d4edda;
}

.bg-green-200 {
  background-color: #c3e6cb;
}

.bg-green-300 {
  background-color: #a3e4b0;
}

.bg-green-400 {
  background-color: #8dd8a1;
}

.bg-green-500 {
  background-color: #66bb6a;
}

.bg-green-600 {
  background-color: #5cb85c;
}

.bg-green-700 {
  background-color: #4cae4f;
}

.bg-green-800 {
  background-color: #3e9b3b;
}

.bg-green-900 {
  background-color: #2f7d2f;
}
</style>