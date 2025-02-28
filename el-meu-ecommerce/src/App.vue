<template>
  <section>
      <h3>Contador: {{ counter }}</h3>
      <h3>Quadrat: {{ 10 * 10 }}</h3>

      <div>
          <button>+1</button>
          <button>-1</button>
      </div>
  </section>
</template>

<!--Definim la configuració de Vue amb un setup-->
<script lang="ts" setup>
import {ref} from 'vue';
const counter = ref(10);
</script>

<!--Emprem scoped perque només s'apliqui a aquest component i template-->
<style scoped>
h1 {
  color: red;
}
</style>