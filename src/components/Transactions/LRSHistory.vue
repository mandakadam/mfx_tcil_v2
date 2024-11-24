<template>

<div class="row flex-grow">
        <div class="col-12 grid-margin stretch-card">
          <div class="card card-rounded">
            <div class="card-body py-2 pb-0">
                  <div class="d-flex justify-content-between align-items-center">
                    <h4 class="card-title card-title-dash">LRS History</h4>
                    <div class="">
                      <!-- <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?"> -->
                      
                      <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#AddForm">
                        <i class="mdi mdi-plus"></i> Add Transactions
      </button>
                    </div>
                  </div>

                  <div class="row mt-3">
        <div v-for="(item, index) in items" :key="index" class="col-12 col-md-6 col-lg-3 mb-3">
        <div class="card shadow h-100">
        <div class="card-header d-flex bg-transparent border-0 pb-0">
        <div>
                <div>{{item.currency}} {{item.fc_amount}}k @{{item.rate}}</div>
                <span class=" text-small">{{item.date}}</span>
            </div> 
            <div class=" ms-auto">
            <span class="badge badge-primary py-1" :class="`badge-${item.product == 'TT' ? 'warning' : 'primary'}`">{{item.product}} </span>
        </div>
            
        </div>
            <div class="card-body px-3 py-2 d-flex">
            <div class="badge badge-dark text-white fs-11 py-1">{{item.domain}}</div>
            <button class="btn btn-sm p-0 btn-link  ms-auto"><i class="mdi mdi-repeat ms-2 flag-color"></i></button>
            </div>
        </div>
        </div>
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
            items: [
                {
                "date": "10-05-2024 22:15:00",
                "currency": "USD",
                "product": "TT",
                "fc_amount": "3",
                "rate":"84.45",
                "domain":"ASTRA"
            },
            {
                "date": "10-05-2024 22:15:00",
                "currency": "USD",
                "product": "Card",
                "fc_amount": "10",
                "rate":"84.45",
                "domain":"CRM"
            },
            {
                "date": "10-05-2024 22:15:00",
                "currency": "USD",
                "product": "Card",
                "fc_amount": "20",
                "rate":"84.45",
                "domain":"MUDRA"
            },
            {
                "date": "10-05-2024 22:15:00",
                "currency": "USD",
                "product": "Card",
                "fc_amount": "2",
                "rate":"84.45",
                "domain":"ASTRA"
            },
            {
                "date": "10-05-2024 22:15:00",
                "currency": "USD",
                "product": "Card",
                "fc_amount": "3",
                "rate":"84.45",
                "domain":"CRM"
            },
            {
                "date": "10-05-2024 22:15:00",
                "currency": "USD",
                "product": "TT",
                "fc_amount": "4",
                "rate":"84.45",
                "domain":"ASTRA"
            },
            {
                "date": "10-05-2024 22:15:00",
                "currency": "USD",
                "product": "Card",
                "fc_amount": "4",
                "rate":"84.45",
                "domain":"CRM"
            },
            {
                "date": "10-05-2024 22:15:00",
                "currency": "USD",
                "product": "Card",
                "fc_amount": "3",
                "rate":"84.45",
                "domain":"MUDRA"
            }
            ]
        }
    }
}
</script>