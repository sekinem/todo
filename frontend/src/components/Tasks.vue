<template>
  <div>
    <h1>ToDo</h1>
    <h3>Create task</h3>
    <div class="newTask">
      <input class="newTask-title" type="text" name="title" v-model="newTask.title" />
      <button class= "newTask-button" @click="createTask">Create</button>
    </div>
    <h3>Tasks</h3>
    <div class="tasks">
      <template v-if="tasks.length !== 0">
        <Task v-for="task in tasks" :key="task.title" :task="task" @refresh="fetchTasks" />
      </template>
      <p v-else>There are no tasks.</p>
    </div>
  </div>
</template>

<script>
import api from '../common/api';
import Task from './Task.vue';

const url = 'http://localhost:8080/api/todos';

export default {
  name: 'Tasks',
  components: {
    Task,
  },
  data: () => {
    return {
      newTask: {
        title: null,
      },
      tasks: [],
    };
  },
  created: async function() {
    this.fetchTasks();
  },
  methods: {
    createTask: async function() {
      await api.post(url, this.newTask);
      this.newTask.title = null;
      await this.fetchTasks();
    },
    fetchTasks: async function() {
      this.tasks = await api.get(url);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 1rem 0 .5rem 0;
}

a {
  color: #42b983;
}

.newTask-title  {
  width: 20rem;
}

.newTask-button  {
  margin-left: 1rem;
}

.tasks {
  width: 50rem;
  margin: 0 auto;
}
</style>
