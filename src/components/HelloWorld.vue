<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        v-for="producto in comprainfo" :key="producto.id"
      >
        <v-card
          class="mx-auto my-12"
          max-width="374"
        >
          <v-img
            height="250"
            :src="producto.thumbnailUrl"
          ></v-img>

          <v-card-title
          class="headline"
          >{{producto.title}}</v-card-title>

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
          text
          block
          color="indigo darken-1"
          :to="{name: 'Product', params: {id: producto.id}}"
          >
            Ver Producto
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
    methods: {
      ...mapMutations(['setProductos']),
    },
    created() {
    },
    computed:{
      ...mapState(['comprainfo']),
    }
  }
</script>
