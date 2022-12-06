<template>
  <div id="dev">
    
    <!-- <div id="container">
      <div class="dev-element" v-for="(moto, index) in lists" :key="index">
        {{ moto.name }}
      </div>
    </div>
    <b-pagination
      :total-rows="totalRows"
      :per-page="perPage"
      v-model="currentPage"
    /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      elements: this.$store.state.moto,
      perPage: 8,
      currentPage: 1,
    };
  },
  computed: {
    lists() {
      const items = this.elements;
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.elements.length;
    },
  },
};
</script>
<style lang="scss">
#dev {
  margin-top: 80px;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.dev-element {
  width: 100px;
  height: 100px;
  text-align: center;
  color: red;
}

</style>