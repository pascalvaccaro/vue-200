<template>
  <section class="container">        
    <sfeir-form 
      :person="person" 
      @save="updatePerson" 
      @cancel="goBack"/>
  </section>
</template>
<script>
import router from "./router.js";
import peopleService from "../services/PeopleService.js";
import Form from "../components/Form.vue";

export default {
  components: {
    "sfeir-form": Form
  },
  data() {
    return {
      person: {}
    };
  },
  beforeRouteEnter(route, redirect, next) {
    peopleService
      .fetchOne(route.params.id)
      .then(person =>
        next(vm => {
          vm.person = person;
        })
      )
      .catch(console.log);
  },
  methods: {
    updatePerson: function(p) {
      peopleService.update(p).then(() => {
        this.goBack();
      });
    },
    goBack: function() {
      router.go(-1);
    }
  }
};
</script>
<style scoped>
</style>
