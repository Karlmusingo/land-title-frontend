<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Land Title Transfer</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items class="mr-sm-2" -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <div class="input-group">
              <b-form-input placeholder="Search" @keyup="filter"></b-form-input>
              <div class="input-group-append">
                <b-button class="my-2 my-sm-0" variant="secondary" type="submit">
                  <b-icon icon="search"></b-icon>
                </b-button>
              </div>
            </div>
          </b-nav-form>
          <add-title />

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{user.firstName}} {{user.lastName}}</em>
            </template>
            <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AddTitle from './AddTitle';
import store from '../store';

export default {
  name: 'NavBar',
  components: {
    'add-title': AddTitle,
  },
  props: ['username'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions({
      filter: 'filter',
    }),
    filter: (text) => {
      store.dispatch('filter', {
        text: text.target.value,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
