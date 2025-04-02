<template>
  <input type="text" v-model="user.firstName" placeholder="First Name">
  <input type="text" v-model="user.lastName" placeholder="Last Name">

  <hr>

  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item.name }}
      <input type="text" v-model="item.price">
    </li>
  </ul>
</template>

<script>

  export default {
    data(){
      return {
        firstName:'',
        lastName:'',
        user:{
          firstName:'',
          lastName:'',
          address:{
            street:''
          }         
        },
        items:[
            {
              id:1, 
              name:'teste1',
              price:10
            },
            {
              id:2, 
              name:'teste2',
              price:100
            }
          ]
      }
    },

    watch:{
      // firstName(value, oldValue){
      //   console.log('new =>'+value, 'old=>'+oldValue)
      // },

      // lastName(value, oldValue){
      //   console.log('new =>'+value, 'old=>'+oldValue)
      // },

      // 'user.firstName': function(value, oldValue){
      //   console.log('new =>'+value, 'old=>'+oldValue)
      // },

      // 'user.lastName': function(value, oldValue){
      //   console.log('new =>'+value, 'old=>'+oldValue)
      // },

      // 'user.address.street': function(value, oldValue){
      //   console.log('new =>'+value, 'old=>'+oldValue)
      // }
    },

    watch:{
      items:{
        handler(itemsObject, oldValue){
          itemsObject.forEach(element => {
            if(!Number.isInteger(Number(element.price))){
              console.log('Não é um integer '+element.price)
            }
          });
        },

        deep:true,
        immediate:true
      }
    }
    
  }
</script>

<style >
 
</style>

