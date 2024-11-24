<template>
   <PageHeader msg="Welcome to Your Vue.js App"/>
     <MainTabs  />
     <RouterView  :dataSource="dataSource" :userList="userList" />
</template>s

<script>
import PageHeader from './components/PageHeader.vue'
import MainTabs from './components/Leads/MainTabs.vue'
import userList from "./db.json";

export default {
  name: 'App',
  components: {
    PageHeader,
    MainTabs,
  },
  data(){
    return{
      dataSource: {},
      userList: userList
    }
  },
  created() {
    this.$watch(
      () => this.$route.params.id,
      (newId) => {
        console.log(newId);
        this.dataSource = userList.filter(item=>item.id == newId)[0];
      }
    )
  },
}
</script>
