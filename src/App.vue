<template>
  <v-app>
    <v-app-bar
      app
      white
    >
      <v-container class="mx-auto py-0 ">
        <v-row align="center">
          <v-toolbar-title>JABHOLDING</v-toolbar-title>
          <div
            v-if="admin==false"
          >
            <v-btn
              text
              class="ml-10"
              :to="{name: 'Home'}"
              exact
            >
      
              Inicio
            </v-btn>
            
            <v-btn
              text
              class="ml-5"
              :to="{name: 'Cart'}"
              exact
            >
          
              Mi Lista
            </v-btn>
            
          </div>
          <div
            v-else
          >
            <v-btn
              text
              class="ml-10"
              :to="{name: 'Home'}"
              exact
            >
      
              Agregar
            </v-btn>
            
            <v-btn
              text
              class="ml-5"
              :to="{name: 'Cart'}"
              exact
            >
          
              Eliminar
            </v-btn>
            
          </div>
          <v-spacer />

          <v-text-field
            append-icon="mdi-magnify"
            flat
            hide-details
            solo-inverted
            style="max-width: 300px;"
          />
          <v-btn
            text
            class="ml-5"
            :to="{name: 'Login'}"
            exact
            :v-if="user==null"
          >
            <v-icon>mdi-account-circle-outline</v-icon>
            
          </v-btn>
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
    <v-main class="white">
      <div>
        <router-view/>
      </div>
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
    ...mapState(['categorias', 'user', 'pass', 'admin'])
  },
};
</script>
