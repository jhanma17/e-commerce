<template>
    <v-row 
    justify="center"
    align="center"
    >
        <v-col
        cols="6"
        >
            <v-card ref="form"
            >
                <v-row>
                    <v-col
                    cols="5"
                    >
                        <v-card-text>
                            <p
                                class="title text-center"
                            >
                                {{productoactual[1]}}
                            </p>
                            <p
                                class="title text-center"
                            >
                                {{productoactual[2]}}
                            </p>
                            <v-img
                            :src="productoactual[4]"
                            max-height="150"
                            max-width="250"
                            align="center"
                            >
                        
                            </v-img>
                        </v-card-text>
                    </v-col>
                    <v-col
                    cols="6"
                    >
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
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-btn 
                    :to="{name: 'Adminproductos'}"
                    text>
                        Cancelar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="editarproducto()"
                    >
                        Guardar
                    </v-btn>
                </v-card-actions>
                
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
    name:"Editarpro",
    data() {
        return {
            productoactual: ['0', '', 0, 0, ''],
            nuevonombre: '',
            nuevoprecio:0,
            nuevaimagen:''
        }
    },
    computed:{
        ...mapGetters(['getActual']),
        
    },
    methods: {
        ...mapActions(['agregarCarrito']),
        traerproducto(id){
            const path='http://localhost:5000/catalogo1/'
            axios.get(path+id) 
            .then((respuesta)=>{
                this.productoactual=respuesta.data
            }).catch((error)=>{
                console.log(error)
            }).then(()=>{
            })
        },
        adic(producto){
            var lista={
                id: producto[0],
                title: producto[1],
                precio: producto[2],
                calificacion: producto[3],
                thumbnailUrl: producto[4]
            }
            return lista
        },
        editarproducto(){
            var objeto = {
                id: this.productoactual[0],
                title: this.nuevonombre,
                precio: this.nuevoprecio,
                calificacion: this.productoactual[3],
                thumbnailUrl: this.nuevaimagen
            }
            const path='http://localhost:5000/catalogo1'
            axios.put(path, objeto)
            .then((respuesta)=>{
                this.$router.push({path: '/Adminproductos'})
            }).catch((error)=>{
                console.log(error)
            })
        }
    },
    created() {
        this.traerproducto(this.$route.params.id)
    },
}
</script>