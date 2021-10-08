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
              v-model="aut.userin"
              :rules="[logear()]"
              />
              <v-text-field 
              label="Contraseña" 
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="aut.passin"
              
              />
              
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-btn 
              color="grey darken-4 white--text"
              @click="[logear()]"
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
import {required, minLength, email} from 'vuelidate/lib/validators'
export default {
    name: "Login",
    data() {
      return {
          showPassword:false,
          aut:{
            userin: '',
            passin: ''
          },
      }

    },
    computed:{
      ...mapState(['user','pass']),
    },
    methods: {
      ...mapMutations(['guardar']),
      logear(){
        if(this.$v.$invalid){
          return 'invalid'
        }
      }
    },
    validations:{
      aut:{
        userin:{
          required,
          email
        }
      }
    }
}
</script>