<template>
  <div>
    <header>
        <ul>
            <li><a class="active" href="#home">LOG IN</a></li>
            <li><a href="#news">NEWS</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#about">ABOUT</a></li>
        </ul>
    </header>
  </div>
</template>

<script>


</script>

<style>

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
