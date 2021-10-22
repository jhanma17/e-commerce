><template>
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
            ref="price"
            v-model="address"
            :rules="[
              () => !!address || 'No llenaste la casilla',
              () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
              addressCheck
            ]"
            label="Precio"
            placeholder="Snowy Rock Pl"
            
            required
          ></v-text-field>
                <v-textarea
        v-model="bio"
        auto-grow
        filled
        color="primary"
        label="Descripción"
        rows="1"
                    :rules="[
              () => !!address || 'No llenaste la casilla',
           
              addressCheck
            ]"
        
      ></v-textarea>

  <v-file-input
      :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    label="Reemplazar foto"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>
    <v-file-input
        :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    label="Reemplazar foto"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>
      <v-file-input
          :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    label="Reemplazar foto"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>



    

    
                  


        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text>
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


</script>
