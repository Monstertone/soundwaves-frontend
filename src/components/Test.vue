<template>
  <div>


  <h1>Audio Master</h1>

    <audio ref="myAudioPlayer" v-bind:src="songs[0].url" controls>




    </audio>

    <button @click="audioPlayer()">Get Songs</button>
    <!--<p> {{ title }}</p>-->

      {{ songs[0].title }}

    <p ref="mySongTitle">{{ }}</p>




  </div>

</template>

<script>


  import {GET_SONGS} from "../../Vuex/mutation-types";

  export default  {

    name: 'songInfo',
    data(){
       return {

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

         console.log('songlength', this.$store.state.songs.length);



         var self = this;

        audio.addEventListener('ended', function () {
          console.log('songended')
          i = ++i < self.$store.state.songs.length ? i : 0;
          console.log(i)
          audio.src = self.$store.state.songs[i].url;
          audio.play();
           }, true);
        audio.volume = 0.3;
        audio.loop = false;
        audio.src = this.songs[i].url;
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

   .albumcover {
     width: 50px;

   }


</style>
