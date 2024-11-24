<template>
   <PageHeader msg="Welcome to Your Vue.js App"/>
     <MainTabs />
  <div class="container-fluid page-body-wrapper pt-0 sidebar-dark">
     <SideBar />
     <MainPanel />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import SideBar from './components/SideBar.vue'
import MainTabs from './components/MainTabs.vue'
import MainPanel from './components/MainPanel.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    SideBar,
    MainTabs,
    MainPanel
  }
}
</script>
