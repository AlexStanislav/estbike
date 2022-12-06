<template>
  <div id="brand-container">
    <div
      class="home-brand"
      v-for="(brand, index) in brands"
      :key="index"
      :id="`${brand.name}-home-brand`"
      :data-brand="brand.name"
      @click="selectBrand"
    >
      <div
        class="brand-background"
        :style="{
          backgroundImage: `url(${require(`@/assets/img/${brand.name}/${brand.img}`)})`,
        }"
      ></div>
      <div class="brand-gradient"></div>
      <div class="brand-logo">
        <img :src="require(`@/assets/img/${brand.logo}`)" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      brands: [
        { name: "yamaha", logo: "yamaha-moto.svg", img: "Yamaha-R6.jpg" },
        {
          name: "suzuki",
          logo: "suzukimoto.svg",
          img: "Suzuki-GSX-R125-M3-action.jpg",
        },
        {
          name: "honda",
          logo: "HondaMoto.svg",
          img: "22YM_AFRICA_TWIN_L1_LOCATION_9901-scaled.jpg",
        },
      ],
    };
  },
  mounted() {
    let activeBrand = document.getElementById(`${this.$store.state.activeBrand}-home-brand`)
    activeBrand.classList.add("active-brand")
  },
  methods: {
    selectBrand(event) {
      let brands = document.getElementsByClassName("home-brand");
      for (const brand of brands) {
        brand.classList.remove("active-brand");
      }
      if(event.srcElement.nodeName !== "IMG"){
          event.srcElement.parentElement.classList.add("active-brand");
          this.$store.commit("selectBrand", event.srcElement.parentElement.getAttribute("data-brand"))
          window.EventBus.dispatch("brand-selected")
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

#brand-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.home-brand {
  width: 25rem;
  height: 12rem;
  margin: 0 2rem;
  cursor: pointer;
  border-bottom: 4px solid transparent;
  transition: all 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border: 1px solid $main;
}

.brand-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #fff, transparent);
}

.brand-background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.7;
}

.brand-logo {
  width: 40%;
  height: fit-content;
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 40%;
  left: -10%;
  transform: rotate(-90deg);
  img {
    width: 100%;
    height: auto;
  }
}

.home-brand:hover, .active-brand {
  width: 26rem;
  height: 13rem;
  margin-top: -0.5rem;
  box-shadow: 0px 0px 5px 1px $dark-shade;
  border: 1px solid;
}
</style>