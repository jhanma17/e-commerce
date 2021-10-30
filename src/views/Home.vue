<template>
  <div>
    <HelloWorld></HelloWorld> 
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import { mapMutations, mapState } from 'vuex';
  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
    data() {
      return {
        proinfo:[
          {nombre:"Cafe", img:"https://cdn.vuetifyjs.com/images/cards/cooking.png", precio:"5000"},
          {nombre:"Jhan", img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", precio:"30000"},
          {nombre:"Karem", img:"https://cdn.vuetifyjs.com/images/cards/cooking.png", precio:"500000"},
          {nombre:"Carlos", img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", precio:"20000"}
        ]
      }
    },
    computed: {
      ...mapState(['admin']),
    },
  }
</script>
