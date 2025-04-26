<template>
  <div class="todo-container">
    <h1 class="todo-title">My Todo List</h1>

    <!-- Add Todo Button -->
    <button
      class="add-todo-btn"
      @click="showModal = true"
      aria-label="Add new todo"
    >
      Add Todo
    </button>

    <!-- Modal Component, it will show when showModal is true -->
    <Modal v-if="showModal" :closeModal="closeModal" :onAdd="addTodo" />

    <!-- Todo List -->
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <span>{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Modal from "./Modal.vue"; // Only import Modal once

export default {
  components: {
    Modal, // Register the Modal component
  },
  setup() {
    const todos = ref([]);
    const showModal = ref(false);

    // Method to close the modal
    const closeModal = () => {
      showModal.value = false;
    };

    // Method to add a new todo
    const addTodo = (newTodo) => {
      if (newTodo.trim()) {
        const newTodoItem = {
          id: Date.now(),
          text: newTodo,
        };
        todos.value.push(newTodoItem); // Add new todo to the list
        localStorage.setItem("todos", JSON.stringify(todos.value)); // Save to localStorage
      }
      closeModal(); // Close the modal after adding the todo
    };

    // Method to delete a todo by its ID
    const deleteTodo = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id); // Remove todo by ID
      localStorage.setItem("todos", JSON.stringify(todos.value)); // Update localStorage
    };

    // Load saved todos from localStorage when the component is mounted
    onMounted(() => {
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      todos.value = savedTodos;
    });

    return { todos, showModal, closeModal, addTodo, deleteTodo };
  },
};
</script>

<style scoped>
/* Add your TodoList styling here */
</style>
