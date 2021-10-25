<template>
    <v-main>
      <v-container>
        <v-row>
          <v-card width="400" class="mx-auto mt-9 ">
            <v-card-title class="justify-center yellow accent-3">¡REGISTRATE!</v-card-title>
            <v-card-text class="justify-center">
              <v-text-field 
              label="Correo Electronico" 
              prepend-icon="mdi-account-circle"
              v-model="userin"
              :rules="[usuarioval()]"
              />
              <v-text-field 
              label="Contraseña" 
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="passin"
              :rules="[claveval()]"
              />
              <v-text-field 
              label="Confirmar Contraseña" 
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="passconf"
              :rules="[confval()]"
              />
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-btn 
              color="grey darken-4 white--text"
              v-if="logear()=='invalid'"
              disabled
              >
                Registrate
              </v-btn>
              <v-btn 
              color="grey darken-4 white--text"
              v-else
              @click="registrar()"
              >
                Registrate
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-dialog
            v-model="dialog"
            max-width="290"
          >
            <v-card>
              <v-card-title class="text-h5">
                {{mensaje}}
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="cerrardialogo()"
                >
                  Continuar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <v-row class="justify-center pt-6">
          <p class="text-h6">Ya tienes cuenta? Ingresa</p>
          <v-btn
          class="text-h6 black--text mt-1"
          x-small
          plain
          :to="{name: 'Login'}"
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
import axios from 'axios'
export default {
    name:"Register",
    data() {
      return {
          showPassword:false,
          userin: '',
          passin: '', 
          passconf: '',
          dialog: false,
          mensaje: ''
      }
    },
    computed:{
      ...mapState(['user','pass']),
    },
    methods: {
      logear(){
        if(this.$v.$invalid||!this.passin==this.passconf){
          return 'invalid'
        }
      },
      usuarioval(){
        if(!this.$v.userin.required){
          return 'Este campo es obligatorio'
        }else{
          if(!this.$v.userin.email){
            return 'Email no valido'
          }
        }
      },
      claveval(){
        if(!this.$v.passin.required){
          return 'Este campo es obligatorio'
        }
      },
      confval(){
        if(!this.$v.passconf.required){
          return 'Este campo es obligatorio'
        }else{
            if(!this.passin==this.passconf){
                return 'Las contraseñas no coinciden'
            }
        }
      }, 
      registrar(){

        const path='http://localhost:5000/registerapi'
        axios.post(path, {
          correo: this.userin,
          contrasena: this.passin
        }).then((respuesta)=>{
          console.log(respuesta.data.message)
          this.mensaje=respuesta.data.message
          this.dialog=true
        }).catch((error)=>{
          console.log(error)
        }).then(()=>{
        })
        
      },
      cerrardialogo(){
        this.dialog=false
        this.$router.push({path: '/login'})
      }
    },
    validations:{
      userin:{
        required,
        email
      },
      passin:{
        required
      },
      passconf:{
        required
      }
    }
}
</script>
