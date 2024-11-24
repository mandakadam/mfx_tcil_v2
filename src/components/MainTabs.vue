<template>
    <div class="home-tab d-sm-flex align-items-center justify-content-between border-bottom">


    <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
        <RouterLink  class="nav-link"  to="/leads/1">Leads</RouterLink >
        </li>
        <li class="nav-item" role="presentation">
        <RouterLink class="nav-link"  to="/transactions" >Transactions</RouterLink>
        </li>
        <li class="nav-item" role="presentation">
        <a class="nav-link" id="contact-tab"  href="#demographics" >Orders</a>
        </li>
    </ul>
    <div>
    <div class="btn-wrapper pe-2">
        <a href="#" class="btn btn-otline-dark me-2"><i class="icon-printer"></i> Print</a>
        <a href="#" class="btn btn-primary text-white me-2"><i class="icon-download"></i> Export</a>
    </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.home-tab{
    .nav-link{font-size: 0.9rem !important;}
    .router-link-exact-active{color: #1f3bb3 !important;}
}
</style>