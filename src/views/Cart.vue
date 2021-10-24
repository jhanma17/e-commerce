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
                v-for="(producto, i) in carrolocal" :key="i"
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
                            :src="producto[4]"
                            ></v-img>   
                        </v-col>
                        <v-col
                        cols="3"
                        >
                            <v-card-title>{{producto[1]}}</v-card-title>  
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
                            @click="disminuir(producto[1]), sacartotal()"
                            dense
                            >-</v-btn>
                            <v-btn
                            text
                            disabled
                            
                            >{{producto.cantidad}}</v-btn>
                            <v-btn
                             @click="aumentar(producto[1]), sacartotal()"
                            elevation="1"
                            >+</v-btn>
                        </v-col>
                        <v-col
                        cols="2"
                        >
                            <v-card-text
                            class="title"
                            >
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
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: "Cart",
    data() {
        return {
            total:0,
            carrolocal: null,
        }
    },
    methods: {
        ...mapActions(['aumentar', 'disminuir']),
        sacartotal(){
            this.total=0
        },
    },
    created() {
    },
    computed:{
        ...mapGetters(['totalCantidad', 'totalPrecio']),
        ...mapState(['carrito']),
    },
    updated() {
        this.carrolocal=this.carrito
    },
}
</script>