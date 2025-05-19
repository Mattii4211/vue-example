import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Example from '../views/Example.vue'
import ShoppingList from '../views/ShoppingList.vue'
import AddShoppingListItem from '../views/AddShoppingListItem.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/example', name: 'Example', component: Example },
    { path: '/shopping_list', name: 'ShoppingList', component: ShoppingList },
    { path: '/add_shopping_list_item', name: 'AddShoppingListItem', component: AddShoppingListItem },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
