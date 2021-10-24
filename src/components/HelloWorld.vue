<template>
  <v-container>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" class="mb-10"></v-parallax>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        v-for="producto in catalogo" :key="producto.ID"
      >
        <v-card color="#dbdbdb"
          class="justify-center"
          max-width="374"
        >
          <v-img
            height="250"
            :src="producto.imagen"
          ></v-img>

          <v-card-title
          class="headline"
          >{{producto.nombre}}</v-card-title>

          <v-card-text
          color="dark"
          class="title"
          >
            <v-row
              align="center"
              class="mx-0"
            >
              ${{producto.precio}}
            </v-row>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title
          class="body-1"
          >--Descripcion corta--</v-card-title>

              <v-btn
                
                class="mx-2 "
                align="center"
                fab
                dark
                small
                color="gray"
                :to="{name: 'Product', params: {id: producto.ID}}"
              >
                <v-icon dark >
                  mdi-heart
                </v-icon>
              </v-btn>
 
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import axios from 'axios'
  export default {
    name: 'HelloWorld',

    data() {
      return {
        catalogo:[]
      }

    },
    methods: {
      ...mapMutations(['setProductos']),
      traerproductos(){
        var cat
        const path='http://localhost:5000/catalogo'
        axios.get(path)
        .then((respuesta)=>{
          console.log(respuesta.data)
          cat=respuesta.data
        }).catch((error)=>{
          console.log(error)
        }).then(()=>{
        })
        return cat
      }
    },
    created() {
      this.catalogo=this.traerproductos()

    },
    computed:{
      ...mapState(['comprainfo']),
    }
  }
</script>
