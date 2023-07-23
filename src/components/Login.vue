<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <form @submit.prevent="onLogin" class="form-box">
      <div class="form-group">
        <label for="Username">Username:</label>
        <input
          id="Username"
          type="text"
          v-model.trim="$v.form.username.$model"
          :class="['form-control', validateState('username')]"
        />
        <div class="invalid-feedback">Username is required</div>
      </div>

      <div class="form-group">
        <label for="Password">Password:</label>
        <input
          id="Password"
          type="password"
          v-model.trim="$v.form.password.$model"
          :class="['form-control', validateState('password')]"
        />
        <div class="invalid-feedback">Password is required</div>
      </div>

      <button type="submit" class="btn btn-primary" style="font-size: 20px; padding: 10px 20px; background-color: #0fa3b1;">Login</button>

      <div class="mt-2">
        Do not have an account yet?
        <router-link to="register" style="color: #0fa3b1;">Register here</router-link>
      </div>
    </form>

    <div class="mt-2">
      <b-alert
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Login failed: {{ form.submitError }}
      </b-alert>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined,
      },
    };
  },
  validations: {
    form: {
      username: { required },
      password: { required },
    },
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? ($error ? "is-invalid" : "is-valid") : "";
    },
    async login() {
      try {
        const response = await this.axios.post(this.$root.store.server_domain + "/Login", {
          username: this.form.username,
          password: this.form.password,
        });
        console.log(response);
        this.$root.store.login(this.form.username);
        if (this.$route.name !== "main") {
          this.$router.push("/");
        }
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      this.form.submitError = undefined;
      this.$v.$touch();
      if (this.$v.$anyError) {
        return;
      }
      this.login();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 400px;
}

.form-box {
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  
  background-color: rgba(255, 255, 255, 0.5);}

.form-group {
  margin-bottom: 15px;
  color: #0fa3b1;
}

.form-control {
  border: none;
  border-radius: 7px;
  border-bottom: 1px solid #ccc;
}

.form-control:focus {
  box-shadow: none;
  border-color: #ccc;
}

.invalid-feedback {
  color: red;
  font-size: 12px;
}
</style>




