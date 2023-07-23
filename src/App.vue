<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="light" class="custom-navbar">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="custom-navbar-collapse">
        <b-navbar-nav>
          <b-nav-item active>
            <router-link :to="{ name: 'main' }" class="nav-link">Recipes</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'search' }" class="nav-link">Search</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
          </b-nav-item>
          <b-nav-item-dropdown v-if="$root.store.username" style="margin-top: 8px;" text="Personal" right>
            <template #button-content>
              Personal <i class="fas fa-caret-down"></i>
            </template>
            <b-dropdown-item :to="{ name: 'favorite' }">Favorites</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'PersonalRecipe' }">Personal Recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'family' }">Family Recipes</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <span v-if="!$root.store.username">Hello Guest
            <b-nav-item>
              <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
            </b-nav-item>
          </span>
          <span v-else>
            <b-nav-item @click="Logout">
              {{ $root.store.username }}: Logout
            </b-nav-item>
            <b-nav-item>
              <b-button @click="modalShow = !modalShow" style="color: indianred;border-color: indianred;" variant="outline-primary">Create Recipe</b-button>
              <b-modal v-model="modalShow" hide-footer title="New Recipe">
                <CreateRecipe></CreateRecipe>
              </b-modal>
            </b-nav-item>
          </span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import { BNavbar, BNavbarToggle, BNavbarNav, BCollapse, BNavItem, BNavItemDropdown, BDropdownItem, BButton, BModal } from 'bootstrap-vue';
import CreateRecipe from './components/CreateRecipe.vue';
export default {
  components: {
    BNavbar,
    BNavbarToggle,
    BNavbarNav,
    BCollapse,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
    BButton,
    BModal,
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
  
  color: #245953;
  min-height: 100vh;
  font-weight: bold;
}
body {
  background-image: url('../src/assets/main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Papyrus;
  font-weight: bold;
  font-size:25px;
  font-weight: 400;
}

.custom-navbar{
  background-image: url('../src/assets/nav.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;


}

.custom-navbar-collapse {
  max-width: 700px; /* Adjust the width as needed */
  margin: 0 auto; /* Center the navbar */
}
</style>
