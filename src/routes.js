import CreateAccount from './components/CreateAccount.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import UserHome from './components/UserHome.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/Create', component: CreateAccount },
  { path: '/Login', component: Login },
  {path: '/UserHome', component: UserHome},

];
