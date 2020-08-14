<template>
  <div id="Paciente">
    <v-form v-model="valid">
      <v-container>
        <br />
        <v-spacer></v-spacer>
        <h2>Datos Personales</h2>
        <v-spacer></v-spacer>
        <v-row>
          <v-col cols="12" md="1">
            <v-file-input
              :rules="rules"
              :hide-input="true"
              change="previewImage"
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="mdi-camera"
              style="background-image: ; margin-left:30px"
            ></v-file-input>
            <div class="image-preview" v-if="imageData.length > 0">
              <img class="preview" :src="imageData" />
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="20"
              label="Nombre*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="lastnameRules"
              :counter="50"
              label="Apellidos"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8" class="py-2">
            <v-btn-toggle v-model="text" tile color="light-blue accent-3" group>
              <v-btn value="Femenino">
                <v-icon left>mdi-human-female</v-icon>Femenino
              </v-btn>

              <v-btn value="Masculino">
                <v-icon left>mdi-human-male</v-icon>Masculino
              </v-btn>
            </v-btn-toggle>
          </v-col>

          <v-col cols="12" md="5">
            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'La identificación es requerida']"
              label="Tipo de identificación"
              required
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="id"
              :rules="[v => v.length <= 9 || 'No debe ser mayor a 9 char',v => !!v || 'La identificación es requerida']"
              :counter="9"
              label="Número de indentificación"
              type="numeric"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6" class="py-2">
            <p>Tipo de sangre</p>

            <v-btn-toggle
              v-model="toggle_exclusive"
              id="tipoS"
              color="light-blue accent-3"
              required
            >
              <v-btn>
                <span>O+</span>
              </v-btn>

              <v-btn>
                <span>O-</span>
              </v-btn>

              <v-btn>
                <span>A+</span>
              </v-btn>
              <v-btn>
                <span>A-</span>
              </v-btn>

              <v-btn>
                <span>B+</span>
              </v-btn>

              <v-btn>
                <span>B-</span>
              </v-btn>

              <v-btn>
                <span>AB+</span>
              </v-btn>
              <v-btn>
                <span>AB-</span>
              </v-btn>
              <v-btn>
                <span>Desconocido</span>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>

        <v-row>
          <br />
          <v-col cols="12" md="12">
            <v-spacer></v-spacer>
            <h2>Datos de Contacto</h2>
            <v-spacer></v-spacer>
          </v-col>

          
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

          <div ref="contacto" ></div>

          <v-col cols="12" md="4">
            <div class="my-2">
              <v-btn text color="light-blue"  @click="Template">Agregar otro teléfono</v-btn>
              
            </div>
          </v-col>
          
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import store from "../store/index";


export default {
  name: "Paciente",
  props: [],

  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    id: "",
    
    nameRules: [
      (v) => !!v || "Nombre es requerido",
      (v) => v.length <= 20 || "Nombre debe ser menor a 20 char",
    ],
    lastnameRules: [
      (v) => !!v || "El campo apellidos es requerido",
      (v) => v.length <= 50 || "Apellidos debe ser menor a 50 char",
    ],
    idRules: [(v) => v.length <= 9 || "No debe ser mayor a 9 char"],
    email: "",
    number: "",
    imageData: "",
    emailRules: [
      (v) => !!v || "El correo es requerido",
      (v) => /.+@.+/.test(v) || "Debe ser un correo válido",
    ],
    items: ["Cédula", "DIMEX"],
    its: [{ icon: "mdi-cellphone-android" }],
    phone: "",
    phoneRules: [
      (v) => !!v || "Número de teléfono es requerido",
      (v) => v.length == 9 || "No debe ser mayor a 9 char",
      (v) => /.+-.+/.test(v) || "Debe tener el siguiente formato ####-####",
    ],
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "El tamaño de la imagen debe ser menor a 2MB",
    ],
  }),
  watch: {
    number() {
      this.phone = this.phone
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{3})?(\d{3})?(\d{4})?/g, "($1) $2-$3")
        .substr(0, this.template.length);
    },
  },
  store,
  BeforeCreate() {
    this.$store.commit("initialiseStore");
  },
  components: {
        
    },
  
  methods: {
    Template: function() {
       this.$refs.contacto.innerHTML = `<v-col cols="12" md="1">
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
      `;

      

      
    },
  },
};
</script>