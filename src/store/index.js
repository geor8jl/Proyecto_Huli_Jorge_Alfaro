import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex);


  
const store = new Vuex.Store({
    state: { 

        user: { 
            name: 'Jorge' ,
            lastname: 'Alfaro',
            email: 'jorge@alfaro.com',
            phone: '6546-6546',
        }
    },
    mutations: { 
        
        initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.apply(state, state)
				);
			}
        },
        

    },
    getters: {},
    actions: { 

    },
    plugins: [new VuexPersistence().plugin],
});



export default store

 