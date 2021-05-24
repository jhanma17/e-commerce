<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        v-for="(producto, i) in proinfo" :key="i"
      >
        <v-card
          class="mx-auto my-12"
          max-width="374"
        >
          <v-img
            height="250"
            :src="producto.img"
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'HelloWorld',

    data: () => ({
      
    }),
    computed:{
      ...mapState(['proinfo'])
    }
  }
</script>
