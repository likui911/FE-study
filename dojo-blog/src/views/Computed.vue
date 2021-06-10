<template>
  <div>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Computed",
  setup() {
    const search = ref("");
    const names = [
      "mario",
      "luigi",
      "yoshi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ];

    const matchNames = computed(() => {
      return names.filter((name) => name.includes(search.value));
    });
    return { search, matchNames };
  },
};
</script>
