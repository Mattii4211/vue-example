<script setup>
import ThingItem from '@/components/ThingItem.vue'
import { useRouter } from 'vue-router'
import { useShoppingListStore } from '@/stores/shoppingList'

const store = useShoppingListStore();
const router = useRouter()

const add = () => {
    router.push('/add_shopping_list_item')
}

</script>

<template>
    <h2>Twoje produkty {{ store.itemsCount }}</h2>
    <button @click="add" class="btn btn-success">Dodaj produkt</button>
    <button v-if="store.items.length" @click="store.clear" class="btn btn-success">Wyczyść listę</button>
    <hr class="" />
    <div v-if="!store.items.length">Brak listy zakupów</div>
    <ThingItem v-for="item in store.items" :key="item.id" :item="item" @remove="store.removeItem" @click-color="store.increaseColor" />
</template>