
<script lang="ts">
import { defineComponent } from 'vue';
import KanbanBoard from './components/KanbanBoard.vue';
import TaskForm from './components/TaskForm.vue';

export default defineComponent({
  components: {
    KanbanBoard,
    TaskForm,
  },
});
</script>

<template>
  <div id="app">
    <h1>Kanban Board</h1>
    <KanbanBoard />
    <br><br><br>
    <TaskForm />
  </div>
</template>

<style scoped>
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightgrey;
  border-radius: 10px;
}

h1{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9acd32;
  padding: 30px;
  border-radius: 10px;
}
</style>
