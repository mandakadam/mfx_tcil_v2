<template>
<nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    <li class="nav-item shadow my-0" :class="`${index == 0 ?'bg-gradient-warning active':'bg-gradient-primary'}`" v-for="(item, index) in userList" :key="index" >
      <a class="nav-link" :class="`${index == 0 ?'text-white':'text-light'}`" href="index.html">
        <div class="d-flex flex-column">
          <span>
          <!-- <i class="mdi mdi-account-circle-outline menu-icon"></i> -->
          <span class="menu-title fs-14">{{item.title}}</span>
        </span>
        <span>
        <small class="badge badge-primary fs-11 py-1 me-3">{{item.product}}</small>
        <strong >{{item.currency}} {{item.fc_amount}}K</strong>
      </span>
      
        </div>
      </a>
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
      userList:[
        {
          title: "Sachin Tendulkar",
          product:"Card",
          currency:"USD",
          fc_amount:"2",
          variant:"primary"
        },
        {
          title: "Sunil Gavaskar",
          product:"Remittances",
          currency:"UK",
          fc_amount:"10",
          variant:"info"
        },
        {
          title: "Rohit Sharma",
          product:"TT",
          currency:"USD",
          fc_amount:"12",
          variant:"warning"
        },
        {
          title: "Suryakumar Yadav",
          product:"TT",
          currency:"USD",
          fc_amount:"12",
          variant:"secondary"
        },
        {
          title: "Ajinkya Rahane",
          product:"TT",
          currency:"USD",
          fc_amount:"12",
          variant:"success"
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