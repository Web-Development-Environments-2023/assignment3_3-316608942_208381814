<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true,
    },
    recipesData: {
      type: Array,
    },
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        let response;
        switch (this._props.state) {
          case "random":
          response = await this.axios.get(
             this.$root.store.server_domain + "/recipes/random",
            { withCredentials: true }
          );
            break;
          case "lastWatched":
            response = await this.axios.get(
              this.$root.store.server_domain + "/users/getlastWatches",
              { withCredentials: true }
            );
            break;
          case "favorite":
            response = await this.axios.get(
              this.$root.store.server_domain + "/users/favorites",
              { withCredentials: true }
            );
            break;
          case "PersonalRecipe":
            response = await this.axios.get(
              this.$root.store.server_domain + "/users/myRecipes",
              { withCredentials: true }
            );
            break;
          case "search":
            this.recipes.push(...this.recipesData);
            return;
            break;
          case "FamilyRecipe":
            response = await this.axios.get(
              this.$root.store.server_domain + "/users/family",
              { withCredentials: true }
            );
            break;
            default:
              return;
        }
        
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
