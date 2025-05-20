<script setup>
const props = defineProps(['item'])
const emit = defineEmits(['remove', 'click-color'])

const handleClick = () => {
  emit('click-color', props.item.id)
}
</script>

<template>
  <div class="card mb-2">
    <div class="card-body" :class="item.level ? `bg-green-${item.level}` : ''" @click="handleClick">
      <h4>{{ item.name }}</h4>
      <h5>Ilość: {{ item.quantity }} {{ item.unit }}</h5>
      <span class="badge bg-secondary">{{ item.priority }}</span>
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