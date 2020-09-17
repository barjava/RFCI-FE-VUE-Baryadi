<template>
  <div id="app">
    <input v-model="input1" placeholder="edit" />
    <p>Output : {{input1}}</p>
    <button v-on:click="reverseMessage" class="btn btn-block btn-success">Reverse</button>
    <button @click="add()">add</button>
    <button @click="undo()" :disabled="!canUndo">undo</button>
    <button @click="redo()" :disabled="!canRedo">redo</button>
    <ul>
      <li v-for="(todo,i) in todos" :key="todo">
        {{ todo }}
        <button @click="del(i)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    canUndo: function () {
      return this.historyIndex > 0;
    },
    canRedo: function () {
      return this.history.length - 1 - this.historyIndex > 0;
    },
  },

  data() {
    const todos = [];
    const history = [Object.assign([], todos)];
    const historyIndex = history.length - 1;
    return {
      input1: "",
      // input1: undefined,
      todos: todos,
      history: history,
      historyIndex: historyIndex,
    };
  },
  methods: {
    reverseMessage: function () {
      this.input1 = this.input1.split("").reverse().join("");
    },
    add: function () {
      if (this.input1) {
        this.todos.push(this.input1);
        this.input1 = undefined;
        this.log(this.todos);
      }
    },
    del: function (i) {
      console.log(i);
      this.todos.splice(i, 1);
      this.log(this.todos);
    },
    log: function (todos) {
      this.historyIndex += 1;
      this.history.splice(this.historyIndex);
      this.history.push(Object.assign([], todos));
    },
    undo: function () {
      if (this.canUndo) {
        this.historyIndex -= 1;
        this.todos = this.history[this.historyIndex];
      }
    },
    redo: function () {
      if (this.canRedo) {
        this.historyIndex += 1;
        this.todos = this.history[this.historyIndex];
      }
    },
  },
};
</script>


