<script setup>
defineProps(['item']);
</script>

<template>
  <div class="card mb-2">
    <div class="card-body">
      <h4>{{ item.name }}</h4>
      <h5>Ilość: {{ item.quantity }} {{ item.unit }}</h5>
      <span class="badge bg-secondary">{{ item.priority }}</span>
      <button class="btn btn-danger float-end" @click="$emit('remove', item.id)">Usuń</button>
    </div>
  </div>
</template>