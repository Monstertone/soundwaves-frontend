<template>
  <div>

    <div class="log-header">
      <h1 class="create-logo">SOUNDWAVES</h1>

    </div>


  <div class="log-div">
    <h1 class="create-top">Create account</h1>

    <!--FORM TO CREATE ACCOUNT-->


    <<form @submit.prevent="register()">>
       <div class="row">
           <div>

               <hr>
               <div class="form-group">
                 <label for="username">Username</label>
                 <input
                         type="text"
                         id="username"
                         class="form-control"
                         v-model.lazy.trim="newUser.username">

               </div>

                   <label for="email">Email</label>
                   <input
                           type="text"
                           id="email"
                           class="form-control"
                           v-model="newUser.email">

               </div>

               <div class="form-group">
                   <label for="password">Password</label>
                   <input
                           type="password"
                           id="password"
                           class="form-control"
                           v-model="newUser.password">
               </div>

              <!--<div>-->

                <!--<label for="priority">Birth Date: Month</label>-->
                <!--<select-->
                  <!--id="birthMonth"-->
                  <!--class="form-control"-->
                  <!--v-model="newUser.selectedMonth">-->
                  <!--<option-->
                    <!--v-for="month in months"-->
                    <!--:selected="month == 'January'"> {{ month }}</option>-->
                <!--</select>-->
                <!--<label for="day">Day:</label>-->
                <!--<input-->
                  <!--type="integer"-->
                  <!--id="day"-->
                  <!--class="form-control input-day"-->
                  <!--v-model.number="newUser.day">-->
                <!--<label for="day">Year:</label>-->
                <!--<input-->
                  <!--type="integer"-->
                  <!--id="year"-->
                  <!--class="form-control input-year"-->
                  <!--v-model.number="newUser.year">-->

              <!--</div>-->



               <div>
                   <label for="male">
                    <input
                            type="radio"
                            id="male"
                            value="Male"
                            v-model="newUser.gender"> Male
                  </label>
                  <label for="female">
                      <input
                              type="radio"
                              id="female"
                              value="Female"
                              v-model="newUser.gender"> Female
                  </label>
               </div>

               <div class="form-group">
                   <label for="share_info">
                   <input
                           type="checkbox"
                           id="share_info"
                           value="optinoffers"
                           v-model="newUser.share_info">Get Special Offers

                   </label>
               </div>



     </div>

      <button type="submit">Submit</button>

     </form>

   <div>
       <hr>
       <h3>Already have an account?</h3>
       <router-link to="/Login">
         Log In
       </router-link>
   </div>


  <!--<p>-->
    <!--Username: {{ newUser.username }}-->
  <!--</p>-->
  <!--<p>-->
    <!--Email: {{ newUser.email }}-->
    <!--</p>-->
    <!--<p>-->
      <!--Checked: {{ newUser.optin }}-->
      <!--</p>-->
      <!--<p>-->
        <!--Birthdate: {{ newUser.selectedMonth }} {{ newUser.day }} {{ newUser.year }}-->
        <!--</p>-->




  </div>

  </div>
</template>

<script>

  import {REGISTER_USER} from "../../Vuex/mutation-types";


  //
  // export default {
  //   data() {
  //     return {
  //       newUser: {
  //         username: '',
  //         email: '',
  //         password: '',
  //         optin: '',
  //         gender: 'Male',
  //         selectedMonth: 'January'
  //       },
  //         months: ['January', 'February', 'March', 'April', 'May', 'June',
  //         'July', 'August', 'September', 'October', 'November', 'December'],
  //         birth_date:1990-12-1,
  //     }
  //   }
  // }

  export default {
    name: 'loginreg',
    data () {
      return {
        viewing:"Login",
        valid: false,
        error:"",
        newUser:{
          isParent: false
        },
        logUser:{
          email:"",
          password:""
        },
        dialog:false,
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        requiredRules:[
          (v)=> !!v || 'This field is required'
        ]
      }
    },
    computed:{
      user(){
        return this.$store.getters.user;
      }
    },
    methods:{
      register:function(){
        this.error = ""
        this.$store.dispatch(REGISTER_USER, {
          newUser: this.newUser
        }).then(()=>{
          this.dialog=false;
          this.newUser = {
            username:"",
            email:"",
            password:"",
            share_info: "",
            gender:"",
            birth_date: 1990-12-12,
          };
          // This is for efficiency so we don't have to manually recall every components created function to gather data for whatever page the user logs in from.
          this.$router.push("/");
        })
          .catch((err)=>{
            console.log(err)
            this.error = err.data;
          });
      },
      login:function(){
        this.error=""
        this.$store.dispatch(LOGIN_USER, {
          logUser:this.logUser
        }).then(()=>{
          this.dialog=false;
          this.logUser = {
            email:"",
            password:""
          };
          this.$store.dispatch(GET_NOTIFICATIONS);
          console.log("running  this")
          this.$router.push("/");
        })
          .catch((err)=>{
            console.log(err)
            this.error = err.data;
          });

      }
    }
  }
</script>

<style>

  @font-face {
    font-family: 'six_capsregular';
    src: url('../assets/fonts/sixcaps-webfont.woff2') format('woff2'),
    url('../assets/fonts/sixcaps-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }



  .create-logo {

    font-family: six_capsregular;
    font-size: 6vw;
    color:rgb(255, 253, 173);
    margin: auto;
  }

 .create-top {
   color: black;
   font-size: 3vh;
 }

 .log-header {

   padding: auto;
   width: 100vw;
   background-color:#173348;
 }

 .log-div {
   width: 600px;
   margin: auto;
   margin-top: 0;
   background-color: #fff;
   height: 100vh;

 }
 .submit-btn {
   width: 80px;
   height: 30px;
   border: 1px solid black;
   border-radius: 5px;
 }
 .input-day {
   width: 15px;
 }
 .input-year {
   width: 30px;
 }
</style>
