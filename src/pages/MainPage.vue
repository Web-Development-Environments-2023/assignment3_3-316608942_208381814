<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <b-form @submit.prevent="onMore"></b-form>
    <RecipePreviewList title="Random Recipes" class="RandomRecipes center" />
    <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
    <!-- {{ !$root.store.username }} -->
    <b-button
        type="submit"
        variant="primary"
        style="width:50px;display:block;"
        class="mx-auto w-100"
        >More</b-button
      >
    <RecipePreviewList
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></RecipePreviewList>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  },
  methods: {
    async moreRandom(){
      try{
        const response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/user/Login",
          this.$root.store.server_domain +"/recipes/random",
          //"http://localhost:3000/Login",
          // "http://132.72.65.211:80/Login",
          // "http://132.73.84.100:80/Login",

        );
        console.log(this.$root.store.login);
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      }catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onMore() {
      // console.log("login method called");
      
      this.form.submitError = undefined;
      // console.log("login method go");

      this.moreRandom();
    }

  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
