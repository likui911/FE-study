<template>
  <p>Popular Tags</p>

  <div class="tag-list">
    <a href="" class="tag-pill tag-default" v-for="(tag, index) in tags">
      {{ tag }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useTags } from "../composable/useTags";

export default defineComponent({
  name: "PopularTags",
  async setup() {
    const { tags, fetchTags } = useTags();
    await fetchTags();
    return {
      tags,
    };
  },
});
</script>

<style></style>
