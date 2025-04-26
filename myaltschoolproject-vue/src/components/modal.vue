<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h2 class="modal-title">Add New Todo</h2>
      <input
        type="text"
        class="modal-input"
        v-model="todoText"
        placeholder="Enter your todo item"
        autofocus
      />
      <div class="modal-buttons">
        <button class="modal-button modal-button-primary" @click="handleSubmit">
          Add
        </button>
        <button class="modal-button modal-button-secondary" @click="closeModal">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  closeModal: Function,
  onAdd: Function,
});

const todoText = ref("");

// Close modal on Escape key press
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === "Escape") props.closeModal();
  };
  document.addEventListener("keydown", handleEscape);

  onBeforeUnmount(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});

function handleSubmit() {
  props.onAdd(todoText.value);
  todoText.value = "";
}
</script>

<style scoped>
@import "../css/Modal.css";
</style>
