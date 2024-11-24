<template>
    <div>
        <div class="card card-rounded">
                                <div class="card-body py-2">
                                  <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h4 class="card-title card-title-dash">Quotes History</h4>
                                    <p class="mb-0">20 finished, 5 remaining</p>
                                  </div>
                                  <ul class="bullet-line-list">
                                    <li v-for="(item, index) in items" :key="index">
                                      <div class="d-flex justify-content-between">
                                        <div><span class="text-success"> <span class="badge py-1 fs-10" :class="`badge-${item.product == 'TT' ? 'warning' : 'primary'}`"> {{item.product}}</span> <strong>{{item.currency}} {{item.fc_amount}} @{{item.rate}}</strong></span> <div class="text-muted fs-12">{{item.date}}</div></div>
                                        
                                      </div>
                                      <a class="fs-12" href="#">{{item.action}}</a>
                                    </li>
                                  </ul>
                                  <div class="list align-items-center pt-3">
                                    <div class="wrapper w-100">
                                      <p class="mb-0">
                                        <a href="#" class="fw-bold text-primary">Show all <i class="mdi mdi-arrow-right ms-2"></i></a>
                                      </p>
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
            items:[
                {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "TT",
                fc_amount: "3000",
                rate:"84.45",
                action:"Send Payment Link"
            },
            {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "Card",
                fc_amount: "3000",
                rate:"84.45",
                action:"Proceed with transaction"
            },
            {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "Card",
                fc_amount: "3000",
                rate:"84.45",
                action:"Expired "
            },

        ]
        }
    }
}
</script>