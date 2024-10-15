import { defineStore } from 'pinia';


export interface Task {
  id: number;
  name: string;
  description?: string;
  status: 'TO DO' | 'IN PROGRESS' | 'DONE';
}


export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push({ ...task, id: this.tasks.length + 1 });
    },
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) this.tasks[index] = updatedTask;
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
  getters: {
    tasksByStatus: (state) => {
      return (status: string) => state.tasks.filter(task => task.status === status);
    },
  },
});
