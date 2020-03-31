<template>
  <div id="new-employess">
    <h3>new-employess</h3>
    <div class="row">
      <form action @submit.prevent="saveEmployee" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee_id" required />
            <label for>EmployID#</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
            <label for>Name</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="dept" required />
            <label for>Department</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
            <label for>Position</label>
          </div>
        </div>
        <button type="submit" class="btn">submit</button>
        <router-link to="/" class="btn btn-gray">Cancal</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./filebaseInit";
export default {
  name: "new-employess",
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null
    };
  },
  methods: {
    saveEmployee() {
      db.collection("employees")
        .add({
          employee_id: this.employee_id,
          name: this.name,
          dept: this.dept,
          position: this.position
        })
        .then(docRef => {
          this.$router.push("/");
        })
        .catch(error => console.log(err));
    }
  }
};
</script>

<style>
</style>