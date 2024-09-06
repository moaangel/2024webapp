<template>
  <nav class="navbar flex justify-between h-12">
    <h1 class="my-auto ml-6">LOGO</h1>
    <ul class="flex my-auto w-1/3 justify-between">
      <router-link to="/map" class="nav-link">MENU1</router-link>
      <li><a href="#">MENU2</a></li>
      <li><a href="#">MENU3</a></li>
      <li><a href="#">MENU4</a></li>
    </ul>
    <button class="toggle mr-6">
      <i class="fa-solid fa-bars-staggered"></i>
    </button>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  // width: 100%;
  background: white;
  // padding: 20px;
  // display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  .toggle {
    // margin-left: auto;
    // //background: skyblue;
    // width: 36px;
    // height: 36px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    cursor: pointer;
  }
}
</style>
