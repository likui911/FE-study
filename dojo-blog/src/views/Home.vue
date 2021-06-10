<template>
  <div class="home">
    <h1>Refs</h1>
    <h2>ninjaOne</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }} - {{ refName }}</p>
    <button @click="handleNinjaOne">click me</button>

    <h1>Reactive</h1>
    <h2>ninjaTwo</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="handleNinjaTwo">click me</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Home",
  setup() {
    //ref
    const ninjaOne = ref({ name: "mario", age: 30 });
    const refName = ref("mario");
    const handleNinjaOne = () => {
      ninjaOne.value.age++;
      refName.value = "mario_1";
    };

    //reactive
    const ninjaTwo = reactive({ name: "luigi", age: 35 });
    //reactivity.esm-bundler.js?a1e9:695 value cannot be made reactive
    //const reaciveName = reactive("luigi");
    const handleNinjaTwo = () => {
      ninjaTwo.age++;
    };

    return {
      ninjaOne,
      refName,
      handleNinjaOne,
      ninjaTwo,
      handleNinjaTwo,
    };
  },
};
</script>
