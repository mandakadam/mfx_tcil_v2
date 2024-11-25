<template>
    <div>
      
        <div class="card">
                  <div class="card-body py-2">
                    <h4 class="card-title mb-2">Quotes</h4>
                    <div class="table-responsive">
                      <table class="table table-hover table-sm">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>FC Amount</th>
                            <th>Rate</th>
                            <th>GST</th>
                            <th>TCS</th>
                            <th>Bill Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in 5" :key="index">
                            <td><span class="badge badge-primary fs-11">Card</span></td>
                            <td>USD 30k @28.76%</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>10k</td>
                            <td width="100px" v-if="index==0"><label class="badge badge-info d-block">Quote Sent</label></td>
                            <td width="100px" v-else-if="index==1"><label class="badge badge-info d-block">Payment Received</label></td>
                            <td width="100px" v-else-if="index==2"><label class="badge badge-success d-block">Transaction Initiated</label></td>
                            <td width="100px" v-else><label class="badge badge-danger d-block">Expired</label></td>
                            <!-- <td v-else><label class="badge badge-danger">Pending</label></td> -->
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
    </div>
</template>