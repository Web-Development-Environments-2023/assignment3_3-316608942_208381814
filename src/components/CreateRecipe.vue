<template>
    <div>
      <b-modal id="modal-lg" size="lg" title="Create New Recipe" hide-footer>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="Title:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.title"
              placeholder="Enter the recipe title"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group
            id="input-group-2"
            label="Preperation time:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.preperationTime"
              placeholder="Enter the preperation time in minutes"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group
            id="input-group-3"
            label="Popularity:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="form.popularity"
              placeholder="Enter the total likes for this recipe"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group id="input-group-4" label="Image:" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.image"
              placeholder="Enter link to your recipe image"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-5"
            label="Instructions:"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              v-model="form.instructions"
              placeholder="Enter instructions for the recipe"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group
            id="input-group-6"
            label="For how many people this recipe served?"
            label-for="input-6"
          >
            <b-form-input
              id="input-6"
              v-model="form.servings"
              placeholder="Enter number of servings"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group 
          id="input-group-vegan" 
          label-cols-sm="3" 
          label="Vegan:" 
          label-for="vegan"
          >
            <b-form-select
             id="vegan"
              v-model="form.vegan" 
              :options="[false, true]" 
              >
            </b-form-select>
          </b-form-group>

          <b-form-group 
          id="input-group-vegetarian" 
          label-cols-sm="3" 
          label="Vegetarian:" 
          label-for="vegetarian"
          >
            <b-form-select
             id="vegetarian"
              v-model="form.vegetarian" 
              :options="[false, true]" 
              >
            </b-form-select>
          </b-form-group>

         <b-form-group 
          id="input-group-glutenFree" 
          label-cols-sm="3" 
          label="Gluten Free:" 
          label-for="glutenFree"
          >
            <b-form-select
             id="glutenFree"
              v-model="form.glutenFree" 
              :options="[false, true]" 
              >
            </b-form-select>
          </b-form-group>

          <IngredientEdit :data="form.ingredients" />
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-modal>
    </div>
  </template>

  <script>
  
  import IngredientEdit from "./IngredientEdit";
  export default {
    data() {
      return {
        form: {
          title: "",
          preperationTime: "",
          popularity: "",
          instructions: "",
          servings: "",
          checked: [],
          ingredients: [],
          vegan: false,
          vegetarian: false,
          glutenFree: false,
        },
        show: true
      };
    },
    components: { IngredientEdit },
    methods: {
      async onSubmit(event) {
        event.preventDefault();
        try {
          if(isNaN(parseInt(this.form.popularity)) || parseInt(this.form.popularity) < 0){
              alert("Popularity must be positive number");
              return;
            }
          if(isNaN(parseInt(this.form.servings)) || parseInt(this.form.servings) < 0){
            alert("Servings must be positive number");
            return;
          }
          if(isNaN(parseInt(this.form.preperationTime)) || parseInt(this.form.preperationTime) < 0){
            alert("Preperation time must be positive number");
            return;
          }
          
          let response = await this.axios.post(
            this.$root.store.server_domain + "/recipes/createRecipe",
            {
              title: this.form.title,
              readyInMinutes: this.form.preperationTime,
              image: this.form.image,
              popularity: this.form.popularity,
              vegan: this.form.vegan,
              vegetarian: this.form.vegetarian,
              glutenFree: this.form.glutenFree,
              ingredients: this.form.ingredients,
              servings: Number(this.form.servings),
              instructions: this.form.instructions,
            },
            { withCredentials: true,}

          );
          alert("thanks for adding new recipe to the website!");
        } catch (e) {
          console.log(e);
        }
      },
      onReset(event) {
        event.preventDefault(); // Reset our form values
        this.form.title = "";
        this.form.preperationTime = "";
        this.form.popularity = "";
        this.form.instructions = "";
        this.form.servings = "";
        this.form.checked = [];
        this.form.ingredients = [];
        this.form.checked.vegan=false;
        this.form.vegetarian=false;
        this.form.glutenFree=false;

      },
    },
  };
  </script>