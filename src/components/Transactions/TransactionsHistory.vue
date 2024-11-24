<template>

<div class="row flex-grow">
        <div class="col-12 grid-margin stretch-card">
          <div class="card card-rounded">
            <div class="card-body py-2 pb-0">
                  <div class="d-flex justify-content-between align-items-center">
                    <h4 class="card-title card-title-dash">Transactions</h4>
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
                <div>#{{item.trans_no}}</div>
                <span class="text-small">{{item.trans_date}}</span>
            </div> 
            <div class=" ms-auto">
            <span class="badge badge-primary py-1 fs-10" :class="`badge-${item.buy_sell.includes('BUY') ? 'succcess' : 'danger'}`">{{item.buy_sell}} </span>
        </div>
            
        </div>
            <div class="card-body px-3 py-2 d-flex">
            <div class="badge badge-info text-dark py-1"><i class="mdi mdi-receipt-clock-outline me-2 flag-color"></i>{{item.bill_number}}</div>
            <button class="btn btn-sm p-0 btn-link  ms-auto"><i class="mdi mdi-arrow-right-circle ms-2 flag-color"></i></button>
            </div>

            
        <div class="card-footer px-3 py-2 d-flex border-0">
            {{item.curr_code}} {{item.fc_amt}}k @{{item.rate}}
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
            "trans_no": "181124046108",
            "bill_number": "F001124SAA09",
            "branch_code":"0001",
            "trans_date": "10-05-2024 22:15:00",
            "trans_type_code":"CN-BUY",
            "curr_code": "USD",
            "buy_sell": "BUY",
            "fc_amt": "3",
            "rate":"84.45",
            },
            {
             "trans_no": "181124046107",
            "bill_number": "F001124SAA08",
            "branch_code":"0001",
            "trans_date": "10-05-2024 22:15:00",
            "trans_type_code":"CN-SELL",
            "curr_code": "USD",
            "buy_sell": "SELL",
            "fc_amt": "3",
            "rate":"84.45",
            },
            {
             "trans_no": "181124046106",
            "bill_number": "F001124SAA05",
            "branch_code":"0001",
            "trans_date": "10-05-2024 22:15:00",
            "trans_type_code":"CN-SELL",
            "curr_code": "USD",
            "buy_sell": "BUY",
            "fc_amt": "3",
            "rate":"84.45",
            },
            {
             "trans_no": "181124046105",
            "bill_number": "F001124SAA04",
            "branch_code":"0001",
            "trans_date": "10-05-2024 22:15:00",
            "trans_type_code":"CN-SELL",
            "curr_code": "USD",
            "buy_sell": "BUY",
            "fc_amt": "3",
            "rate":"84.45",
            },
            {
             "trans_no": "181124046104",
            "bill_number": "F001124SAA03",
            "branch_code":"0001",
            "trans_date": "10-05-2024 22:15:00",
            "trans_type_code":"CN-SELL",
            "curr_code": "USD",
            "buy_sell": "BUY",
            "fc_amt": "3",
            "rate":"84.45",
            },{
            "trans_no": "181124046108",
            "bill_number": "F001124SAA09",
            "branch_code":"0001",
            "trans_date": "10-05-2024 22:15:00",
            "trans_type_code":"CN-BUY",
            "curr_code": "USD",
            "buy_sell": "BUY",
            "fc_amt": "3",
            "rate":"84.45",
            },
            {
             "trans_no": "181124046107",
            "bill_number": "F001124SAA08",
            "branch_code":"0001",
            "trans_date": "10-05-2024 22:15:00",
            "trans_type_code":"CN-SELL",
            "curr_code": "USD",
            "buy_sell": "SELL",
            "fc_amt": "3",
            "rate":"84.45",
            },
            {
             "trans_no": "181124046106",
            "bill_number": "F001124SAA05",
            "branch_code":"0001",
            "trans_date": "10-05-2024 22:15:00",
            "trans_type_code":"CN-SELL",
            "curr_code": "USD",
            "buy_sell": "BUY",
            "fc_amt": "3",
            "rate":"84.45",
            },
            ]
        }
    }
}
</script>