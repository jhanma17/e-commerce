<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    
                </th>
                <th class="text-left">
                    Nombre
                </th>
                <th class="text-left">
                    Cantidad
                </th>
                <th class="text-left">

                </th>
                <th class="text-left">
                    Precio
                </th>
                <th class="text-left">
                    Total
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in getcarrito()"
                :key="item.id"
                >
                <td>
                    <v-img
                    :src="item.thumbnailUrl"
                    max-height="150"
                    max-width="250"
                    ></v-img>
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.cantidad }}</td>
                <td>
                    <v-btn @click="aumentar(item.id)">
                        +
                    </v-btn>
                    <v-btn @click="disminuir(item.id)">
                        -
                    </v-btn>
                </td>
                <td>${{ item.precio }}</td>
                <td>${{ item.precio * item.cantidad }}</td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td></td>
                    <td>{{totalCantidad}}</td>
                    <td></td>
                    <td></td>
                    <td>${{totalPrecio}}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: "Cart",
    data() {
        return {
            total:0,
            carrolocal: {},
        }
    },
    methods: {
        ...mapMutations(['aumentar', 'disminuir']),
        sacartotal(){
            this.total=0
        },
    },
    computed:{
        ...mapGetters(['totalCantidad', 'totalPrecio', 'getcarrito']),
        ...mapState(['carrito']),
    },
}
</script>