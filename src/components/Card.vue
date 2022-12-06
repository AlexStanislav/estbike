<template>
  <div class="model-card-container" @click="showInfo(data)">
    <div class="model-card-img">
      <div class="model-card-gradient"></div>
      <div class="model-card-img-text">Află mai multe</div>
      <img
        :src="require(`@/assets/img/${data.brand}/${data.thumbnail}`)"
        alt=""
      />
    </div>
    <div class="model-card-info">
      <div class="model-card-name">
        {{ data.name }}
      </div>
      <div class="model-card-price">
        <span class="model-card-price-wrapper"
          >{{ parseInt(data.price, 10).toLocaleString("ro-RO") }} &euro;</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    showInfo(data) {
      this.$store.commit("selectModel", data);
      this.$router.push("/model");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    openInfo() {
      let self = this;
      window.EventBus.dispatch("showmodal", {
        isVisible: true,
        moto: self.data,
      });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

.model-card-container {
  margin: 1rem;
  width: fit-content;
  border: 1px solid $dark-shade;
}

.model-card-img {
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $dark-shade;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
}

.model-card-gradient {
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, $dark-shade, transparent);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.model-card-img-text {
  width: 100%;
  position: absolute;
  text-align: center;
  color: $main;
  font-size: 1.2em;
  bottom: -2rem;
  transition: all 0.3s ease-in-out;
}

.model-card-info {
  display: flex;
  flex-flow: column wrap;
  padding: 2rem;
  box-sizing: border-box;
  background: $dark;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.model-card-name,
.model-card-price {
  text-align: center;
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
}

.model-card-name {
  color: white;
}

.model-card-price-wrapper {
  color: white;
  transition: all 0.3s ease-in-out;
}

.model-card-container:hover {
  border: 1px solid $main;
}
.model-card-container:hover .model-card-info {
  background: $main;
}
.model-card-container:hover .model-card-info .model-card-name {
  color: white;
}
.model-card-container:hover .model-card-info .model-card-price-wrapper {
  color: white;
}

// .model-card-container:hover .model-card-gradient{
//     opacity: 0.8;
// }

.model-card-container:hover .model-card-img-text {
  bottom: 1rem;
}
</style>