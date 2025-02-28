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
<script lang="ts" src="./MeuContador.ts"></script>