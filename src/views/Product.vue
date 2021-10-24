<template>
    <v-container>
        <v-row>
            <v-col
            cols="12"
            >
                <v-card
                class="pa-2"
                outlined
                tile
                >
                    <v-row
                    >
                        <v-col
                        cols="6"
                        >
                            <v-img
                            height="500"
                            :src="productoactual[4]"
                            >

                            </v-img>
                        </v-col>
                        <v-col
                        cols="6"
                        align-self="center"
                        >
                            <v-card-title
                            class="display-1 font-weight-bold"
                            >{{productoactual[1]}}</v-card-title>
                            <v-divider class="mx-2"></v-divider>
                            <v-card-text
                            class="text-justify"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis amet quidem et, provident accusamus, maxime mollitia nobis repudiandae vel, ullam accusantium porro laboriosam omnis molestias laudantium veritatis. Architecto, dolore.
                            </v-card-text>
                            <v-rating
                            :value="4.5"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14"
                            ></v-rating>
                            <div class="grey--text ms-4">
                            4.5 (413)
                            </div>
                            <v-divider class="mx-2"></v-divider>
                            <v-card-subtitle
                            class="headline font-weight-bold"
                            >${{productoactual[2]}}</v-card-subtitle>

                            <v-btn
                            block
                            color="light-green lighten-3"
                            @click="agregarCarrito(productoactual[4])"
                            >
                                Agregar a la lista
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
          <div class="text-center">
    <v-rating
      v-model="rating"
      icon-label="custom icon label text {0} of {1}"
    ></v-rating>
  </div>
            <v-col
        cols="12"
        sm="12"
      >
        <v-textarea
          class="mx-2"
          label="Realiza un comentario"
          rows="1"
          prepend-icon="mdi-comment"
        ></v-textarea>
            <v-btn
            block
            color="light-green lighten-3"
            
            >
                Guardar
            </v-btn>
      </v-col>
    </v-container>
    
</template>
<script>
import { mapState, Store } from 'vuex';
import { mapMutations, mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
    name:"product",
    data() {
        return {
            productoactual: null
        }
    },
    computed:{
        ...mapGetters(['getActual']),
        
    },
    methods: {
        ...mapActions(['agregarCarrito']),
        traerproducto(id){
        const path='http://localhost:5000/catalogo1/'
        axios.get(path,{
            ID: id
        })
        .then((respuesta)=>{
          console.log(respuesta.data)
          this.productoactual=respuesta.data
        }).catch((error)=>{
          console.log(error)
        }).then(()=>{
        })
      }
    },
    created() {
        this.traerproducto(this.$route.params.id)
    },
}
</script>