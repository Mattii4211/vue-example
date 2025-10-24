<script setup>
import ThingItem from '@/components/ThingItem.vue'
import { useRouter } from 'vue-router'
import { useShoppingListStore } from '@/stores/shoppingList'
import { products } from '@/data/products'
import ItemModal from '@/components/ItemModal.vue'
import { ref, nextTick } from 'vue'

const store = useShoppingListStore();
const router = useRouter()
const selectedItem = ref(null)

const selectItem = (item) => {
  selectedItem.value = null;
  nextTick(() => {
    selectedItem.value = item
  })
}

const add = () => {
    router.push('/add_shopping_list_item')
}

const addDummy = () => {
    const randomProduct = products[Math.floor(Math.random() * products.length)]

    store.addItem({
        name: randomProduct.name,
        unit: randomProduct.unit,
        priority: randomProduct.priority,
        quantity: randomProduct.quantity,
    })
}

</script>

<template>
    <br />
    <button @click="addDummy" class="btn btn-info">Dodaj przykładowy produkt</button>
    <br />
    <h2>Twoje produkty: {{ store.itemsCount > 0 ? store.itemsCount : 'brak'}}</h2>
    <button @click="add" class="btn btn-success">Dodaj produkt</button>
    <button v-if="store.items.length" @click="store.clear" class="btn btn-success">Wyczyść listę</button>
    <hr class="" />
    <div v-if="!store.items.length">Brak listy zakupów</div>
    <ThingItem 
        v-for="item in store.items" 
        :key="item.id" 
        :item="item" 
        @remove="store.removeItem(item.id)" 
        @click="selectItem(item)"
    />
    <ItemModal 
        :item="selectedItem"
        @edit="(selectedItem, updatedFields) => store.editItem(selectedItem.id, updatedFields)"
    />
</template>

<style scoped>
.list-group-item {
  cursor: pointer;
}
.list-group-item:hover {
  background-color: #f8f9fa;
}
</style>