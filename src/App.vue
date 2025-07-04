<template>

  <header class="pt-2 text-center">
    <router-link aria-current="page" :to="{name: 'home'}" class="btn btn-outline-warning rounded-pill px-5 py-2 mx-1">Home</router-link>
    <router-link aria-current="page" :to="{name: 'about'}" class="btn btn-outline-warning rounded-pill px-5 py-2 mx-1">About</router-link>
    <router-link aria-current="page" :to="{name: 'info'}" class="btn btn-outline-warning rounded-pill px-5 py-2 mx-1">Info</router-link>
  </header>

  
  <router-view></router-view>
</template>


<script setup>

</script>