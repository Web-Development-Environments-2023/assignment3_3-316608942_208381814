<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <div class="form-box">
    <p id="lastSearchP" v-if="lastSearch">
      🔎 Your Last Search Was:&nbsp;&nbsp;
      <b><i>{{ lastSearch }}</i></b>&nbsp;&nbsp;
    </p>

    <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
      <b-form-group id="input-group-query" label-cols-sm="3" label="What do you want to cook?:" label-for="query">
        <b-form-input
          id="query"
          v-model="$v.form.query.$model"
          type="text"
          :state="validateState('query')"
          placeholder="Enter your search query"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.query.length">
          Query must be non-empty!
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-cuisine" label-cols-sm="3" label="Cuisine:" label-for="cuisine">
        <b-form-select
          id="cuisine"
          v-model="$v.form.cuisine.$model"
          :options="cuisines"
          placeholder="Select a cuisine"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-diet" label-cols-sm="3" label="Diet:" label-for="diet">
        <b-form-select
          id="diet"
          v-model="$v.form.diet.$model"
          :options="diets"
          placeholder="Select a diet"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-intolerance" label-cols-sm="3" label="Intolerance:" label-for="intolerance">
        <b-form-select
          id="intolerance"
          v-model="$v.form.intolerance.$model"
          :options="intolerances"
          placeholder="Select an intolerance"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-resultsNum" label-cols-sm="3" label="Results Number:" label-for="resultsNum">
        <b-form-select
          id="resultsNum"
          v-model="form.resultsNum"
          :options="[5, 10, 15]"
          placeholder="Select the number of results"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-sort" label-cols-sm="3" label="Sort By:" label-for="sort">
        <b-form-select
          id="sort"
          v-model="form.sort"
          :options="sortOptions"
          placeholder="Select a sort option"
        ></b-form-select>
      </b-form-group>

      <div class="form-buttons">
        <b-button type="reset" variant="danger" style="color: indianred;border-color: indianred;background-color: burlywood;">Reset</b-button>
        <b-button type="submit" variant="primary" style="color: indianred;border-color: indianred;background-color: burlywood;width: 250px;" class="ml-5">Search</b-button>
      </div>
    </b-form>

    <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show>
      Search failed: {{ form.submitError }}
    </b-alert>

    <template v-if="searchClicked && recipes.length > 0">
      <RecipePreviewList
        title="Search Results"
        state="search"
        :recipesData="recipes"
        :key="searchClicked"
      />
    </template>
    <b-modal
      id="noResultsModal"
      title="No Recipes Found"
      v-if="searchClicked && recipes.length === 0"
    >
      There are no recipes that meet the search requirements. Please search again with different criteria.
    </b-modal>
  </div>
</div>
</template>

<script>
import { required, alpha } from "vuelidate/lib/validators";
import RecipePreviewList from "../components/RecipePreviewList";
import cuisines from "../assets/cuisines";
import diets from "../assets/diets";
import intolerances from "../assets/intolerances";
  export default {
    name: "search",
  components: { RecipePreviewList },
  data() {
    return {
      text: '',
      form: {
        query: "",
        cuisine: "",
        diet: "",
        intolerance: "",
        resultsNum: 5,
        sort: "",
        submitError: undefined,
      },
      cuisines: [{ value: null, text: "", disabled: true }],
      diets: [{ value: null, text: "", disabled: true }],
      intolerances: [{ value: null, text: "", disabled: true }],
      // amountOptions: [
      //   // options
      //   { text: "5", value: 5 },
      //   { text: "10", value: 10 },
      //   { text: "15", value: 15 },
      // ],
      sortOptions: [
        { value: "", text: "Sort By", disabled: true },
        { value: "time", text: "Time" },
        { value: "popularity", text: "Popularity" },
      ],
      lastSearch: "",
      errors: [],
      validated: false,
      searchClicked: 0,
      recipes: [],
    };
  },
  mounted() {
    this.cuisines.push(...cuisines);
    this.diets.push(...diets);
    this.intolerances.push(...intolerances);

    this.lastSearch = localStorage.getItem("lastSearch");
  },
  validations: {
    form: {
      query: {
        required,
      },
      cuisine: {
        alpha,
      },
      diet: {
        alpha,
      },
      intolerance: {
        alpha,
      },
    },
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Search() {
      try {
        const paramsList = {};
        const allParams = [
          "query",
          "cuisine",
          "diet",
          "intolerance",
          "number",
          "sort",
        ];
        allParams.forEach((param) => {
          if (this.form[param]) {
            paramsList[param] = this.form[param];
          }
        });
        let response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/user/Register",
          this.$root.store.server_domain + "/recipes/searchRecipe",
          {
            params: paramsList,
          },
          {withCredentials:true}
        );
        this.recipes.push(...response.data);
        this.searchClicked += 1;
        if (response.data.length == 0) {
          this.$bvModal.show("noResultsModal");
        }
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onSearch() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.recipes = [];
      localStorage.setItem("lastSearch", this.form["query"]);
      this.lastSearch = this.form["query"];
      this.Search();
    },
    onReset() {
      this.form = {
        query: "",
        cuisine: "",
        diet: "",
        intolerance: "",
        number: 5,
        sort: "",
        submitError: undefined,
      };
      this.errors = [];
      this.validated = false;
      this.searchClicked = 0;
      this.recipes = [];

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 70%;
}
.title {
  margin-top: 2rem;
}
body {
  background-image: url('../assets/search.png');
  background-repeat: no-repeat;
  background-size: cover;
}



#lastSearchP {
  border-style: solid;
  border-width: medium;
  border-radius: 20px;
  background-color: #720026;
  max-width: 500px;
}
.form-box {
  // border: 6px solid #ccc;
  border-radius: 20px;
  width: 100%;
  align-items: center;
  justify-content: center; 
  text-align: center;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.5);}
.form-buttons {
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center;
  margin-top: 1rem;
}
</style>

