<template>
    <div v-if="item" class="modal fade" tabindex="-1" ref="modalRef">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ item.name }}</h5>
                    <button type="button" class="btn-close" @click="close"></button>
                </div>
                <div class="modal-body">
                    <p>Ilość: {{ item.quantity }} {{ item.unit }}</p>
                    <p>Priorytet: {{ item.priority }}</p>
                    <p>Dodano: {{ item.createdAt }}</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-warning" @click="handleEdit">Edytuj</button>
                    <button class="btn btn-secondary" @click="close">Zamknij</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Modal } from 'bootstrap'
import { ref, watchEffect, watch, nextTick } from 'vue'

const emit = defineEmits(['edit'])

const props = defineProps({
    item: Object
})
const modalRef = ref(null)
let bootstrapModal = null

const handleEdit = () => {
  emit('edit', props.item, {
    name: props.item.name + ' (edytowany)',
    quantity: props.item.quantity + 1,
    priority: 'normal'
  })
  close()
}

const initModal = () => {
    if (!bootstrapModal && modalRef.value) {
        bootstrapModal = new Modal(modalRef.value, {
            backdrop: 'static',
            keyboard: false
        })

        modalRef.value.addEventListener('hidden.bs.modal', () => {
            bootstrapModal.dispose()
            bootstrapModal = null
        })
    }
}

const show = () => {
    if (!modalRef.value) return;
    initModal()
    bootstrapModal?.show()
}

const close = () => {
    if (bootstrapModal) bootstrapModal.hide()
}

watchEffect(() => {
    if (props.item) {
        show()
    }
})

watch(
    () => props.item,
    async (newItem) => {
        if (newItem) {
            await nextTick()
            show()
        }
    }
)

</script>

<style scoped></style>
