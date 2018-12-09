<template>
  <md-card class="card-panel">
    <md-card-header v-if="editMode">
      <div class="md-title">Update {{ person.firstname }} {{ person.lastname }}</div>
      <div class="md-subhead">{{ person.id }}</div>
    </md-card-header>        
    <md-card-content>
      <img 
        :src="person.photo || 'https://randomuser.me/api/portraits/lego/6.jpg'" 
        class="picture">
      <form @submit="submit">
        <md-input-container>
          <label>Firstname</label>
          <md-input 
            v-model="person.firstname" 
            name="firstname"/>
        </md-input-container>
        <md-input-container>
          <label>Lastname</label>
          <md-input 
            v-model="person.lastname" 
            name="lastname"/>
        </md-input-container>
        <md-input-container>
          <label>Email</label>
          <md-input 
            v-model="person.email" 
            name="email"/>
        </md-input-container>
        <md-input-container>
          <label>Phone</label>
          <md-input 
            v-model="person.phone" 
            name="phone"/>
        </md-input-container>
      </form>
    </md-card-content>
    <md-card-actions>
      <md-button @click="cancel">Cancel</md-button>
      <md-button @click="submit">Submit</md-button>
    </md-card-actions>
  </md-card>

</template>
<script>
export default {
  props: {
    person: {
      type: Object,
      default: function() {
        return { firstname: "", lastname: "", email: "", phone: "" };
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    editMode: function() {
      return this.person && this.person.id;
    }
  },
  methods: {
    submit: function() {
      this.$emit("save", this.person);
    },
    cancel: function() {
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
