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
              
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-btn 
              color="grey darken-4 white--text"
              v-if="logear()==='invalid'"
              disabled
              >
                Login
              </v-btn>
              <v-btn 
              color="grey darken-4 white--text"
              v-else
              @click="login()"
              >
                Login
              </v-btn>
            </v-card-actions>
            <v-card-text 
            class="justify-center red--text"
            align="center"
            v-if="error==true"
            >
              Usuario o Contraseña incorrecto
            </v-card-text>
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
          <p class="text-h6">No tienes cuenta? Registrate</p>
          <v-btn
          class="text-h6 black--text mt-1"
          x-small
          plain
          :to="{name: 'Register'}"
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
    name: "Login",
    data() {
      return {
          showPassword:false,
          userin: '',
          passin: '',
          tipo:null,
          error:null,
          dialog:false,
          mensaje: ''
      }

    },
    computed:{
      ...mapState(['user','pass','admin']),
    },
    methods: {
      ...mapMutations(['setadmin', 'setuser', 'setpass']),
      logear(){
        if(this.$v.$invalid){
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
      login(){

        const path='http://localhost:5000/loginapi'
        axios.post(path, {
          correo: this.userin,
          contrasena: this.passin
        }).then((respuesta)=>{
          console.log(respuesta.data.message)
          this.tipo=respuesta.data.message
          console.log(this.tipo)
          if (this.tipo=='sí') {
            this.setadmin(true)
            this.setuser(this.userin)
            this.setpass(this.passin)
            localStorage.admin=true
            localStorage.usuario=this.userin
            localStorage.clave=this.passin
            this.mensaje='Ingreso Exitoso'
            this.$router.push({path: '/moduloadmin'})
            
          }else{
            if(this.tipo=='no'){
              this.setadmin(false)
              this.setuser(this.userin)
              this.setpass(this.passin)
              localStorage.admin=false
              localStorage.usuario=this.userin
              localStorage.clave=this.passin
              this.mensaje='Ingreso Exitoso'
              this.$router.push({path: '/'})
            }else{
              this.error=true
              this.userin=''
              this.passin=''
            }
          }
        }).catch((error)=>{
          console.log(error)
        }).then(()=>{
          
        })
        
      },
      cerrardialogo(){
        this.dialog=false
      }
    },
    validations:{
      userin:{
        required,
        email
      },
      passin:{
        required
      }
    }
}
</script>