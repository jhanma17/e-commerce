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
            label="Nombre"
          ></v-text-field>
          <v-text-field
            label="Precio"
          ></v-text-field>

          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            label="Reemplazar foto"
            filled
            prepend-icon="mdi-camera"
          ></v-file-input>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>


</script>
