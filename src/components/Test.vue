<template>
  <div>


  <h1>Audio Master</h1>

    <audio ref="myAudioPlayer" v-bind:src="songs[0].url" controls>




    </audio>

    <button @click="audioPlayer()">Get Songs</button>
    <!--<p> {{ title }}</p>-->

      {{ songs[0].title }}

    <p>{{ currentSong }}</p>

    <p ref="mySongTitle">{{ }}</p>




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




</style>
