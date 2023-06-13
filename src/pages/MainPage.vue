<template>
  <div id="main-container">
    <!-- <h1 id="main-title" class="title">Welcome To The Main Page!</h1> -->
    <div class="row vertical-align" style="flex-wrap:nowrap;">
      <div class="col-xs-6 col-md-6">
        <RecipePreviewList
          title="Explore This Recipes"
          class="RandomRecipes center"
          state="random"
        />
        <b-button
              type="submit"
              variant="primary"
              size="sm"
              class="small-button"
              @click="onMore"
            >
              More
            </b-button>
        <!-- <router-link v-if="!$root.store.username" to="/login" tag="button"
      >You need to Login first!</router-link
    > -->
      </div>

      <div class="col-xs-6 col-md-6">
        <Login v-if="!$root.store.username" />

        <!-- {{ !$root.store.username }} -->
        <RecipePreviewList
          v-else
          title="Last Viewed Recipes"
          state="lastWatched"
          :class="{
            RandomRecipes: true,
            center: true,
          }"
        ></RecipePreviewList>
      </div>
      <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import Login from "../components/Login";
export default {
  components: {
    RecipePreviewList,
    Login,
  },
  data() {
  return {
    form: {
      username: '',
      submitError: undefined
    }
  };
  },
  methods: {
    async moreRandom(){
      try{
        this.$router.go(0);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onMore() {
      this.form.submitError = undefined;
      this.moreRandom();
      }
    }

  
};
</script>

<style lang="scss" scoped>
.small-button {
  width: 100px;
  display: block;
  margin: 0 auto;
}
.RandomRecipes {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
