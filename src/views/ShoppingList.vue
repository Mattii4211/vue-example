<script setup>
import { ref, onMounted } from 'vue'
import ThingItem from '../components/ThingItem.vue'
import { useRouter } from 'vue-router'

const items = ref([]);
const router = useRouter()

onMounted(() => {
    items.value = JSON.parse(localStorage.getItem('items')) || []
})

const add = () => {
    router.push('/add_shopping_list_item')
}

const clear = () => {
    localStorage.removeItem('items')
    items.value = []
}

const removeItem = (id) => {
    const updatedItems = items.value.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    items.value = updatedItems;
};
</script>

<template>
    <h2>Twoje produkty</h2>
    <button @click="add" class="btn btn-success">Dodaj produkt</button>
    <button v-if="items.length" @click="clear" class="btn btn-success">Wyczyść listę</button>
    <hr class="" />
    <div v-if="!items.length">Brak listy zakupów</div>
    <ThingItem v-for="item in items" :key="item.id" :item="item" @remove="removeItem" />
</template>