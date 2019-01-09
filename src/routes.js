import CreateAccount from './components/CreateAccount.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
// import UserHome from './components/UserHome_old.vue';
import AudioPlayer from './components/AudioPlayer.vue';
import Test from './components/Test.vue';
import UserHome from './components/UserHome.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/Create', component: CreateAccount },
  { path: '/Login', component: Login },
  // { path: '/UserHome', component: UserHome},
  { path: '/AudioPlayer', component: AudioPlayer},
  { path: '/Test' , component: Test},
  { path: '/UserHome', component: UserHome },
];
