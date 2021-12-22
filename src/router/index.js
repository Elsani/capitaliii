import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Reset from '@/components/Reset'
import account_bank from '@/components/account_bank'
import account_home from '@/components/account_home'
import deposit_withdraw from '@/components/deposit_withdraw'
import help_faq from '@/components/help_faq'
import our_branches from '@/components/our_branches'
import paga_institutcionale from '@/components/paga_institutcionale'
import started from '@/components/started'
import transactions from '@/components/transactions'
import visa_card from '@/components/visa_card'
import withdraw from '@/components/withdraw'
import write_us from '@/components/write_us'
import payments from '@/components/payments'
import account_transfer from '@/components/account_transfer'
import store from "../store";
import verificationcode from '@/components/verificationcode'

Vue.use(VueRouter);


// export default new Router({
  const routes = [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { guest: true },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { guest: true },
    },
    {
      path: '/reset',
      name: 'Reset',
      component: Reset
    },
    {
      path: '/account_bank',
      name: 'account_bank',
      component: account_bank
    },
    {
      path: '/account_home',
      name: 'account_home',
      component: account_home
    },
    {
      path: '/account_transfer',
      name: 'account_transfer',
      component: account_transfer
    },
    {
      path: '/deposit_withdraw',
      name: 'deposit_withdraw',
      component: deposit_withdraw
    },
    {
      path: '/help_faq',
      name: 'help_faq',
      component: help_faq
    },
    {
      path: '/our_branches',
      name: 'our_branches',
      component: our_branches
    },
    {
      path: '/paga_institutcionale',
      name: 'paga_institutcionale',
      component: paga_institutcionale
    },
    {
      path: '/started',
      name: 'started',
      component: started
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: transactions
    },
    {
      path: '/visa_card',
      name: 'visa_card',
      component: visa_card
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: withdraw
    },
    {
      path: '/write_us',
      name: 'write_us',
      component: write_us
    },
    {
      path: '/payments',
      name: 'payments',
      component: payments
    },
    {
      path: '/verificationcode',
      name: 'verificationcode',
      component: verificationcode
    },
  ]
// });

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.guest)) {
//     if (store.getters.isAuthenticated) {
//       next("/account_home");
//       return;
//     }
//     next();
//   } else {
//     next();
//   }
// });

export default router;