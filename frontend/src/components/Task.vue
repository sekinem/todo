<template>
  <div class="task" :class="isCompleted ? 'completed' : 'not-completed'">
    <div class="task-title">
      <span>#{{ id }}: {{ title }}</span>
    </div>
    <div class="task-buttons">
      <button v-if="!isCompleted" @click="completeTask">Complete</button>
      <button @click="deleteTask">Delete</button>
    </div>
  </div>
</template>

<script>
import api from '../common/api';

const url = 'http://localhost:8080/api/todos';

export default {
  name: 'Task',
  props: {
    task: Object,
  },
  computed: {
    id() {
      return this.task.id;
    },
    title() {
      return this.task.title;
    },
    isCompleted() {
      return this.task.isCompleted;
    },
  },
  methods: {
    completeTask: async function() {
      await api.put(url, {
        id: this.id,
        title: this.title,
        isCompleted: this.isCompleted,
      });
      this.$emit('refresh');
    },
    deleteTask: async function() {
      await api.delete(url, {
        id: this.id,
      });
      this.$emit('refresh');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task {
  margin: 0.5rem 0;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-title {
  margin: 0 .5rem;
}

.task-buttons button{
  margin-right: .5rem;
}

.completed {
  background-color: silver;
}

.not-completed {
  background-color: #C2EEFF;
}
</style>
