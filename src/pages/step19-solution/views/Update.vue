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
  name: "Edit",
  components: {
    "sfeir-form": Form
  },
  data: () => ({
    person: {}
  }),
  beforeRouteEnter(route, redirect, next) {
    next(
      async vm => (vm.person = await peopleService.fetchOne(route.params.id))
    );
  },
  methods: {
    async updatePerson(p) {
      await peopleService.update(p);
      this.goBack();
    },
    goBack() {
      router.go(-1);
    }
  }
};
</script>
<style scoped>
</style>
