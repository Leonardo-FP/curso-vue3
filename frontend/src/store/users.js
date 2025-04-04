import http from '@/services/http';
export default{
    namespaced:true,
    state:{
       data:[]
    },
    actions:{
       async getUsers(state, payload){
        try{
            const {data} = await http.get('/api/users');
            state.commit('setUsers', data);
        }catch(error){
            console.log(error)
        }
       }
    },
    mutations:{
      setUsers(state, payload){
        state.data = payload;
      }
    },
    getters:{
    
    },
}