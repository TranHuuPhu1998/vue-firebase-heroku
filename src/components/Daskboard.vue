<template>
  <div class="dashboard">
    <h3>Dash Board</h3>
    <ul class="collection with-herder">
      <li class="collection-header">
        <h4>Emloyees</h4>
      </li>
      <li v-for="(employes,index) in employess" v-bind:key="index" class="collection-item">
        <div class="chip">{{employes.dept}}</div>
        {{employes.employee_id}}:
        {{employes.name}}
        <router-link
          class="secondary-content"
          :to="{name:'view-employess',params :{employee_id: employes.employee_id }} "
        >
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./filebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      employess: []
    };
  },
  created() {
    db.collection("employees")
      .orderBy("dept")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            employee_id: doc.data().employee_id,
            name: doc.data().name,
            dept: doc.data().dept,
            position: doc.data().position
          };
          this.employess.push(data);
        });
      });
  }
};
</script>

<style>
</style>