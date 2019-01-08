<template>

  <div id="content">

    <header><router-link to="/"><h1 class="create-logo">SOUNDWAVES</h1></router-link></header>



    <main>

      <h2>Create Account</h2>

      <form @submit.prevent="register()">

        <div>

          <!--<label for="email">Email</label>-->
          <input
            class="input-form"
            placeholder="Username"
            type="text"
            id="username"
            v-model="newUser.username">

        </div>

        <div>

          <!--<label for="email">Email</label>-->
          <input
            class="input-form"
            placeholder="Email address"
            type="text"
            id="email"
            v-model="newUser.email">

        </div>
        <div>
          <!--<label for="password">Password</label>-->
          <input
            class="input-form"
            placeholder="Password"
            type="password"
            id="password"
            v-model="newUser.password">
        </div>

        <!--<div>-->

        <!--This section is for future development-->

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

        <div class="gender-select">
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
              class="offer-box"
              type="checkbox"
              id="share_info"
              value="optinoffers"
              v-model="newUser.share_info">Get Special Offers

          </label>

        </div>


        <button type="submit" class="submit-btn">SUBMIT</button>

      </form>
      
    <div>
        <hr>
        <h3>Already have an account?</h3>
        <router-link to="/Login">
          <button class="signup-btn">LOG IN</button>
        </router-link>
      </div>


    </main>

  </div>
</template>

<script>

  import {REGISTER_USER} from "../../Vuex/mutation-types";



  export default {
    name: 'loginreg',
    data () {
      return {
        viewing:"Login",
        valid: false,
        error:"",
        newUser:{
          isParent: false,
          birth_date: '1990-12-12'
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
            birth_date: "1990-12-12",
          };
          // This is for efficiency so we don't have to manually recall every components created function to gather data for whatever page the user logs in from.
          this.$router.push("/Login");
        })
          .catch((err)=>{
            console.log(err)
            this.error = err.data;
          });
      },

    }
  }
</script>

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

  .input-form {
    border: 1px solid #d9dadc;
    width: 70%;
    height: 30px;
    padding: 6px 12px;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .submit-btn {
    background-color:  rgb(1,11,23);
    color: rgb(255, 253, 173);
    border: 1px solid rgb(255, 253, 173);
    border-radius: 10px;
    width: 90px;
    height: 35px;
    font-size: 12px;
    cursor: pointer;
    cursor: hand;
  }

  .signup-btn {
    background-color:  rgb(1,11,23);
    color: rgb(255, 253, 173);
    border: 1px solid rgb(255, 253, 173);
    border-radius: 10px;
    height: 35px;
    width: 90px;
    font-size: 12px;
    cursor: pointer;
    cursor: hand;
  }

  .offer-box {

    margin: 20px;
}

.gender-select {
    margin-top: 20px;
}


  #content {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(50px, auto);
    text-align: center;


  }

  header {
    grid-column: 1 / 7;
    /*background-color:#173348;*/
    /*background-color: rgb(39, 73, 87);*/
    background-color: rgb(1,11,23);
  }

  main {
    grid-column: 3 / 5 ;
    background-color: #fff;
    height: 100vh;
    text-align: center;
    color:rgb(1,11,23);
  }

  hr {
    width: 80%;
  }


</style>
