<template>
    <v-container>
        <v-row
        justify="center"
        align="center"
        >
            <v-col
            cols="12"
            justify="center"
            align="center"
            >
                <v-btn
                class="green"
                @click="añadir=true"
                >
                    Añadir producto
                </v-btn>
            </v-col>
        </v-row>
        <v-row
        v-if="añadir==true"
        >
            <v-row justify="center">
                <v-col
                cols="12"
                sm="10"
                md="8"
                lg="6"
                >
                <v-card ref="form">
                    <v-card-text>
                        <v-text-field
                            v-model="nuevonombre"
                            label="Nombre"
                        ></v-text-field>
                        <v-text-field
                            v-model="nuevoprecio"
                            label="Precio"
                        ></v-text-field>
                        <v-text-field
                            v-model="nuevaimagen"
                            label="Imagen URL"
                        ></v-text-field>
                    </v-card-text>
                </v-card>
                </v-col>
            </v-row>
        </v-row>
        <v-row
        justify="center"
        align="center"
        v-if="añadir==true"
        >
            <v-btn
            class="green mr-5"
            @click="añadirproducto()"
            >
                Guardar
            </v-btn>
            <v-btn
            class="red"
            @click="añadir=false"
            >
                Close
            </v-btn>
        </v-row>
        <v-row>
            <v-col
                cols="12"
                sm="4"
                v-for="producto in catalogo" :key="producto[0]"
                justify="center"
                align="center"
            >
                <v-card color="#dbdbdb"
                class="justify-center"
                max-width="374"
                >
                <v-img
                    height="250"
                    :src="producto[4]"
                ></v-img>

                <v-card-title
                class="headline"
                >{{producto[1]}}</v-card-title>

                <v-card-text
                color="dark"
                class="title"
                >
                    <v-row
                    align="center"
                    class="mx-0"
                    >
                    ${{producto[2]}}
                    </v-row>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title
                class="body-1"
                >--Descripcion corta--</v-card-title>

                    <v-btn
                        
                        class="mx-2 "
                        align="center"
                        dark
                        color="gray"
                        :to="{name: 'Editarpro', params: {id: producto[0]}}"
                    >
                        Editar
                    </v-btn>
                    <v-btn
                        
                        class="mx-2 "
                        align="center"
                        dark
                        color="gray"
                        @click="eliminarproducto(producto[0])"
                    >
                        Eliminar
                    </v-btn>
                    
                </v-card>
                
            </v-col>
        </v-row>
    </v-container>
        
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import axios from 'axios'
import Editarproductos from '../components/Editarproductos'
  export default {
    name: 'Adminproductos',
    components: {
      Editarproductos,
    },
    data() {
      return {
        catalogo:[],
        añadir:false,
        nuevonombre: '',
        nuevoprecio:0,
        nuevaimagen:''
      }

    },
    methods: {
        ...mapMutations(['setProductos']),
        traerproductos(){
            const path='http://localhost:5000/catalogo'
            axios.get(path)
            .then((respuesta)=>{
            console.log(respuesta.data)
            this.catalogo=respuesta.data
            }).catch((error)=>{
            console.log(error)
            }).then(()=>{
            })
        },
        añadirproducto(){
            var objeto = {
                title: this.nuevonombre,
                precio: this.nuevoprecio,
                calificacion: 0,
                thumbnailUrl: this.nuevaimagen
            }
            const path='http://localhost:5000/catalogo1'
            axios.post(path, objeto)
            .then((respuesta)=>{
                this.$router.go(0)
            }).catch((error)=>{
                console.log(error)
            })
        },
        eliminarproducto(id){
            const path='http://localhost:5000/catalogo1/'
            axios.delete(path+id) 
            .then((respuesta)=>{
                this.$router.go(0)
            }).catch((error)=>{
                console.log(error)
            })
        }
    },
    created() {
      this.traerproductos()
    },
    computed:{
      ...mapState(['comprainfo']),
    }
  }
</script>