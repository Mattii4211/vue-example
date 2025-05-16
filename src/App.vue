<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<template>
   <div class="container mt-4">
    <nav>
        <router-link to="/" class="btn btn-primary me-2">Home</router-link>
        <router-link to="/example" class="btn btn-primary me-2">Licznik</router-link>
    </nav>
    <router-view class="mt-4" />
  </div>
</template>