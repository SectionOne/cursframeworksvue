<template>
  <h1>La meva primera app</h1>
  <hr>
  <MeuContador :value="5"/>
  <MeuContador :value="10"/>
</template>

<!--Definim la configuració de Vue amb un setup-->
<script lang="ts" setup>
  import MeuContador from './components/MeuContador.vue';
</script>