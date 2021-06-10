<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">age++</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    console.log("setup");

    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      console.log("you clicked me");
      name.value = "luigi";
      age.value = 35;
    };
    return { name, age, handleClick };
  },
};
</script>
