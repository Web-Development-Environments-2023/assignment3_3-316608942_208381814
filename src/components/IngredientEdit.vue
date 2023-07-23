<template>
  <div>
    <div class="w-full mt-4 p-10">
      <b-button variant="outline-primary" @click="addMore()">Add ingredient</b-button>

      <div v-for="(ing, index) in data" :key="index">
        <div class="flex justify-start ml-2 mt-4">
          <input
            v-model="ing.name"
            placeholder="enter ingredient name"
            class="w-full py-2 border border-indigo-500 rounded"
          />

          <input
            v-model="ing.amount"
            placeholder="enter ingredient amount"
            class="w-full py-2 border border-indigo-500 rounded"
          />

          <b-form-select
            v-model="ing.unit"
            :options="unitOptions"
            size="sm"
            class="mt-3"
          ></b-form-select>

          <b-button variant="danger" @click="remove(index)" v-show="index != 0">Remove</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientEdit",
  props: {
    data: Array,
  },
  data() {
    return {
      unitOptions: [
        { value: "", text: "Units", disabled: true },
        { value: "piece", text: "piece" },
        { value: "gr", text: "gr" },
        { value: "kg", text: "kg" },
        { value: "liters", text: "liters" },
        { value: "oz", text: "oz" },
      ],
    };
  },
  methods: {
    addMore() {
      this.data.push({
        name: "",
        unit: "",
        amount: "",
      });
    },
    remove(index) {
      this.data.splice(index, 1);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>