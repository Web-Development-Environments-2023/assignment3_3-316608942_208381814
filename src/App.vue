<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'main' }">Recipes </router-link>|
      <router-link :to="{ name: 'search' }">Search </router-link>|
      <router-link :to="{ name: 'about' }">About </router-link>|

      <!-- {{ !$root.store.username }} -->
      <span v-if="!$root.store.username">
        Hello Guest:
        <router-link :to="{ name: 'login' }">Login </router-link>|
        <router-link :to="{ name: 'register' }">Register </router-link>|

      </span>

      <span v-else>
        {{ $root.store.username }}: 
        <b-dropdown text="Personal" variant="primary">
          <template #button-content>
            Personal <i class="fas fa-caret-down"></i>
          </template>
          <b-dropdown-item :to="{ name: 'favorite' }">Favorites</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'PersonalRecipe' }">Personal Recipes</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'family' }">Family Recipes</b-dropdown-item>
        </b-dropdown>
      <button @click="Logout">Logout </button>|
      <div>
      <b-button @click="modalShow = !modalShow" >Create Recipe</b-button>
      <b-modal v-model="modalShow" hide-footer title="New Recipe"><CreateRecipe></CreateRecipe></b-modal>
     </div>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { BButton, BModal, BFormCheckbox } from 'bootstrap-vue';
import CreateRecipe from './components/CreateRecipe.vue';
export default {
  components: {
    BButton,
    BModal,
    BFormCheckbox,
    CreateRecipe
},
  name: "App",
  data() {
    return {

      modalShow: false,
    };
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
