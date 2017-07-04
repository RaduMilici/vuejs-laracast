/**
 * Created by radu.milici on 03/07/2017.
 */

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
    template: '<ul> <task v-for="task in tasks">{{ task.description }}</task> </ul>',
    data() {
        return {
            tasks: [
                { description: 'task1', completed: false },
                { description: 'task2', completed: true },
                { description: 'task3', completed: false },
                { description: 'task4', completed: true },
                { description: 'task5', completed: false }
            ]
        }
    }
});

new Vue({
    el: '#app'
});