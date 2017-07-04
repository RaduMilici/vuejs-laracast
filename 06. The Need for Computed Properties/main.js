/**
 * Created by radu.milici on 03/07/2017.
 */

new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        tasks: [
            { description: 'task1', completed: false },
            { description: 'task2', completed: true },
            { description: 'task3', completed: false },
            { description: 'task4', completed: true },
            { description: 'task5', completed: false }
        ]
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        },
        incompleteTasks() {
            return this.tasks.filter( task => !task.completed );
        }
    }
});