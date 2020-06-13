<script>
/* eslint-disable max-len */
</script>

<template>
  <div>
    <nav-bar username="Karl Musingo" />
    <div class="container mt-3 pl-5 pr-5">
      <div class="mx-auto error" v-show="!singleTitle.data.loading && !!singleTitle.data.error">
        <span>{{singleTitle.data.error && singleTitle.data.error.message}}</span>
      </div>

      <div class="mx-auto" v-show="singleTitle.data.loading">
        <div class="text-center">
          <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
      </div>

      <div class="mx-auto pl-5 pr-5" v-show="!singleTitle.data.loading && !singleTitle.data.error">
        <b-img
          class="mb-3"
          src="https://picsum.photos/300/150/?image=41"
          fluid-grow
          alt="Fluid-grow image"
        ></b-img>
        <div class="row m-1 d-flex justify-content-between">
          <h3 class>{{singleTitle.data.title[0].title}}</h3>
          <!-- <h3 class>Single Land Title</h3> -->
          <div class="d-flex align-items-center">
            <b-icon icon="map" font-scale="2.4" class="rounded p-2" variant="info"></b-icon>
            <div>
              <em>{{singleTitle.data.title[0].address}}</em>
              <em>{{singleTitle.data.title[0].mortgage}}</em>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>Owner:</span>
            <span>Karl Musingo</span>
          </div>
          <div>
            <span>Square Meter:</span>
            <span>{{singleTitle.data.title[0].squareMeter}}</span>
          </div>
          <div>
            <span>Morgage:</span>
            <span>{{singleTitle.data.title[0].mortgage}}</span>
          </div>
          <div>
            <div style="font-size: 2rem; font-weight: bold; text-align: center;">Transaction List</div>
            <div>
              <!-- <b-icon icon="arrow-down-circle" font-scale="2.4" class="rounded p-2" variant="info"></b-icon> -->
              <b-table striped hover :items="items"></b-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable max-len */
import Navbar from "./Navbar";
import { mapState } from "vuex";
import store from "../store";

export default {
  name: "SingleLand",
  components: {
    "nav-bar": Navbar
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      items: [
        {
          "#": 1,
          cost: "12M",
          date: "12-12-12",
          contract: "contract.pdf",
          status: "done"
        },
        {
          "#": 2,
          cost: "12M",
          date: "12-12-12",
          contract: "",
          status: "pending"
        },
        {
          "#": 3,
          cost: "12M",
          date: "12-12-12",
          contract: "contract.pdf",
          status: "done"
        },
        {
          "#": 4,
          cost: "12M",
          date: "12-12-12",
          contract: "contract.pdf",
          status: "done"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      singleTitle: state => state.singleTitle
    })
  },
  created() {
    this.property = "Example property update.";
    store.dispatch("getSingleTitle", { title: this.$route.params.slug });

    console.log("$route.params.slug", this.$route.params.slug);
  }
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

.error {
  font-size: 2rem;
  margin: auto;
  display: flex;
  justify-content: center;
  color: red;
}
</style>
