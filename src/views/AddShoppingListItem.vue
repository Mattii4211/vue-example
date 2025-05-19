<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const quantity = ref(0)
const priority = ref('normal')
const unit = ref('szt')

const save = () => {
  const item = {
    id: Date.now(),
    name: name.value,
    quantity: quantity.value,
    priority: priority.value,
    unit: unit.value
  }

  const isValid = Object.values(item).every(value => value !== '' && value !== 0)

  if (!isValid) {
    alert('Nazwa i ilość są wymagane')
    return
  }

  const current = JSON.parse(localStorage.getItem('items')) || []
  localStorage.setItem('items', JSON.stringify([...current, item]))
  router.push('/shopping_list')
}
</script>

<template>
  <h2>Dodaj produkt</h2>
  <input v-model="name" placeholder="Produkt" class="form-control mb-2" />
  <input v-model="quantity" type="number" min="0" placeholder="Ilość" class="form-control mb-2" />
  <select v-model="unit" class="form-select mb-2">
    <option value="szt">sztuk</option>
    <option value="kg">kilogram</option>
    <option value="g">gram</option>
  </select>
  <select v-model="priority" class="form-select mb-2">
    <option value="low">Niski</option>
    <option value="normal">Normalny</option>
    <option value="high">Wysoki</option>
  </select>
  <button @click="save" class="btn btn-success">Zapisz</button>
  <button @click="$router.push('/shopping_list')" class="btn btn-danger">Anuluj</button>
</template>
