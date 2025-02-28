<template>
  <h1  class="text-center text-success display-3">La meva primera app</h1>
  <hr>
  <h2>Van entrar</h2><MeuContador :value="5"/>
  <h2>Van sortir</h2><MeuContador :value="10"/>
</template>

<!--Definim la configuració de Vue amb un setup-->
<script lang="ts" setup>
  import MeuContador from './components/meu-contador/MeuContador.vue';
</script>