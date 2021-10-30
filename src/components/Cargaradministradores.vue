<template>
    <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'No llenaste la casilla']"
            :error-messages="errorMessages"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            ref="useremail"
            v-model="email"
            :rules="[
              () => !!address || 'No llenaste la casilla',
              
              emailCheck
            ]"
            label="Correo electrónico"
            placeholder="Inserta un formato de correo válido"
            
            required
          ></v-text-field>
                    <v-text-field
            ref="userpassword"
            v-model="password"
            :rules="[() => !!password || 'No llenaste la casilla']"
            :error-messages="errorMessages"
            label="Contraseña"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn 
          text
          :to="{name: 'Veradministradores'}"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="submit"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name:"cargaradministradores"
}
</script>
