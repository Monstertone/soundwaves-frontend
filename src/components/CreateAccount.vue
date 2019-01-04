<template>
  <div>
    <h1 class="create-top">Create account</h1>
    <form>
       <div class="row">
           <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

               <hr>
               <div class="form-group">
                 <label for="username">Username</label>
                 <input
                         type="text"
                         id="username"
                         class="form-control"
                         v-model.lazy.trim="userData.username">

               </div>

                   <label for="email">Email</label>
                   <input
                           type="text"
                           id="email"
                           class="form-control"
                           v-model="userData.email">
               </div>
               <div class="form-group">
                   <label for="password">Password</label>
                   <input
                           type="password"
                           id="password"
                           class="form-control"
                           v-model="userData.password">
               </div>

               <label for="priority">Birth Date: Month</label>
                      <select
                              id="birthMonth"
                              class="form-control"
                              v-model="userData.selectedMonth">
                          <option
                            v-for="month in months"
                            :selected="month == 'January'"> {{ month }}</option>
                      </select>
                      <label for="day">Day:</label>
                      <input
                              type="integer"
                              id="day"
                              class="form-control input-day"
                              v-model.number="userData.day">
                      <label for="day">Year:</label>
                      <input
                              type="integer"
                              id="year"
                              class="form-control input-year"
                              v-model.number="userData.year">


               <div>
                 <label for="male">
                  <input
                          type="radio"
                          id="male"
                          value="Male"
                          v-model="userData.gender"> Male
                </label>
                <label for="female">
                    <input
                            type="radio"
                            id="female"
                            value="Female"
                            v-model="userData.gender"> Female
                </label>
                 </div>

               <div class="form-group">
                   <label for="opt-in">
                   <input
                           type="checkbox"
                           id="optin"
                           value="optinoffers"
                           v-model="userData.optin">Get Special Offers

                   </label>
               </div>
         <hr>
          <h3>Already have an account?</h3>
         <router-link to="/Login">
           <button id="submitbutton" >Log In</button>
         </router-link>

         </div>

     </form>


  <!--<p>-->
    <!--Username: {{ userData.username }}-->
  <!--</p>-->
  <!--<p>-->
    <!--Email: {{ userData.email }}-->
    <!--</p>-->
    <!--<p>-->
      <!--Checked: {{ userData.optin }}-->
      <!--</p>-->
      <!--<p>-->
        <!--Birthdate: {{ userData.selectedMonth }} {{ userData.day }} {{ userData.year }}-->
        <!--</p>-->




  </div>
</template>

<script>
  export default {
    data() {
      return {
        userData: {
          username: '',
          email: '',
          password: '',
          optin: '',
          gender: 'Male',
          selectedMonth: 'January'
        },
          months: ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'],

      }
    }
  }
</script>

<style>
 .create-top {
   color: black;
   font-size: 3vh;
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
