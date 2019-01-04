<template>
  <div>
    <h1>Log In</h1>
    <form>

      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          class="form-control"
          v-model.lazy.trim="userData.username">

      </div>

      <div> <label for="email">Email</label>
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

    </form>

    <div>
      <hr>
      <h3>Don't have an account?</h3>
      <router-link to="/Create">
        <button id="submitbutton">Create Account</button>
      </router-link>
    </div>
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

        }
      }
    }
  }
</script>
