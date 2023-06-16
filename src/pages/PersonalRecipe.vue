<template>
    <div class="container">
      <RecipePreviewList
        v-if="$root.store.username"
        title="PersonalRecipe"
        state="PersonalRecipe"
        :class="{
          RandomRecipes: true,
          center: true,
        }"
      ></RecipePreviewList>
    </div>
  </template>
  
  <script>
  import RecipePreviewList from "../components/RecipePreviewList";
  
  export default {
    name: "PersonalRecipe",
    components: { RecipePreviewList },
    data() {
      return {};
    },
    validations: {},
    methods: {},
  };
  </script>
  <style lang="scss" scoped>
  .container {
    max-width: 70%;
  }
  </style>