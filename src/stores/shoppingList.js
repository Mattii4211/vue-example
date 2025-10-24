import { defineStore } from 'pinia'

export const useShoppingListStore = defineStore('shoppingList', {
    state: () => ({
        items: []
    }),
    persist: true,
    getters: {
        itemsCount: (state) => state.items.length,
        highPriority: (state) => state.items.filter(item => item.priority === 'high')
    },

    actions: {
        addItem({ name, quantity, priority, unit }) {
            if (!name || typeof quantity !== 'number' || quantity <= 0) {
                throw new Error('Nazwa i ilość są wymagane')
            }

            this.items.push({
                id: Date.now(),
                name,
                quantity,
                priority,
                unit,
                level: 0,
                createdAt: new Date()
            })
        },

        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id)
        },

        clear() {
            this.items = []
        },

        updateQuantity(id, newQuantity) {
            const item = this.items.find(i => i.id === id)
            if (item) item.quantity = newQuantity
        },

        updateColorLevel(id, newLevel) {
            const item = this.items.find(i => i.id === id)
            if (item) item.level = newLevel
        },

        editItem(id, updatedFields) {
            const item = this.items.find(i => i.id === id)
            if (item) Object.assign(item, updatedFields)
        },
    }
})
