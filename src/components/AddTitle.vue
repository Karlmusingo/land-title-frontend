<template>
  <div>
    <b-button v-b-modal.modal-1 variant="danger">New Land</b-button>

    <b-modal
      id="modal-1"
      title="Create a new Land Title"
      title-class="d-flex align-center mx-auto"
      header-close-class="m-0 p-0"
      hide-footer
    >
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-title" label="Title name:" label-for="input-title">
            <b-form-input
              id="input-title"
              v-model="form.title"
              type="text"
              required
              placeholder="Title"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-location" label="Location:" label-for="input-location">
            <b-form-input
              id="input-location"
              v-model="form.location"
              required
              placeholder="Location"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-owner" label="Owner:" label-for="input-owner">
            <b-form-input
              id="input-owner"
              v-model="form.owner"
              required
              placeholder="Owner">
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-image" label="Image:" label-for="input-image">
            <b-form-file
              id="input-image"
              v-model="file"
              placeholder="Choose an image or drop it here..."
              drop-placeholder="Drop file here..."
              accept="image/*"
            ></b-form-file>
          </b-form-group>

          <b-form-group
            id="input-group-pendingMorgage"
            label="Pending Morgage ($):"
            label-for="input-pendingMorgage"
          >
            <b-form-input
              id="input-pendingMorgage"
              v-model="form.pendingMorgage"
              required
              type="number"
              placeholder="Pending Morgage"
            ></b-form-input>
          </b-form-group>

          <div class="row m-1 d-flex justify-content-end">
            <b-button type="reset" variant="danger" class="mr-3">Reset</b-button>
            <b-button type="submit" variant="primary">Submit</b-button>
          </div>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ['open'],
  data() {
    return {
      openModal: false,
      form: {
        title: '',
        location: '',
        file: null,
        owner: '',
        pendingMorgage: 0,
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values

      this.form.title = '';
      this.form.location = '';
      this.form.file = null;
      this.form.owner = '';
      this.form.pendingMorgage = 0;

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
