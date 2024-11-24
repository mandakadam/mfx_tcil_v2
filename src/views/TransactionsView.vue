<template>
    <div class="container-fluid page-body-wrapper pt-0 sidebar-dark">
       <SideBar />
       <div class="main-panel">
        <div class="content-wrapper py-2">
       <RouterView  />
       </div>
       </div>
    </div>
</template>
  
 <script>
  import SideBar from '@/components/Transactions/SideBar.vue'
  
  export default {
    name: 'TransactionsView',
    components: {
      SideBar
    }
  }
  </script>
  