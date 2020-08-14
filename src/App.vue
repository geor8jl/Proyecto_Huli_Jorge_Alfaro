<template>
  <v-app>
    <v-app-bar
      app
      color="light-blue"
      dark
    >
     

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      
      <paciente/>


    </v-main>
  </v-app>
</template>



<script>

import paciente from './components/paciente';

export default {
  name: 'App',

  components: {
    paciente
  },

  data: () => ({
    //
  }),
};
</script>