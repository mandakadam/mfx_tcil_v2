<template>
    <div class="card my-3">
    <div class="card-body py-1">
        <form class="row row-cols-lg-auto align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Mobile</label>
    <div class="input-group">
      <div class="input-group-text">+91</div>
      <input type="text" class="form-control form-control-sm" id="inlineFormInputGroupUsername" placeholder="9820342840 ">
    </div>
  </div>

  

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck">
      <label class="form-check-label ms-0" for="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Doc Type</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Passport</option>
      <option value="1">PanCard</option>
    </select>
  </div>
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Doc ID</label>
    <div class="input-group">
      <input type="text" class="form-control form-control-sm" id="inlineFormInputGroupUsername" placeholder="Doc ID ">
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Country</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>India</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  <div class="col-12 ms-auto">
    <button type="submit" class="btn btn-warning btn-sm"> <i class="mdi mdi-refresh" /> Refresh</button>
  </div>
</form>
    </div>
    </div>
</template>

<style scoped>
.form-control,.form-select{font-size: 12px; border-radius: 5px; padding-top: 5px; padding-bottom: 5px; border-style: dashed;}
</style>