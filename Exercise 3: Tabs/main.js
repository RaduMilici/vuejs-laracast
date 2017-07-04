/**
 * Created by radu.milici on 04/07/2017.
 */
Vue.component('tabs', {
    data() {
        return {
            tabs: []
        };
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach( tab => {
                tab.isActive = (tab === selectedTab);
            });
        }
    },
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>                    
                    </li>
                </ul>
            </div>
            
            <div class="tabs-details">
                <slot></slot>            
            </div>        
        </div>
    `,
    created() {
        this.tabs = this.$children;
    }
});

Vue.component('tab', {
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        href() {
            return `#${this.name.toLowerCase().replace(/ /g, '-')}`;
        }
    },
    props: {
        name: { required: true },
        selected: { default: false }
    },
    template: `<div v-if="isActive"> <slot></slot> </div>`,
    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#app'
});