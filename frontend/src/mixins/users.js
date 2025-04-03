import http from '@/services/http.js';

export default {

    data(){
        return {
            usersData:[]
        }
    },

    async mounted(){
        console.log('Chamou de dentro do Mounted do users')
        this.usersData = await this.getUsers();
    },

    computed:{
        getTotalUsers(){
            return this.usersData.length;
        }
    },

    methods:{
        async getUsers(){
            try{
                const {data} = await http.get('/api/users');
                return data;
            } catch(error){
                console.log(error)
            }
        }
    }
}