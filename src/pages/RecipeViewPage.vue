<template>
  <div class="container">
    <b-card class="form-box">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img style="height: 400px; width: 400px;" :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped" v-if="$root.store.username">
            <b-button 
              v-if="!recipe.isFavorite"
              variant="outline-danger"
              @click="addToFavorite"
              >Add to Favorites ❤️</b-button
            >
            <b-button v-else variant="outline-danger" style="font-size: 30px; width: 60%; border-width: 10px;" disabled>
              Favorite Recipe ❤️
            </b-button>
            
            <br />
            <b-button v-if="recipe.isWatched" variant="outline-primary" style="font-size: 30px; width: 60%; border-width: 10px;" disabled
              >You've seen this recipe before 👁</b-button
            >
          </div>
          <div class="wrapped">
            <div class="mb-3">
              <div v-if="recipe.readyInMinutes">Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div v-if="recipe.popularity">Likes: {{ recipe.popularity }} likes</div>
              <div v-if="recipe.servings">Servings: for {{ recipe.servings }} people</div>
              <div v-if="recipe.vegan">Vegan 🌿</div>
              <div v-if="recipe.vegetarian">Vegetarian 🥕</div>
              <div v-if="recipe.glutenFree">Gluten Free 🌾❌</div>
              <div v-if="recipe.owner">Owner: {{ recipe.owner }} </div>
              <div v-if="recipe.when">Occasion of making: {{ recipe.when }} </div>
              
            </div>
            Ingredients:
            <ul>
              <div v-if="recipe.ingredients">{{ recipe.ingredients }}</div>
              <li v-for="(r) in recipe.extendedIngredients" >
                {{ r.name }}: {{ r.amount }} {{ r.unit }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <p v-html="recipe.instructions" />
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          this.$root.store.server_domain + `/recipes/${this.$route.params.recipeId}`,
          { withCredentials: true },
          {recipeId: this.$route.params.recipeId},
        );

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      // let {
      //   analyzedInstructions,
      //   instructions,
      //   extendedIngredients,
      //   aggregateLikes,
      //   readyInMinutes,
      //   image,
      //   title
      // } = response.data.recipe;
      

      // let _instructions = analyzedInstructions
      //   .map((fstep) => {
      //     fstep.steps[0].step = fstep.name + fstep.steps[0].step;
      //     return fstep.steps;
      //   })
      //   .reduce((a, b) => [...a, ...b], []);

      // let _recipe = {
      //   instructions,
      //   _instructions,
      //   analyzedInstructions,
      //   extendedIngredients,
      //   aggregateLikes,
      //   readyInMinutes,
      //   image,
      //   title
      // };

      this.recipe = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async addToFavorite() {
      try {
        let response;
        try {
          let response = await this.axios.post(
            this.$root.store.server_domain + `/users/favorites`,
            {
              recipeId: this.recipe.id,
            },
            {withCredentials:true}
          );
          if (response.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          console.log("error.response.status", error.response.status);
          this.$router.replace("/NotFound");
          return;
        }
        this.recipe.isFavorite = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.form-box {
  padding: 5px;
  border-radius: 20px;
  width: 1300px;
  height: 2000px; /* Add a fixed height for all forms */
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  text-align: center;
}
</style>
