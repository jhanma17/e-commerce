<template>
      <v-col
        cols="12"
        sm="4"
        
      >
  <v-card
  class="mx-auto"
    max-width="500"
  >
    
    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        active-class="pink--text"
        multiple
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                <v-btn
       x-small
      fab
      dark
      color="primary"
     :to="{name: 'Editarcomentarios'}"
    >
                <v-icon
                  @click="pencilAdmins(item.title,item.subtitle,item.action)"
                  
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-pencil
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-3"
                >
                 mdi-pencil
                </v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
      <div class="text-center">




    <v-btn
      class="mx-2"
      x-small
      fab
      dark
      color="primary"
    >
      <v-icon dark>
        mdi-close
      </v-icon>
    </v-btn>


  </div>
  </v-card>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      selected: [2],
      items: [
        {
         
          headline: '10-12-2021',
          subtitle: `Muy buen producto. Excelente calidad y buen tiempo de entrega.`,
          title: 'Muy buen producto',
        }
      ],
    }),
    methods:{
        pencilAdmins(title, subtitle, headline) {

        }
    }
  }
</script>