import { ref, watch } from 'vue'
import { useShoppingListStore } from '@/stores/shoppingList'

export function useProductHelper(item) {
    const store = useShoppingListStore()
    const quantity = ref(item.quantity)
    const colorLevel = ref(item.level)

    watch(quantity, (newQuantity) => {
        store.updateQuantity(item.id, newQuantity)
    })

    watch(colorLevel, (newLevel) => {
        store.updateColorLevel(item.id, newLevel)
    })

    const increment = () => { quantity.value++ }
    const decrement = () => { if (quantity.value > 0) quantity.value-- }
    
    const decrementColor = () => {
        colorLevel.value = getPreviousLevel(colorLevel.value)
    }
    const incrementColor = () => {
        colorLevel.value = getNextLevel(colorLevel.value)
    }

    const formatDate = () => new Date(item.createdAt).toLocaleString()

    const getNextLevel = (level) => {
        if (level !== undefined) {
            return Math.min(level + 100, 900);
        }
        return 100;
    };  

    const getPreviousLevel = (level) => {
        if (level !== undefined && level > 100) {
            return Math.max(level - 100, 100);
        }
        return 0;
    };  

    return { quantity, colorLevel, increment, decrement, formatDate, incrementColor, decrementColor }
}
