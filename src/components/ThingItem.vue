<script setup>
defineProps(['item']);
</script>

<template>
  <div class="card mb-2">
    <div class="card-body">
      <h5>{{ item.name }}</h5>
      <p>Ilość: {{ item.quantity }}</p>
      <span class="badge bg-secondary">{{ item.priority }}</span>
      <button class="btn btn-danger float-end" @click="$emit('remove', item.id)">Usuń</button>
    </div>
  </div>
</template>