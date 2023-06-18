<template>
    <div class="container">
      <RecipePreviewList
        v-if="$root.store.username"
        title="FamilyRecipe"
        state="FamilyRecipe"
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
    name: "FamilyRecipe",
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

<style>
body {
  background-image: url('../assets/family.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>