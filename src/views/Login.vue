<template>
    <v-main>
      <v-container>
        <v-row>
          <v-card width="400" class="mx-auto mt-9 ">
            <v-card-title class="justify-center yellow accent-3">¡HOLA USUARIO!</v-card-title>
            <v-card-text class="justify-center">
              <v-text-field 
              label="Correo Electronico" 
              prepend-icon="mdi-account-circle"
              v-model="userin"
              />
              <v-text-field 
              label="Contraseña" 
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="passin"
              />
              
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-btn 
              color="grey darken-4 white--text"
              @click="guardar(userin, passin)"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
        <v-row class="justify-center pt-6">
          <p class="text-h6">No tienes cuenta? Registrate</p>
          <v-btn
          class="text-h6 white--text mt-1"
          x-small
          plain
          >
            aquí
          </v-btn>
        </v-row>
      </v-container>
    </v-main>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "Login",
    data() {
      return {
          showPassword:false,
          userin:"",
          passin:""
      }

    },
    computed:{
      ...mapState(['user','pass']),
    },
    methods: {
      ...mapMutations(['guardar'])
    },
}
</script>