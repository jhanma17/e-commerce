<template>
    <v-main>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Inicia sesión</v-card-title>
        <v-card-text>
          <v-text-field 
          label="Usuario" 
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
        <v-card-actions>
          <v-btn 
          color="success"
          >
            Register
          </v-btn>
          <v-btn 
          color="info"
          @click="guardar(userin, passin)"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
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