
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTaskStore } from '@/stores/taskStore';
import { Task } from '@/types/Task';

export default defineComponent({
  props: {
    taskToEdit: {
      type: Object as () => Task,
      default: null
    },
  },
  setup(props) {
    const taskStore = useTaskStore();
    const task = ref<Task>(props.taskToEdit ?? {
      id: 0,
      name: '',
      description: '',
      status: 'TO DO'
    });

    const isEdit = ref(!!props.taskToEdit);

    const submitForm = () => {
      if (isEdit.value) {
        taskStore.updateTask(task.value);
      } else {
        taskStore.addTask(task.value);
      }

      // Reset form after submission
      task.value = { id: 0, name: '', description: '', status: 'TO DO' };
    };

    return {
      task,
      isEdit,
      submitForm,
    };
  },
});
</script>

<template>
  <div class="task-form">
    <form @submit.prevent="submitForm">
      <input v-model="task.name" type="text" placeholder="Task Name" maxlength="250" required />
      <textarea v-model="task.description" placeholder="Task Description" maxlength="1000"></textarea>
      <select v-model="task.status" required>
        <option value="TO DO">TO DO</option>
        <option value="IN PROGRESS">IN PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>
      <button type="submit">{{ isEdit ? 'Update' : 'Create' }} Task</button>
    </form>
  </div>
</template>

<style scoped>
.task-form {
  display: flex;
  flex-direction:  row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #FFF37E;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

form{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input{
  margin-right: 20px;
}

textarea{
  margin-right: 20px;
}
</style>
