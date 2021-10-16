<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                sm="12"
            >
                <h1>Mi lista de deseos</h1>
            </v-col>
        </v-row>
        <v-row
        align="center"
        >
            <v-col
                cols="12"
            >
                <v-card
                class="pa-2"
                outlined
                color="grey lighten-3"
                tile
                >
                    <v-row
                    align="center"
                    >
                        <v-col
                        cols="1"
                        >
                        </v-col>
                        <v-col
                        cols="3"
                        >
                            <v-card-title>Producto</v-card-title>  
                        </v-col>
                        <v-col
                        cols="3"
                        >
                        </v-col>
                        <v-col
                        cols="3"
                        >
                            <v-card-title>Cantidad</v-card-title>
                        </v-col>
                        <v-col
                        cols="2"
                        >
                            <v-card-title>Precio</v-card-title>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row
        align="center"
        >
            <v-col
                cols="12"
                v-for="(producto, i) in carrito" :key="i"
            >
                <v-card
                class="pa-2"
                outlined
                color="grey lighten-3"
                tile
                >
                    <v-row
                    align="center"
                    >
                        <v-col
                        cols="1"
                        >
                            <v-img
                            height="70"
                            :src="producto.thumbnailUrl"
                            ></v-img>   
                        </v-col>
                        <v-col
                        cols="3"
                        >
                            <v-card-title>{{producto.title}}</v-card-title>  
                        </v-col>
                        <v-col
                        cols="3"
                        >
                        </v-col>
                        <v-col
                        cols="3"
                        >
                            <v-btn
                            elevation="1"
                            @click="producto.cantidad--, sacartotal()"
                            dense
                            >-</v-btn>
                            <v-btn
                            text
                            disabled
                            >{{producto.cantidad}}</v-btn>
                            <v-btn
                             @click="producto.cantidad++, sacartotal()"
                            elevation="1"
                            >+</v-btn>
                        </v-col>
                        <v-col
                        cols="2"
                        >
                            <v-card-text
                            class="title"
                            >
                            ${{producto.precio*producto.cantidad}}
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            >
                <v-card
                class="pa-2"
                outlined
                color="grey lighten-3"
                tile
                >
                    <v-row>
                        <v-col
                        cols="2"
                        >
                            <v-card-text
                            class="title"
                            >
                            TOTAL:
                            </v-card-text>
                        </v-col>
                        <v-col
                        cols="2"
                        >
                            <v-card-text
                            class="title"
                            >
                            {{totalPrecio()}}
                            </v-card-text>
                        </v-col>
                        <v-col
                        cols="6"
                        >
                        </v-col>
                        <v-col
                        cols="2"
                        >
                            <v-btn
                            color="red"
                            :to="{name: 'About'}"
                            >
                                Eliminar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            
        </v-row>
    </v-container>
</template>
<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: "Cart",
    data() {
        return {
            
            total:0
        }
    },
    methods: {
        ...mapMutations(['aumentar', 'disminuir']),
        sacartotal(){
            this.total=0
            this.carrito.forEach(element => {
                this.total=this.total+(element.precio*element.cantidad)
            });
        },
    },
    created() {
    },
    computed:{
        ...mapGetters(['totalPrecio']),
        ...mapState(['carrito']),
    }
}
</script>