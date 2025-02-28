import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    value: Number,
  },
  setup(props) {
    const counter = ref(props.value ?? 0); //Controlem per si no rebem els parametres oportuns
    const contadorQuadrat = computed(() => {
      if (counter.value === null || counter.value === undefined) {
        return 0;
      }
      return counter.value * counter.value;
    });

    return {
      counter,
      contadorQuadrat,
    };
  },
});
