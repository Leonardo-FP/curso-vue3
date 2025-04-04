export default{
    namespaced:true,
    state:{
        count:1
    },
    actions:{
        increment(state, payload){
            state.commit('increment')
        },

    },
    mutations:{
        increment(state, payload){
            state.count++
        },

        decrement(state, payload){
            state.count--
        }
    },
    getters:{
        getCounter(state){
            return 'O total do count é '+state.count;
        }
    },
}