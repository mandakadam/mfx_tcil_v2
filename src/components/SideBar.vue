<template>
<nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    <li class="nav-item shadow" :class="{'active': index==0}" v-for="(item, index) in userList" :key="index" >
      <a class="nav-link  text-light"  :class="{'text-white': index==0}" href="index.html">
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
          product:"card",
          currency:"USD",
          fc_amount:"2"
        },
        {
          title: "Sunil Gavaskar",
          product:"Remittances",
          currency:"UK",
          fc_amount:"10"
        },
        {
          title: "Rohit Sharma",
          product:"TT",
          currency:"USD",
          fc_amount:"12"
        },
        {
          title: "Suryakumar Yadav",
          product:"TT",
          currency:"USD",
          fc_amount:"12"
        },
        {
          title: "Ajinkya Rahane",
          product:"TT",
          currency:"USD",
          fc_amount:"12"
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
          icon:"",
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