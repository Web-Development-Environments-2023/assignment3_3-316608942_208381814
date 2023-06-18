<template>
  <b-card class="form-box">
    <div class="recipe-preview">
      <div class="recipe-body">
        <!-- <img v-if="image_load" :src="recipe.image" class="recipe-image" /> -->
           <router-link
        :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
        class="recipe-preview"
      >
        <b-card-img :src="recipe.image" class="custom-image" />
      </router-link>
      </div>
      <div class="recipe-details">
        <div :title="recipe.title" style="font-size: 30px;" class="recipe-title">{{ recipe.title }}</div>
        <ul class="recipe-overview" >
          <li v-if="recipe.readyInMinutes">Ready in {{ recipe.readyInMinutes }} minutes</li>
          <li v-if="recipe.popularity">{{ recipe.popularity }} likes</li>
          <li v-if="recipe.vegan">Vegan 🌿</li>
          <li v-if="recipe.vegetarian">Vegetarian 🥕</li>
          <li v-if="recipe.glutenFree">Gluten Free 🌾❌</li>
          <li v-if="recipe.owner">Owner: {{ recipe.owner }} </li>
          <li v-if="recipe.when">Occasion of making: {{ recipe.when }} </li>
        </ul>
        <div class="recipe-buttons">
          <b-button
            v-if="!recipe.isFavorite"
            variant="outline-danger"
            @click="addToFavorite"
          >
            Add to Favorites ❤️
          </b-button>
          <b-button v-else variant="outline-danger" disabled>
            Favorite Recipe ❤️
          </b-button>
          <b-button v-if="recipe.isWatched" variant="outline-primary" disabled>
            You've seen this recipe before 👁
          </b-button>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {


  data() {
    return {

    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
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
.recipe-preview {
  display: flex;
  align-items: center;
}

.recipe-body {
  width: 300px; /* Increase the width of the recipe body */
  height: 300px; /* Increase the height of the recipe body */
}



/* .recipe-details {
  flex-grow: 1;
  padding-left: 5px;
  max-width: 200px; /* Add a max-width to prevent text overflow 
} */

.form-box {
  padding: 5px;
  color:black;
  border-radius: 20px;
  width: 60%;
  height: 350px; /* Add a fixed height for all forms */
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  text-align: center;
}
.custom-image {
  width: 200px;
  height: 250px;
}

/* .recipe-preview .recipe-footer .recipe-title {
  padding: 5px 10px;
  width: 100%;
  font-size: 9pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  color: #83c5be;
} */

/* .recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
} */


</style>
