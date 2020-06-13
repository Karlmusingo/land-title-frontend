<script>
/* eslint-disable max-len */
// style="margin-top: 100px;"
</script>

<template>
  <div class="login-container">
    <!-- <div class="container"> -->
    <div class="content-container container row" style="padding-top: 150px; margin: auto;">
      <div class="app-name col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <h3>Land Title Transfer</h3>
        <h3>{{login.data.loading}}</h3>
      </div>
      <div class="form-container col-lg-4 col-md-4 col-sm-6 col-xs-12" style>
        <b-form method="POST" @submit="onSubmit">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title center">Login</h3>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <!-- <label>Email:</label> -->
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  name="Enter the email"
                  placeholder="Email"
                />
              </div>

              <div class="form-group">
                <!-- <label>Password:</label> -->
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Enter the password"
                />
              </div>
            </div>
            <div class="panel-footer">
              <div class="row" style="margin-left: 0;">
                <b-overlay
                  :show="login.data.loading"
                  rounded
                  opacity="0.6"
                  spinner-small
                  spinner-variant="primary"
                  class="d-inline-block col-md-4"
                >
                  <b-button
                    ref="button"
                    :disabled="login.data.loading"
                    variant="primary"
                    class="btn btn-primary col-md-12"
                    @click="onSubmit"
                  >Login</b-button>
                </b-overlay>
              </div>
            </div>
          </div>
        </b-form>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable max-len */
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState({
      login: state => state.login
    })
    // loginResponse: login.data,
  },
  methods: {
    ...mapActions({
      signin: "login/login"
    }),
    onSubmit(evt) {
      evt.preventDefault();
      this.$store
        .dispatch("login", {
          email: this.form.email,
          password: this.form.password
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        });
      // this.signin(this.form);
    }
  },
  created() {
    this.property = "Example property update.";
    console.log($route.params.slug);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  background-image: url("../assets/landing-picture.png");

  margin: 0 !important;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0px 0px;
  width: 100vw;
  height: 100vh;
}
h1,
h2 {
  font-weight: normal;
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

.form-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-name {
  color: white;
  /* margin: auto; */
}
.app-name > h3 {
  font-size: 3rem;
}
</style>
