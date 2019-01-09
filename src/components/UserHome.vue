<template>

  <div id="content">

    <header>
     <span> <router-link to="/"><h1 class="userhome-logo">SOUNDWAVES</h1></router-link>

    <!--<p class="welcome"> Welcome back, &nbsp{{ this.$store.state.user.username }} </p>-->

       </span>

    </header>


    <aside>

      <h3 class="menu-header">Local Music. Now.</h3>



      <img v-bind:src="songs[0].album_art" class="album-art">

      <p class="song-title user">{{ songs[0].title }}</p>

      <p class="song-title user">by {{ songs[0].artist_name }}</p>

      <audio ref="myAudioPlayer" v-bind:src="songs[0].url" controls class="audio-player"></audio>

      <br>

      <button @click="audioPlayer()" class="getsong-btn">Get Songs</button>

      <img :src="currentSong.album_art" :alt="currentSong.title" class="album-art">
    </aside>



    <main class="nested-genres">



         <div class="classical genre-box">
           <img src="/src/assets/icons8-cello-100.png">
           <p class="user">Classical</p>
         </div>

      <div class="rock genre-box">
        <img src="/src/assets/icons8-rock-music-100.png">
        <p class="user"> Rock</p>
      </div>

      <div class="folk genre-box">
        <img src="/src/assets/icons8-folk-music-100.png">
        <p class="user">Folk</p>
      </div>

      <div class="heavy-metal genre-box">
      <img src="/src/assets/icons8-metal-music-100.png">
        <p class="user">Heavy Metal</p>
    </div>


      <div class="edm genre-box">
        <img src="/src/assets/icons8-electronic-music-100.png">
        <p class="user">EDM</p>
      </div>

      <div class="country genre-box">
        <img src="/src/assets/icons8-country-music-100.png">
        <p class="user">Country</p>
      </div>

      <div class="jazz genre-box">
        <img src="/src/assets/icons8-saxophone-100.png">
        <p class="user">Jazz</p>
      </div>

      <div class="hip-hop genre-box">
        <img src="/src/assets/icons8-hip-hop-music-100.png">
        <p class="user">Hip-Hop</p>
      </div>

      <div class="pop genre-box">
        <img src="/src/assets/icons8-music-record-100.png">
        <p class="user">Pop</p>
      </div>

      <div class="blues genre-box">
        <img src="/src/assets/icons8-herald-trumpet-100.png">
        <p class="user">Blues</p>
      </div>
    </main>

  </div>




</template>

<script>

  import {GET_SONGS} from "../../Vuex/mutation-types";

  export default  {

    name: 'songInfo',
    data(){
      return {
        currentSong:"",


      }
    },
    created(){

      this.$store.dispatch(GET_SONGS);

      console.log('The Store', this.$store)





    },
    methods: {
      audioPlayer: function(){
        var audio = this.$refs.myAudioPlayer;
        audio.play();
        var i = 0;
        var self = this;
        audio.addEventListener('ended', function () {
          console.log('songended')
          i = ++i < self.$store.state.songs.length ? i : 0;
          var currentSong = self.$store.state.songs[i].title;
          console.log('title is:', currentSong)
          audio.src = self.$store.state.songs[i].url;
          audio.play();
        }, true);
        console.log("I is: ", i);
        audio.volume = 0.3;
        audio.loop = false;
        audio.src = this.songs[i].url;
        console.log('songlength', this.$store.state.songs.length)
        console.log('SONGS', this.$store.state.songs[i].title);
        console.log('audio', audio);
      }

    },
    computed: {
      songs: function(){
        return this.$store.state.songs;
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



  .userhome-logo {

    font-family: six_capsregular;
    font-size: 6vw;
    color:rgb(255, 253, 173);
    margin: auto;

  }

  .welcome {
    color: #ffe;
    font-size: 1.25rem;
    float:left;
  }

  #content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows:minmax(50px, auto);
    text-align: center;

  }

  a {
    text-decoration: none;
  }
  header {
    grid-column: 1 / 13;

    background-color: rgb(1,11,23);
  }

  aside {
    border-top: 2px solid rgb(255, 253, 173);
    grid-column: 1 / 4;
    height: calc(100vh - 150px);
    background-color:  rgb(1,11,23);
  }

  .album-art {
    width: 50%;
  }

  .song-title {
    color: rgb(255, 253, 173);
  }

  .getsong-btn {
    background-color:  rgb(1,11,23);
    color: rgb(255, 253, 173);
    border: 1px solid rgb(255, 253, 173);
    border-radius: 10px;
    height: 35px;
    width: 90px;
    font-size: 12px;
    cursor: pointer;
    cursor: hand;
    margin-top: 20px;
  }

  .getsong-btn:hover {
    opacity: 0.9;
  }

  main {
    grid-column: 4 / 13;
    height: calc(100vh - 150px);
    /*background-color: rgb(75,105,116);*/
    background-color: #204154;
  }

  .menu-header {
    font-family: arial;
    color: #ffe;
  }

  p.user {
    font-family: arial;
  }


  .nested-genres {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  .genre-box {
    width: 100px;
    /*border: 1px solid #fff;*/
    border: 1px solid #ffe;
    background-color: rgb(75,105,116);
    box-shadow: 1px;
    color: rgb(255, 253, 173);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .classical {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

  }

  .rock {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  .folk {
        grid-column: 6 / 7;
        grid-row: 2 / 3;
      }

  .heavy-metal {
    grid-column: 8 / 9;
    grid-row: 2 / 3;
  }

  .pop {
    grid-column: 10 / 11;
    grid-row: 2 / 3;
  }

  .edm {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  .country {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
  }

  .jazz {
    grid-column: 6 / 7;
    grid-row: 4 / 5;
  }

  .hip-hop {
    grid-column: 8 / 9;
    grid-row: 4 / 5;
  }

  .blues {
    grid-column: 10 / 11;
    grid-row: 4 / 5;
  }







</style>
