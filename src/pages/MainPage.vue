<template>
  <div id="main-container">
    <div class="row vertical-align" style="flex-wrap:nowrap;">
      <div class="col-xs-6 col-md-6">
        <RecipePreviewList
          title="Explore This Recipes"
          state="random"
          style = "color: white;"
        />
        <b-button
              type="submit"
              variant="primary"
              size="sm"
              style="color: indianred;border-color: indianred;background-color: burlywood;"
              class="small-button"
              @click="onMore"
            >
              More
            </b-button>
      </div>

      <div class="col-xs-6 col-md-6">
        <Login v-if="!$root.store.username" />
        <RecipePreviewList
          v-else
          title="Last Viewed Recipes"
          style = "color: white;"
          state="lastWatched"

        ></RecipePreviewList>
      </div>
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
body {
  background-image: url('../assets/main.jpg');
  background-repeat: no-repeat;
  background-size: cover;}
</style>

