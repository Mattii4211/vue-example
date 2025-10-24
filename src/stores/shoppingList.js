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
            this.items = this.items.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: newQuantity
                    }
                    : item
            )
        },

        updateColorLevel(id, newLevel) {
            this.items = this.items.map(item =>
                item.id === id
                    ? {
                        ...item,
                        level: newLevel
                    }
                    : item
            )
        },
        
        editItem(id, updatedFields) {
            this.items = this.items.map(item =>
                item.id === id
                ? { ...item, ...updatedFields }
                : item
            )
        },
    }
})
