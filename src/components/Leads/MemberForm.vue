<template>
    <form class="modal-dialog modal-dialog-scrollable"  @submit.prevent="addMembers">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Add Members</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pt-3">
            <div class="row" >
                <div class="col-lg-12">
                        <h5 class="text-primary pb-2">Personal Details</h5>
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="firstName">First Name</label>
                      <input type="text" class="form-control" required id="firstName" v-model="formData.firstName" placeholder="firstName">
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="LastName">Last Name</label>
                      <input type="text" class="form-control" required id="LastName" v-model="formData.LastName" placeholder="Last Name">
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="EmailAddress">Email address</label>
                      <input type="email" class="form-control" id="EmailAddress" v-model="formData.EmailAddress" placeholder="Email Address">
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="gender">Gender</label>
                      <select class="form-select" id="gender" v-model="formData.gender">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="dob">Date of Birth</label>
                      <input type="text" class="form-control" id="dob" v-model="formData.dob" placeholder="DOB">
                    </div>

                    <div class="form-group col-lg-4">
                      <label for="product">Product</label>
                      <select class="form-select" id="product" v-model="formData.product">
                        <option>Card</option>
                        <option>TT</option>
                      </select>
                    </div>
                    
                    <div class="col-lg-12 border-top mt-3 pt-3">
                        <h5 class="text-primary pb-2">Address</h5>
                    </div>

                    <div class="form-group col-lg-4">
                      <label for="address1">Address 1</label>
                      <input type="text" class="form-control" id="address1" v-model="formData.address1" placeholder="Location">
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="address2">Address 2</label>
                      <input type="text" class="form-control" id="address2" v-model="formData.address2" placeholder="Location">
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="state">State</label>
                      <select class="form-select" id="state" v-model="formData.state">
                        <option>Maharashtra</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="country">Country</label>
                      <select class="form-select" id="country" v-model="formData.country">
                        <option>India</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="state">State</label>
                      <select class="form-select" id="state" v-model="formData.state">
                        <option>Maharashtra</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="city">City</label>
                      <select class="form-select" id="city" v-model="formData.city">
                        <option>Mumbai</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="postcode">Postcode</label>
                      <input type="text" class="form-control" id="postcode" v-model="formData.postcode" placeholder="Location">
                    </div>
                    
                </div>
                
        </div>

        <div class="modal-footer">
          <button class="btn btn-light btn-sm me-2"  id="btnClose" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" id="btnSave" class="btn btn-sm btn-primary">Submit</button>
      </div>
       
        </div>
    </form>
</template>
<script>

export default {
    data(){
        return{
            formData:{
            }
        }
    },
    methods:{
        addMembers(){
           this.$emit('onAddMembers', this.formData)


        }
    }
}
</script>
<style scoped>
.form-label{font-size: 10px; text-transform: uppercase; font-weight: bold; margin: 0;}
.form-control,.form-select{font-size: 12px; border-radius: 5px; padding-top: 5px; padding-bottom: 5px; border-style: dashed;  outline-style: dashed;}
</style>