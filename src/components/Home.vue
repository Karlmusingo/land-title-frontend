<script>
/* eslint-disable max-len */
</script>

<template>
  <div>
    <nav-bar username="Karl Musingo" />
    <div class="container mt-3">
      <div class="mx-auto pr-md-4 pl-md-4">
        <div class="row mx-auto w-md-100">
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 m-3"
            v-for="(land) in filteredTitles"
            :title="land.title"
            :key="land.id"
          >
            <b-card-text>{{land.address}}</b-card-text>
            <b-button
              block
              pill
              :to="`/land/${land.title}`"
              variant="outline-info"
              style="float: right"
            >View more info</b-button>
          </b-card>
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 m-3"
            v-for="(land) in filteredTitles"
            :title="land.title"
            :key="land.id"
          >
            <b-card-text>{{land.address}}</b-card-text>
            <b-button
              block
              pill
              :to="`/land/${land.title}`"
              variant="outline-info"
              style="float: right"
            >View more info</b-button>
          </b-card>
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 m-3"
            v-for="(land) in filteredTitles"
            :title="land.title"
            :key="land.id"
          >
            <b-card-text>{{land.address}}</b-card-text>
            <b-button
              block
              pill
              :to="`/land/${land.title}`"
              variant="outline-info"
              style="float: right"
            >View more info</b-button>
          </b-card>
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 m-3"
            v-for="(land) in filteredTitles"
            :title="land.title"
            :key="land.id"
          >
            <b-card-text>{{land.address}}</b-card-text>
            <b-button
              block
              pill
              :to="`/land/${land.title}`"
              variant="outline-info"
              style="float: right"
            >View more info</b-button>
          </b-card>
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 m-3"
            v-for="(land) in filteredTitles"
            :title="land.title"
            :key="land.id"
          >
            <b-card-text>{{land.address}}</b-card-text>
            <b-button
              block
              pill
              :to="`/land/${land.title}`"
              variant="outline-info"
              style="float: right"
            >View more info</b-button>
          </b-card>
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 m-3"
            v-for="(land) in filteredTitles"
            :title="land.title"
            :key="land.id"
          >
            <b-card-text>{{land.address}}</b-card-text>
            <b-button
              block
              pill
              :to="`/land/${land.title}`"
              variant="outline-info"
              style="float: right"
            >View more info</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable max-len */
import Navbar from "./Navbar";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    "nav-bar": Navbar
  },
  computed: {
    ...mapState(["titles", 'filteredTitles'])
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    this.$store.dispatch('getTitles');
    console.log(
      '%cDispatched Action',
      'color: white; background: green; font-weight: bold;',
    );
    console.time();
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
