new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
}); 