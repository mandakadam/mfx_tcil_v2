<template>
   <div class="container-fluid page-body-wrapper pt-0 sidebar-dark">
      <SideBar :userList="userList" />
      <MainPanel :dataSource="dataSource" />
   </div>
</template>
 
<script>
 import SideBar from '@/components/Leads/SideBar.vue'
 import MainPanel from '@/components/Leads/MainPanel.vue'
 
 export default {
   name: 'LeadView',
   props: ['dataSource', "userList"],
   components: {
     SideBar,
     MainPanel
   }
 }
 </script>
 