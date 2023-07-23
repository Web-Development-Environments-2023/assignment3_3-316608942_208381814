<template>
  <div class="container">
    <b-card class="form-box" style="color: black; ">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <b-card-header :title="recipe.title" style="font-size: 30px;font-weight: bold;" class="recipe-title">{{ recipe.title }}</b-card-header>
        <b-card-img :src="recipe.image" class="center" />
      </div>
      <b-card-body class="recipe-body">
        <div class="wrapper">
          <div class="wrapped" v-if="$root.store.username">
            <b-button 
              v-if="!recipe.isFavorite"
              variant="outline-danger"
              @click="addToFavorite"
              >Add to Favorites ❤️</b-button
            >
            <b-button v-else variant="outline-danger" style="font-weight: bold;" disabled>
              Favorite Recipe ❤️
            </b-button>
            
            <br />
            <b-button v-if="recipe.isWatched" variant="outline-primary" style="font-weight: bold; " disabled
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
            <div v-if="recipe.extendedIngredients">
              <li v-for="(r, index) in recipe.extendedIngredients" :key="index">
                {{ r.name }}: {{ r.amount }} {{ r.unit }}
              </li> </div>
              <div v-if="recipe.ingredients">
              <li v-for="(r, index) in recipe.ingredients" :key="index">
                {{ r.name }}: {{ r.amount }} {{ r.unit }}
              </li></div>
            </ul>
          
          </div>
          <div class="wrapped">
            Instructions:
            <p v-html="recipe.instructions" />
          </div>
        </div>
      </b-card-body>
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
      try {
        response = await this.axios.get(
          this.$root.store.server_domain + `/recipes/${this.$route.params.recipeId}`,
          { withCredentials: true },
          {recipeId: this.$route.params.recipeId},
        );

        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
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
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  text-align: center;
}
</style>
