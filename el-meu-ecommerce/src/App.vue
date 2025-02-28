<template>
  <section>
      <h3>Contador: {{ counter }}</h3>
      <h3>Quadrat: {{ contadorQuadrat }}</h3>

      <div>
          <button>+1</button>
          <button>-1</button>
      </div>
  </section>
</template>

<!--Definim la configuració de Vue amb un setup-->
<script lang="ts" setup>
  import {computed, ref} from 'vue';
  const counter = ref(10);

  const contadorQuadrat = computed(() => counter.value * counter.value);
</script>