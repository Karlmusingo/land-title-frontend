<template>
  <div>
    <b-modal
      id="modal-2"
      title="Transfer The Land Title"
      title-class="d-flex align-center mx-auto"
      header-close-class="m-0 p-0"
      hide-footer
    >
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-title" label="New owner:" label-for="input-title">
            <b-form-input
              id="input-title"
              v-model="form.newOwner"
              type="text"
              required
              placeholder="New owner"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-cost" label="Cost ($):" label-for="input-cost">
            <b-form-input
              id="input-cost"
              v-model="form.cost"
              required
              type="number"
              placeholder="Cost"
            ></b-form-input>
          </b-form-group>

          <!-- <b-form-group id="input-group-owner" label="Owner:" label-for="input-owner">
            <b-form-input id="input-owner" v-model="form.owner" required placeholder="Owner" />
          </b-form-group>-->

          <b-form-group id="input-group-image" label="Upload contract:" label-for="input-image">
            <b-form-file
              id="input-image"
              v-model="file"
              placeholder="Choose an image or drop it here..."
              drop-placeholder="Drop file here..."
              accept="image/jpeg, image/png, application/pdf"
            ></b-form-file>
          </b-form-group>

          <!-- <b-form-group
            id="input-group-mortgage"
            label="Pending Morgage ($):"
            label-for="input-mortgage"
          >
            <b-form-input
              id="input-mortgage"
              v-model="form.mortgage"
              required
              type="number"
              placeholder="Pending Morgage"
            ></b-form-input>
          </b-form-group>-->

          <div class="row m-1 d-flex justify-content-end">
            <b-button type="reset" variant="danger" class="mr-3 col-md-4">Reset</b-button>
            <b-overlay
              :show="addTitle.data.loading"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="primary"
              class="d-inline-block col-md-4"
            >
              <b-button
                ref="button"
                type="submit"
                :disabled="addTitle.data.loading"
                variant="primary"
                class="btn btn-primary col-md-12"
                @click="onSubmit"
              >Submit</b-button>
            </b-overlay>
          </div>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: ['open'],
  data() {
    return {
      openModal: false,
      form: {
        newOwner: '',
        cost: '',
        file: null,
      },
      show: true,
      error: '',
    };
  },
  computed: {
    ...mapState({
      addTitle: state => state.addTitle,
    }),
    // loginResponse: login.data,
  },
  methods: {
    ...mapActions({
      createTitle: 'addTitle/createTitle',
    }),
    validateForm() {
      const { newOwner, cost } = this.form;
      const hasError = !!(newOwner || cost);
      this.error = 'fill all the field';
      return hasError;
    },
    onSubmit(evt) {
      evt.preventDefault();

      if (this.validateForm()) {
        // const { newOwner, cost } = this.form;
        // this.$store
        //   .dispatch('createTitle', {
        //     cost,
        //     newOwner,
        //   })
        //   .then(() => {
        //     this.$router.push({ name: 'Home' });
        //   });
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values

      this.form.newOwner = '';
      this.form.coast = '';
      this.form.file = null;

      // Trick to reset/clear native browser form validation state
      this.show = false;
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
.close {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
