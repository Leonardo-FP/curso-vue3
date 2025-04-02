<template>
  <Currency type="text" v-model="dolar" placeholder="Dólar" :options="{ currency: 'USD' }" />

  <hr>

  <ul>
    <li>{{ dolarTodayValue }}</li>
    <li>{{dolarToReaisValue}}</li>
  </ul>
</template>

<script>

  import format from '../services/format';
  import http from '../services/http';
  import Currency from '@/components/Currency.vue';

  export default {

    components:{
      Currency
    },

    data(){
      return {
        dolar: 0,
        dolarToday: 0,
        dolarToReais: 0
      }
    },

    async mounted(){
      try{

        const dolarToday = await this.getDolar();
        this.dolarToday = dolarToday['high'];

      }catch(error){

        console.log(error);

      }
    },

    methods:{
      async getDolar(type = 'USD-BRL'){
        const {data} = await http.get('https://economia.awesomeapi.com.br/json/last/'+type);
        const typeCurrency = type.split('-').join('');
        return data[typeCurrency];
      }
    },

    computed:{
      dolarToReaisValue(){
        return `O valor em reais de ${format(this.dolar, 'en-US', 'USD')} é de: ${format(this.dolarToReais, 'pt-BR', 'BRL')}`;
      },

      dolarTodayValue(){
        return `O dólar hoje está em: ${format(this.dolarToday, 'pt-BR', 'BRL')}`; 
      }
    },

    watch:{
      dolar(value){
        this.dolarToReais = value * this.dolarToday;
      }
    }
  }
</script>