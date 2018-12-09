<template>
  <div class="col s12">
    <form class="col s6 offset-s3" >
      <div class="input-field">                                
        <md-input-container>
          <md-icon>search</md-icon>                
          <label>Search</label>
          <md-input 
            v-upper 
            required 
            @input="onInput"/>
        </md-input-container>        
      </div>
    </form>
  </div>
</template>

<script>
import upper from "../directives/UpperDirectives.js";

export default {
  directives: {
    upper
  },
  methods: {
    onInput(event) {
      this.$emit("search", event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-field {
  text-align: center;
  margin: auto;
  width: 600px;
}
</style>
