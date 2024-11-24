<template>
<nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    <li class="nav-item shadow my-0" :class="`${$route.path == item.link ?'bg-gradient-warning active':'bg-gradient-primary'}`" v-for="(item, index) in MenuList" :key="index" >
      <RouterLink class="nav-link" :class="`${$route.path == item.link ?'text-white':'text-light'}`" :to="item.link">
        <div class="d-flex flex-column">
          <span>
            <i class="menu-icon mdi" :class="item.icon"></i>
          <span class="menu-title fs-12">{{item.title}}</span>
        </span>
     
        </div>
      </RouterLink>
    </li>

    <li class="nav-item nav-category">Quick Links</li>
    <li class="nav-item" v-for="(item, index) in quickLinks" :key="index">
      <a class="nav-link" href="#">
        <i class="menu-icon mdi" :class="item.icon"></i>
        <span class="menu-title">{{ item.title }}</span>
      </a>
    </li>
   
  </ul>
</nav>
</template>
<script>
export default {
  data(){
    return{
      MenuList:[
        {
          title: "Transaction/LRS History",
          icon:"mdi-account-credit-card",
          variant:"primary",
          link:"/transactions/TransactionsHistory"
        },
        {
          title: "Customer Details",
          icon:"mdi-account-check",
          variant:"primary",
          link:"/transactions/CustomerDetails"
        },
        {
          title: "Travel Details",
          icon:"mdi-plane-car",
          variant:"primary",
          link:"/transactions/TravelDetails"
        },
        {
          title: "ITR Details",
          icon:"mdi-percent-box-outline",
          variant:"primary",
          link:"/transactions/ITRDetails"
        },
        {
          title: "Payment Details",
          icon:"mdi-credit-card",
          variant:"primary",
          link:"/transactions/PaymentDetails"
        }
      ],

      quickLinks:[
        {
          title: "Forex Card",
          icon:"mdi-credit-card",
          link:""
        },
        {
          title: "Remittances",
          icon:"mdi-tune-variant",
          link:""
        },
        {
          title: "Currency Notes",
          icon:"mdi-currency-inr",
          link:""
        },
        {
          title: "Payments/Receipts",
          icon:"mdi-account-credit-card",
          link:""
        },
        {
          title: "Margin Matrix",
          icon:"mdi-margin",
          link:""
        },
        {
          title: "Customer Onboarding",
          icon:"mdi-account-check",
          link:""
        },
        {
          title: "Partners & Agents",
          icon:"mdi-handshake-outline",
          link:""
        },
        {
          title: "Compliance",
          icon:"mdi-domain",
          link:""
        },
        {
          title: "Admin",
          icon:"mdi-security",
          link:""
        },
        {
          title: "MISC Transactions",
          icon:"mdi-credit-card-outline",
          link:""
        },
        {
          title: "Specialized Processes",
          icon:"mdi-comment-processing",
          link:"mdi-bank-transfer-out"
        },
      ]
    }
  }
}
</script>