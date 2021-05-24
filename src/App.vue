<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-container class="mx-auto py-0">
        <v-row align="center">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>B2C</v-toolbar-title>
          <v-btn
            text
            class="ml-10"
            :to="{name: 'Home'}"
            exact
          >
            <v-icon>mdi-home</v-icon>
            Inicio
          </v-btn>
          <v-btn
            text
            class="ml-5"
            :to="{name: 'Login'}"
            exact
            :v-if="user==null"
          >
            <v-icon>mdi-account-circle-outline</v-icon>
            Inicie sesion
          </v-btn>
          <v-btn
            text
            class="ml-5"
            :to="{name: 'Cart'}"
            exact
          >
            <v-icon>mdi-cart</v-icon>
            Carrito
          </v-btn>
          <v-btn
            text
            class="ml-5"
            :to="{name: 'About'}"
            exact
          >
            <v-icon>mdi-information-outline</v-icon>
            About
          </v-btn>
          <v-spacer />

          <v-text-field
            append-icon="mdi-magnify"
            flat
            hide-details
            solo-inverted
            style="max-width: 300px;"
          />
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      bottom
      temporary
    >
      <v-system-bar></v-system-bar>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="grey--text text--darken-3"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon large>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Hola, Carlos</v-list-item-title>
          </v-list-item>

          <v-list-group
            :value="false"
            prepend-icon="mdi-format-list-bulleted-square"
            class="mt-5"
          >
            <template v-slot:activator>
              <v-list-item-title>Categorias</v-list-item-title>
            </template>
            <v-list-item
              v-for="(categoria, i) in categorias"
              :key="i"
            >
              <v-list-item-title v-text="categoria"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-help-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ayuda</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'App',

  data: () => ({
    drawer: false,
  }),
  computed:{
    ...mapState(['categorias', 'user', 'pass'])
  },
};
</script>
