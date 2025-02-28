<template>
  <h1>Hola món</h1>
</template>

<!--Definim la configuració de Vue amb un setup-->
<script lang="ts" setup>
console.log("Executat");
</script>

<!--Emprem scoped perque només s'apliqui a aquest component i template-->
<style scoped>
h1 {
  color: red;
}
</style>