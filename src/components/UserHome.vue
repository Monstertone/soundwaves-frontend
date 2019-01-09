<template>

  <div id="content">

    <header>
      <header><router-link to="/"><h1 class="userhome-logo">SOUNDWAVES</h1></router-link></header>

    </header>


    <aside>

      <h3 class="menu-header">Local Music. Now.</h3>



      <img v-bind:src="songs[0].album_art" class="album-art">

      <p class="song-title">{{ songs[0].title }}</p>

      <audio ref="myAudioPlayer" v-bind:src="songs[0].url" controls></audio>
    </aside>



    <main class="nested-genres">

         <div class="classical">
           <img src="/src/assets/icons8-cello-100.png">
          <p>Classical</p>
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
        currentSong: ""
      }
    },
    created(){

      this.$store.dispatch(GET_SONGS);





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

  #content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows:minmax(50px, auto);
    text-align: center;

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
    color: #fff;
  }

  main {
    grid-column: 4 / 13;
    height: calc(100vh - 150px);
    /*background-color: rgb(75,105,116);*/
    background-color: #204154;
  }

  .menu-header {
    font-family: arial;
    color: #fff;
  }

  p {
    font-family: arial;
  }

  .nested-genres {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  .classical {
    width: 100px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    border: 1px solid #fff;
    background-color: rgb(75,105,116);
    box-shadow: 1px;
    color: rgb(255, 253, 173);

  }




</style>
