<template>
    <div>
    <div class="row flex-grow">
                            <div class="col-12 grid-margin stretch-card">
                              <div class="card card-rounded">
                                <div class="card-body py-2 pb-0">
                                  <div class="row">
                                    <div class="col-lg-12">
                                      <div class="d-flex justify-content-between align-items-center">
                                        <h4 class="card-title card-title-dash">Members</h4>
                                        <div class="">
                                          <!-- <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?"> -->
                                         
                                          <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#AddForm">
                                            <i class="mdi mdi-plus"></i> Add Member
</button>
                                        </div>
                                      </div>

                                      <div class="home-tab">
                      <div class="d-sm-flex align-items-center justify-content-between border-bottom">
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item" role="presentation" v-for="(item, index) in membersList" :key="index">
                            <a class="nav-link" :class="`${index == 0 ? 'active' : ''}`" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab">{{item.firstName}} {{item.LastName}}</a>
                          </li>

                         
                        </ul>
                      </div>
                      <div class="tab-content tab-content-basic pb-2">
                        <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="home-tab">
                            <div class="list-wrapper">
                                        <div class="row">
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
                        <div class="tab-pane fade" id="audiences" role="tabpanel" aria-labelledby="profile-tab">
                          <div class="media">
                            <div class="media-body">
                              <h4 class="mt-0">John Doe</h4>
                              <p>
                                Fail most room even gone her end like. Comparison dissimilar unpleasant six compliment
                                two unpleasing
                                any add. Ashamed my company thought wishing colonel it prevent he in. Pretended
                                residence are something
                                far engrossed old off.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="demographics" role="tabpanel" aria-labelledby="contact-tab">
                          <h4>Contact us </h4>
                          <p>
                            Feel free to contact us if you have any questions!
                          </p>
                          <p>
                            <i class="ti-headphone-alt text-info"></i>
                            +123456789
                          </p>
                          <p>
                            <i class="ti-email text-success"></i>
                            contactus@example.com
                          </p>
                        </div>
                      </div>
                    </div>

                                   
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

        <div class="row flex-grow">
                            <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                              <div class="card card-rounded">
                                <div class="card-header bg-transparent border-0 pb-0">
                                <h4 class="card-title  card-title-dash mb-0">Purpose (Optional)</h4>
                                </div>

                                <div class="card-body card-rounded py-2" style="display:grid; grid-template-columns:1fr 1fr">
                                  <div class="list align-items-center border-bottom py-2">
                                    <div class="wrapper w-100">
                                      <p class="mb-2 fw-medium">
                                        Doc Checklist
                                      </p>
                                      <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                          <i class="mdi mdi-calendar text-muted me-1"></i>
                                          <p class="mb-0 text-small text-muted">Details</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="list align-items-center border-bottom py-2">
                                    <div class="wrapper w-100">
                                      <p class="mb-2 fw-medium">
                                        Pan Card
                                      </p>
                                      <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                          <i class="mdi mdi-calendar text-muted me-1"></i>
                                          <p class="mb-0 text-small text-muted">ABC1245C</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="list align-items-center border-bottom py-2">
                                    <div class="wrapper w-100">
                                      <p class="mb-2 fw-medium">
                                        Passport
                                      </p>
                                      <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                          <i class="mdi mdi-calendar text-muted me-1"></i>
                                          <p class="mb-0 text-small text-muted">ABRISEC (20-Jan-2028)</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="list align-items-center border-bottom py-2">
                                    <div class="wrapper w-100">
                                      <p class="mb-2 fw-medium">
                                        Aadhaar
                                      </p>
                                      <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                          <i class="mdi mdi-calendar text-muted me-1"></i>
                                          <p class="mb-0 text-small text-muted">Not Available</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

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
                            <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                            
                              
                              <div class="card card-rounded">
                                <div class="card-body py-2">
                                  <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h4 class="card-title card-title-dash">Limit Details</h4>
                                    <p class="mb-0">5 Limits Utilised</p>
                                  </div>

                                  <div class="row">
                                <div class="col-6 mb-4">
                                  <h4 class="fs-14 fw-bold">Cash Limit Balance</h4>
                                  <div class="d-flex justify-content-between">
                                    <p class="text-muted">UDD 2.3K</p>
                                  </div>
                                  <div class="progress progress-md">
                                    <div class="progress-bar bg-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>

                              <div class="col-6 mb-4">
                                  <h4 class="fs-14 fw-bold">LRS Limit Balance</h4>
                                  <div class="d-flex justify-content-between">
                                    <p class="text-muted">USD 150K</p>
                                  </div>
                                  <div class="progress progress-md">
                                    <div class="progress-bar bg-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>

                              <div class="col-6 mb-4">
                                  <h4 class="fs-14 fw-bold">TCS Applicable <i class="mdi mdi-check-circle-outline h5 text-warning"></i></h4>
                                  <div class="d-flex justify-content-between">
                                    <p class="text-muted">INR 123K</p>
                                  </div>
                                  <div class="progress progress-md">
                                    <div class="progress-bar bg-warning w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>


                              <div class="col-6 mb-4">
                                  <h4 class="fs-14 fw-bold">Previous Screening <i class="mdi mdi-check-decagram-outline h5 text-success"></i></h4>
                                  <div class="d-flex justify-content-between">
                                    <p class="badge badge-success">Authorized</p>
                                  </div>
                                  <!-- <div class="progress progress-md">
                                    <div class="progress-bar bg-danger  w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div> -->
                              </div>

                            </div>

                                  <!-- <ul class="bullet-line-list">
                                    <li>
                                      <div class="d-flex justify-content-between">
                                        <div><span class="text-light-green">Cash Limit</span></div>
                                        <p>50k</p>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="d-flex justify-content-between">
                                        <div><span class="text-light-green">LRS</span> </div>
                                        <p>30k</p>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="d-flex justify-content-between">
                                        <div><span class="text-light-green">TCS Limit</span> </div>
                                        <p>25k</p>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="d-flex justify-content-between">
                                        <div><span class="text-light-green">Prevous Screenings</span> </div>
                                        <p>10k</p>
                                      </div>
                                    </li>
                                  
                                  </ul> -->
                                </div>
                              </div>
                            </div>
                          </div>


                          <!-- Modal -->
<div class="modal modal-lg fade" id="AddForm" tabindex="-1" aria-labelledby="AddFormLabel" aria-hidden="true">
<MemberForm @onAddMembers="onAddMembers" />
</div>
    </div>
</template>

<script>


import MemberForm from "./MemberForm.vue"
export default {
  components: {MemberForm},
    data(){
        return{
          uniqueModal:null,
            membersList:[
              {
                  "firstName": "Sachin",
                  "LastName": "Tendulkar",
                  "EmailAddress": "",
                  "address1": "",
                  "address2": "",
                  "state": "Maharashtra",
                  "country": "India",
                  "postcode": "",
                  "gender": "Male",
                  "dob": "",
                  "product": "Card",
                  "city": "Mumbai"
              },
              {
                  "firstName": "Arjun",
                  "LastName": "Tendulkar",
                  "EmailAddress": "",
                  "address1": "",
                  "address2": "",
                  "state": "Maharashtra",
                  "country": "India",
                  "postcode": "",
                  "gender": "Male",
                  "dob": "",
                  "product": "Card",
                  "city": "Mumbai"
              },
              {
                  "firstName": "Sara",
                  "LastName": "Tendulkar",
                  "EmailAddress": "",
                  "address1": "",
                  "address2": "",
                  "state": "Maharashtra",
                  "country": "India",
                  "postcode": "",
                  "gender": "Male",
                  "dob": "",
                  "product": "Card",
                  "city": "Mumbai"
              }
            ],

            items:[
                {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "TT",
                fc_amount: "3",
                rate:"84.45",
                domain:"ASTRA"
            },
            {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "Card",
                fc_amount: "10",
                rate:"84.45",
                domain:"CRM"
            },
            {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "Card",
                fc_amount: "20",
                rate:"84.45",
                domain:"MUDRA"
            },
            {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "Card",
                fc_amount: "2",
                rate:"84.45",
                domain:"ASTRA"
            },
            {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "Card",
                fc_amount: "3",
                rate:"84.45",
                domain:"CRM"
            },
            {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "TT",
                fc_amount: "4",
                rate:"84.45",
                domain:"ASTRA"
            },
            {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "Card",
                fc_amount: "4",
                rate:"84.45",
                domain:"CRM"
            },
            {
                date: "10-05-2024 22:15:00",
                currency: "USD",
                product: "Card",
                fc_amount: "3",
                rate:"84.45",
                domain:"MUDRA"
            }
        ]
        }
    },
    methods:{
      onAddMembers(data){
        this.membersList.push(data)

      }
    }
}
</script>