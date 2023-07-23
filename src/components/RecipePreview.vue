
  <template>
    <div class="recipe-preview">

        <b-card class="form-box" style="color: black; ">
           <router-link
        :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
        class="recipe-preview"
      >
        <b-card-img :src="recipe.image" class="custom-image" />
      </router-link>

        <b-card-header :title="recipe.title" style="font-size: 20px;font-weight: bold;" class="recipe-title">{{ recipe.title }}</b-card-header>
        <b-card-body class="recipe-overview" style="font-weight: bold;">
          <li v-if="recipe.readyInMinutes">Ready in {{ recipe.readyInMinutes }} minutes</li>
          <li v-if="recipe.popularity">{{ recipe.popularity }} likes</li>
          <li v-if="recipe.vegan">Vegan 🌿</li>
          <li v-if="recipe.vegetarian">Vegetarian 🥕</li>
          <li v-if="recipe.glutenFree">Gluten Free 🌾❌</li>
          <li v-if="recipe.owner">Owner: {{ recipe.owner }} </li>
          <li v-if="recipe.when">Occasion of making: {{ recipe.when }} </li>
        
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
      </b-card-body>
    </b-card>
  </div>
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
.form-box {
  display: block;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
