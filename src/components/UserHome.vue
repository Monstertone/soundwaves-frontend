<template>
  <div>


   <h1>You are Home!</h1>

    <p> {{ title }}</p>

    <p> {{ url }}</p>

 <audio v-bind:src="url" controls>




 </audio>

    <button @click="getSongs()">Get Songs</button>

  </div>

</template>

<script>
 import axios from 'axios';

 export default {

    data () {
      return {
        title: '',
        url: '',
        album_art: ''


      }
    },
    created () {
      axios.get('http://localhost:8000/random', )
        .then(res => {
          console.log(res)
          const data = res.data
          const songs = []
          for (let key in data) {
           const song = data[key]
           song.id = key
           songs.push(song)
          }
          console.log(songs)
          this.title = songs[0].title
          this.url = songs[0].url
          console.log('the array length is:',  songs.length);
        })
        .catch(error => console.log(error))
    }
 }
</script>

<styles>


</styles>
