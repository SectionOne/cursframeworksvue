<template>
  <section>
      <h3>Contador: {{ counter }}</h3>
      <h3>Quadrat: {{ contadorQuadrat }}</h3>

      <div>
          <button @click="counter++">+1</button>
          <button @click="counter--">-1</button>
      </div>
  </section>
</template>

<!--Definim la configuració de Vue amb un setup-->
<script lang="ts" setup>
  import {computed, ref} from 'vue';
  
  const props = defineProps({
      value: {
          type: Number,
          default: 0
      },
  });

  const counter = ref(props.value);


  const contadorQuadrat = computed(() => counter.value * counter.value);
</script>