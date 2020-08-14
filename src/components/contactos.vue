<template>
        <div>
        <v-col cols="12" md="1">
            <v-list flat>
              <v-list-item-group v-model="item" color="light-blue">
                <v-list-item v-for="(it, i) in its" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="it.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="it.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="4">
            <vue-tel-input-vuetify
              v-model="phone"
              :rules="phoneRules"
              label="Número de teléfono"
              template="XXXX-XXXX"
              placeholder
              required
            ></vue-tel-input-vuetify>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="email" :rules="emailRules" :counter="30" label="Correo" required></v-text-field>
          </v-col>

          </div>
</template>
<script>
export default {
        name:'contactos',
        
}
</script>