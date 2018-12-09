<template>
  <md-card class="card-panel">
    <md-card-header v-if="editMode">
      <div class="md-title">Update {{ person.firstname }} {{ person.lastname }}</div>
      <div class="md-subhead">{{ person.id }}</div>
    </md-card-header>
    <md-card-content>
      <img 
        :src="person.photo || 'https://randomuser.me/api/portraits/lego/6.jpg'" 
        class="picture" >
      <form @submit="submit">
        <md-input-container :class="{ 'md-input-invalid': $v.person.firstname.$error }">
          <label>Firstname</label>
          <md-input 
            v-model="person.firstname" 
            @input="$v.person.firstname.$touch()"/>                
          <div class="md-error">
            <span v-show="!$v.person.firstname.required">Champs obligatoire</span>                         
            <span v-show="$v.person.firstname.required && !$v.person.firstname.maxLength">Vous devez saisir au moins 2 caractères</span>                         
          </div>                         
        </md-input-container>
        <md-input-container :class="{ 'md-input-invalid': $v.person.lastname.$error }">
          <label>Lastname</label>
          <md-input 
            v-model="person.lastname" 
            @input="$v.person.lastname.$touch()"/>                
          <div class="md-error">
            <span v-show="!$v.person.lastname.required">Champs obligatoire</span>                         
            <span v-show="$v.person.lastname.required && !$v.person.lastname.maxLength">Vous devez saisir au moins 2 caractères</span>                         
          </div>                         
        </md-input-container>
        <md-input-container :class="{ 'md-input-invalid': $v.person.email.$error }">
          <label>Email</label>
          <md-input 
            v-model="person.email" 
            @input="$v.person.email.$touch()"/>                
          <div class="md-error">
            <span v-show="$v.person.email.$error && !$v.person.email.required">Champs obligatoire</span>                         
            <span v-show="$v.person.email.$error && !$v.person.email.email">Vous devez saisir un mail valide</span>                                                 
          </div>                         
        </md-input-container>
        <md-input-container>
          <label>Phone</label>
          <md-input v-model="person.phone"/>                                    
        </md-input-container>
      </form>
    </md-card-content>
    <md-card-actions>
      <md-button @click.prevent="cancel">Cancel</md-button>
      <md-button 
        :disabled="$v.person.$invalid" 
        @click.prevent="submit">Submit</md-button>
    </md-card-actions>
  </md-card>    
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  props: {
    person: {
      type: Object,
      default: () => ({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
      })
    }
  },
  data: () => ({}),
  computed: {
    editMode() {
      return this.person && this.person.id;
    }
  },
  methods: {
    submit() {
      this.$emit("save", this.person);
    },
    cancel() {
      this.$emit("cancel");
    }
  },
  validations: {
    person: {
      firstname: {
        required,
        minLength: minLength(2)
      },
      lastname: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      }
    }
  }
};
</script>
<style scoped>
.card-panel {
  padding: 10px;
  margin: 10px !important;
  min-width: 500px;
}

.card {
  margin: 0;
}

.picture {
  border-radius: 50%;
  width: 80px;
}
</style>
