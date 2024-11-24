<template>
    <div>
        <div class="card">
                  <div class="card-body py-2">
                    <h4 class="card-title">Quotes</h4>
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
                            <td><label class="badge badge-danger">Pending</label></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
    </div>
</template>