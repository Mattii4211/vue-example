<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useShoppingListStore } from '@/stores/shoppingList'

const store = useShoppingListStore();
const router = useRouter()
const name = ref('')
const quantity = ref(0)
const priority = ref('normal')
const unit = ref('szt')

const save = () => {
  const item = {
    name: name.value,
    quantity: quantity.value,
    priority: priority.value,
    unit: unit.value,
  }

  try { 
    store.addItem(item);
    router.push('/shopping_list')
  }
  catch (e) { 
    alert(e.message) 
  }  
  
}
</script>

<template>
  <h2>Dodaj produkt</h2>
  <input v-model="name" placeholder="Produkt" class="form-control mb-2" />
  <input v-model="quantity" type="number" min="0" step="0.1" placeholder="Ilość" class="form-control mb-2" />
  <select v-model="unit" class="form-select mb-2">
    <option value="szt">sztuk</option>
    <option value="kg">kilogram</option>
    <option value="g">gram</option>
    <option value="l">litr</option>
  </select>
  <select v-model="priority" class="form-select mb-2">
    <option value="low">Niski</option>
    <option value="normal">Normalny</option>
    <option value="high">Wysoki</option>
  </select>
  <button @click="save" class="btn btn-success">Zapisz</button>
  <button @click="$router.push('/shopping_list')" class="btn btn-danger">Anuluj</button>
</template>
