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
        <md-input-container :class="{'md-input-invalid': errors.has('firstname')}">
          <label>Firstname</label>
          <md-input 
            v-validate="'required|min:2'" 
            key="username-input" 
            v-model="person.firstname" 
            data-vv-name="firstname"/>
          <div 
            v-show="errors.has('firstname')" 
            class="md-error">{{ errors.first('firstname') }}</div>
        </md-input-container>
        <md-input-container :class="{'md-input-invalid': errors.has('lastname')}">
          <label>Lastname</label>
          <md-input 
            v-validate="'required|min:2'" 
            v-model="person.lastname" 
            data-vv-name="lastname"/>
          <div 
            v-show="errors.has('lastname')" 
            class="md-error">{{ errors.first('lastname') }}</div>
        </md-input-container>
        <md-input-container :class="{'md-input-invalid': errors.has('email')}">
          <label>Email</label>
          <md-input 
            v-validate="'required|email'" 
            v-model="person.email" 
            data-vv-name="email"/>
          <div 
            v-show="errors.has('email')" 
            class="md-error">{{ errors.first('email') }}</div>
        </md-input-container>
        <md-input-container :class="{'md-input-invalid': errors.has('phone')}">
          <label>Phone</label>
          <md-input 
            v-validate="'required|regex:\d{10}'" 
            v-model="person.phone" 
            data-vv-name="phone"/>
          <div 
            v-show="errors.has('phone')" 
            class="md-error">{{ errors.first('phone') }}</div>
        </md-input-container>
      </form>
    </md-card-content>
    <md-card-actions>
      <md-button @click.prevent="cancel">Cancel</md-button>
      <md-button 
        :disabled="errors.any()" 
        @click.prevent="submit">Submit</md-button>
    </md-card-actions>
  </md-card>

</template>
<script>
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
