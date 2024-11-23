<template>
   <div class="row">
        <div class="col-sm-12">
            <div class="statistics-details d-flex align-items-center justify-content-between">

                <div v-for="(item, index) in SummaryCard" :key="index" class="card card-rounded shadow-lg h-100 text-gray pe-4" :class="`bg-${item.variant}`">
                <div class="card-body py-2 d-flex flex-column">
                    <h6 class="card-title card-title-dash text-white fs-12 mb-0" >{{item.title}}</h6>
                    <h2 class="mb-0 mt-auto text-white">{{item.matrics}}</h2>
                    <i class="mdi mdi-arrow-top-right-thin-circle-outline text-white fs-2 position-absolute" style="right: 10px; top: 10px; opacity: 0.2;"></i>
                </div>
                </div>
            </div>
        </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            SummaryCard: [
                {
                    title: "Not Attended",
                    variant:"primary",
                    matrics: "10"
                },
                {
                    title: "Quote Pending",
                    variant:"info",
                    matrics: "12"
                },
                {
                    title: "Payment Pending",
                    variant:"secondary",
                    matrics: "5"
                },
                {
                    title: "Quote Expired",
                    variant:"warning",
                    matrics: "15"
                },
                {
                    title: "Payment Received",
                    variant:"success",
                    matrics: "8"
                },
                {
                    title: "Transactions Initiated",
                    variant:"dark",
                    matrics: "10"
                }
            ]
        }
    }
}
</script>