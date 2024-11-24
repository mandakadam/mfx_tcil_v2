<template>
    <div class="home-tab d-sm-flex align-items-center justify-content-between border-bottom">
    <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
        <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Pre-Deals</a>
        </li>
        <li class="nav-item" role="presentation">
        <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab" aria-selected="false" tabindex="-1">Transactions</a>
        </li>
        <li class="nav-item" role="presentation">
        <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab" aria-selected="false" tabindex="-1">Orders</a>
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