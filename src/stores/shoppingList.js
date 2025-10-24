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
                level: 0
            })
        },

        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id)
        },

        clear() {
            this.items = []
        },

        increaseColor(id) {
            const getNextLevel = (level) => {
                if (level !== undefined) {
                    return Math.min(level + 100, 900);
                }
                return 100;
            };

            this.items = this.items.map(item =>
                item.id === id
                    ? {
                        ...item,
                        level: getNextLevel(item.level)
                    }
                    : item
            )
        }
    }
})
