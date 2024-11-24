<template>
   <div class="main-panel">
    <div class="content-wrapper py-2">
        <SummaryDetails />
        <LeadsForm />
        <MembersDetails />
        <div class="row">
          <div class="col-8">
            <QuotesDetails />
          </div>
          <div class="col-4">
            <QuotesHistory />
          </div>
        </div>
       
        
    </div>
</div>
        
</template>
<script>
import SummaryDetails from './SummaryDetails.vue'
import LeadsForm from './LeadsForm.vue'
import MembersDetails from './MembersDetails.vue'
import QuotesDetails from './QuotesDetails.vue'
import QuotesHistory from './QuotesHistory.vue'

export default {
  name: 'App',
  components: {
    SummaryDetails,
    LeadsForm,
    MembersDetails,
    QuotesDetails,
    QuotesHistory

  }
}
</script>