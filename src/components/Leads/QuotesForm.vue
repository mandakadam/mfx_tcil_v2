<template>
    <div class="card my-3">
    <div class="card-body pt-1 pb-3">
      
  <form class="d-flex gap-3 align-items-center flex-wrap">

  <div style="width:90px">
    <label class="form-label" for="">Currency <span class="text-danger">*</span></label>
    <select class="form-select" id="">
      <option value="USD" selected>USD</option>
      <option value="INR">INR</option>
      <option value="INR">UK</option>
    </select>
  </div>
  <div style="width:100px">
    <label class="form-label" for="">Product <span class="text-danger">*</span></label>
    <select class="form-select" id="">
      <option value="CARD" selected>CARD</option>
      <option value="TT">TT</option>
    </select>
  </div>

  <div  style="width:140px">
    <label class="form-label" for="inlineFormInputGroupUsername">FC Amount <span class="text-danger">*</span></label>
    <div class="input-group">
      <input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="FC Amount">
    </div>
  </div>
  <div style="width:75px">
    <label class="form-label" for="inlineFormInputGroupUsername">Rate <span class="text-danger">*</span></label>
    <div class="input-group">
      <input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="Rate">
    </div>
  </div>
  <div style="width:100px">
    <label class="form-label" for="inlineFormInputGroupUsername">Charges <span class="text-danger">*</span></label>
    <div class="input-group">
      <input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="Charges">
    </div>
  </div>
  <div style="width:75px">
    <label class="form-label" for="inlineFormInputGroupUsername">GST</label>
    <div class="input-group">
      <input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="GST">
    </div>
  </div>
  <div style="width:75px">
    <label class="form-label" for="inlineFormInputGroupUsername">TCS</label>
    <div class="input-group">
      <input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="TCS">
    </div>
  </div>
  <div style="width:140px">
    <label class="form-label" for="inlineFormInputGroupUsername">Bill Amount</label>
    <div class="input-group">
      <input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="Bill Amount">
    </div>
  </div>
  <div class="ms-auto mt-auto">
    <button type="submit" class="btn btn-warning btn-sm text-nowrap"> <i class="mdi mdi-arrow-right" /> Send Quote</button>
  </div>

 
</form>
    </div>
    </div>
</template>

<style scoped>
.form-label{font-size: 10px; text-transform: uppercase; font-weight: bold; margin: 0;}
.form-control,.form-select{font-size: 12px; border-radius: 5px; padding-top: 5px; padding-bottom: 5px; border-style: dashed;  outline-style: dashed;}
</style>