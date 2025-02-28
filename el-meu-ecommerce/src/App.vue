<template>
  <div>
    <h1>La meva primera app</h1>
    <hr>
    <MeuContador />
  </div>
</template>

<!--Definim la configuració de Vue amb un setup-->
<script lang="ts" setup>
  import MeuContador from './components/MeuContador.vue';
</script>