<template>

  <div class="splash">

    <header>
      <ul>
        <li><a class="active" href="#home"><router-link to="/Login">LOG IN</router-link></a></li>
        <li><a href="#news">NEWS</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#about">ABOUT</a></li>
      </ul>
    </header>
    <h1 class="mainlogo">SOUNDWAVES</h1>
      <div class="main">
            <div class="left">
            <router-link to="/Create">
  <button id="submitbutton" class="startbutton">START LISTENING!</button>
</router-link>

            </div>

              <div class="right">
                <div><h2>Local Music.  Now.</h2></div>
                <p class="front_text">We love local, grassroots music.  It doesn't matter if you
                record in your bedroom,  or in your local studio - if you're an undiscovered artist and want to
              get your music heard,  we'd love to hear from you.</p>


              </div>
      </div>
  </div>
</template>


<script>

</script>

<style>

  @font-face {
    font-family: 'six_capsregular';
    src: url('../assets/fonts/sixcaps-webfont.woff2') format('woff2'),
    url('../assets/fonts/sixcaps-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }



  .splash {
     background-image: url('../assets/bg_1600x900.jpg');
     height: 100vh;
     background-size:cover;
     background-repeat: no-repeat;
     background-color: rgb(0, 2, 5);
     z-index: -1;
    }

  .main {
    display: flex;
    justify-content:space-around;
  }
  .left {
    min-width: 400px;
    min-height: 400px;
    /* border: 1px solid rgb(255, 253, 173); */
    border-radius: 5px;
  }
  .right {
    min-width: 30vw;
    max-width: 35vw;
    min-height: 400px;
    border: 1px solid rgb(255, 253, 173);
    border-radius: 15px;
    background-color:rgb(1, 11, 23);
    opacity: .6;
  }
  h2 {
    color: white;
    font-family: arial;
    font-size: 2vw;
    margin: 15px 20px;
  }
  .mainlogo {
    font-family: six_capsregular;
    font-size: 6vw;
    color:rgb(255, 253, 173);
    margin-left: 50px;
    margin-top: -50px;
    z-index: 3;
    position:relative;
  }
  .startbutton {
    min-height: 6vh;
    min-width: 10vw;
    color: rgb(255, 253, 173);
    border-radius: 10px;
    font-size: 2vh;
    background-color: transparent;
    position:relative;
    float:right;
    border-color: rgb(255, 253, 173);
    cursor: pointer;
    cursor: hand;
  }

  .startbutton:hover {

    background-color: rgb(1,11,23);
    opacity: 0.7;
  }
  .front_text {
    color: rgb(255, 253, 173);
    font-size: 1.25rem;
    /* font-family: arial; */
    padding:20px;
  }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color:rgb(1, 11, 23);
      opacity: .3;
      z-index: 1;
      position:relative;
    }

    li {
      color: white;
      float: right;
    }

    li a {
      display: block;
      color: white;
      font-size: 1.5rem;
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      padding: 16px 16px;
      text-decoration: none;
    }

    /* Change the link color to #111 (black) on hover */
    li a:hover {
      background-color: rgb(39, 73, 87);
    }

</style>
