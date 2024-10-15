
<script lang="ts">
import { defineComponent } from 'vue';
import { useTaskStore } from '@/stores/taskStore';
import { Task } from '@/types/Task';

export default defineComponent({
  setup() {
    const taskStore = useTaskStore();
   
    const statuses = ['TO DO', 'IN PROGRESS', 'DONE'] as const;

    const tasksByStatus = (status: string) => taskStore.tasksByStatus(status);

    const deleteTask = (id: number) => {
      taskStore.deleteTask(id);
    };

    const editTask = (task: Task) => {
      // Logic to edit task (open modal)
    };

    return {
      statuses,
      tasksByStatus,
      deleteTask,
      editTask,
    };
  },
});
</script>

<template>
  <div class="kanban-board">
    <div class="kanban-column" v-for="status in statuses" :key="status">
      <h2>{{ status }}</h2>
      <div v-for="task in tasksByStatus(status)" :key="task.id" class="kanban-task">
        <h3>{{ task.name }}</h3>
        <p>{{ task.description }}</p>
        <button @click="deleteTask(task.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kanban-board {
  display: flex;
  justify-content: space-between;
}

.kanban-column {
  flex: 1;
  padding: 10px;
  background: #E6FBAB;
  margin: 0 10px;
  border-radius: 4px;
}

.kanban-task {
  background: #9DE05A;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
