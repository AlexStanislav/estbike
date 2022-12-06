<template>
  <div>
    <Hooper :settings="hooperSettings" :autoPlay="true" :playSpeed="3000">
      <Slide
        v-for="(slide, idx) in slides"
        :key="idx"
        :index="idx"
        v-model="index"
      >
        <div
          class="slide-img"
          :style="{
            backgroundImage: `url(${require(`@/assets/img/${slide.brand}/${slide.img}`)})`,
          }"
          @click="showModel(slide)"
        ></div>
        <div class="slide-desc-container">
          <div class="slide-desc">{{ slide.info.name }}</div>
          <div class="slide-tagline">{{slide.info.tagline}}</div>
        </div>
      </Slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </Hooper>
  </div>
</template>
<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      slides: [
        {
          img: "honda-africa-twin.jpg",
          brand: "honda",
          info: {
            name: "Honda Africa Twin",
            tagline: "Proiectată pentru a depăși limitele.",
          },
        },
        {
          img: "Yamaha-R6.jpg",
          brand: "yamaha",
          info: {
            name: "Yamaha R6 Race",
            tagline: "Dezvoltată fără compromisuri.",
          },
        },
        {
          img: "honda-nc750x.jpg",
          brand: "honda",
          info: {
            name: "Honda NC 750 X",
            tagline: "Pregătit pentru orice aventură.",
          },
        },
      ],
      index: 0,
      hooperSettings: {
        itemsToShow: 1,
        wheelControl: false,
      },
    };
  },
  mounted() {
    console.log(this.$children[0]._data);
  },
  methods: {
    showModel(data){
      let name = data.info.name.toLowerCase().replace(data.brand, "").replace(" ", "")
      let arrayToSearch = [...this.$store.state.moto]
      let modelToShow = null
      for (const moto of arrayToSearch) {
        let motoName = moto.name.toLowerCase()
        if(motoName === name){
          modelToShow = moto
        }
      }

      if(modelToShow !== null){
        this.$store.commit("selectModel", modelToShow)
        this.$router.push("/model")
      }
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.hooper {
  height: 100vh;
  background: $dark-shade;
  position: relative;
}

.hooper-track li{
  cursor: pointer;
}

.slide-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: top;
  cursor: pointer;
}

.slide-desc-container {
  width: 100%;
  position: absolute;
  bottom: 8rem;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  z-index: 12;
  pointer-events: none;
}

.slide-desc {
  width: fit-content;
  text-align: center;
  font-size: 7.5rem;
  color: $light-shade;
  text-transform: uppercase;
  text-shadow: 5px 5px 3px #000;
  border-bottom: 5px solid $main;
  padding: 0 3rem;
}

.slide-tagline{
  text-shadow: 3px 3px 3px #000;
  font-size: 3rem;
  color: $light-shade;
  margin-top: 1rem;
}

.hooper-indicator {
  width: 30px;
  height: 20px;
  border: 1px solid $dark-shade;
}

.hooper-pagination {
  background: $dark-shade;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  z-index: 2;
}

.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: $main;
}
</style>