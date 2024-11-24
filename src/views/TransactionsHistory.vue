<template>
  <div>
    <TransactionsHistory />
    <LRSHistory />
  </div>
       
</template>
<script>
import TransactionsHistory from '@/components/Transactions/TransactionsHistory.vue';
import LRSHistory from '@/components/Transactions/LRSHistory.vue';

export default {
 name: 'TransactionsHisory',
 components: {
   TransactionsHistory,
   LRSHistory
 }
}
</script>