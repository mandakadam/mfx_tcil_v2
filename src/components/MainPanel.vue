<template>
   <div class="main-panel">
    <div class="content-wrapper">
        <SummaryDetails />
    </div>
</div>
        
</template>
<script>
import SummaryDetails from './SummaryDetails.vue'

export default {
  name: 'App',
  components: {
    SummaryDetails
  }
}
</script>