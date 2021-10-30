<template>
    <v-main>
        <v-container>
            <v-row
            justify="center"
            align="center"
            >
                <v-card width="400">
                    <v-img
                    height="200px"
                    src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                    >

                    <v-card-title class="white--text mt-8">
                        <v-avatar size="56">
                        <img
                            alt="user"
                            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                        >
                        </v-avatar>
                        <p class="ml-3">
                        {{user}}
                        </p>
                    </v-card-title>
                    <v-btn
                    @click="cerrar()"
                    >
                        Cerrar sesion
                    </v-btn>
                    </v-img>
                </v-card>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'Infocuenta',
    data() {
        return {
            
        }
    },
    computed:{
        ...mapState(['user', 'pass', 'admin'])
    },
    methods: {
        ...mapMutations(['setadmin', 'setuser', 'setpass']),
        cerrar(){
            localStorage.removeItem('admin')
            localStorage.removeItem('usuario')
            localStorage.removeItem('clave')
            this.setadmin(false)
            this.setuser(null)
            this.setpass(null)
            this.$router.push({path: '/login'})
        }
    },
}
</script>