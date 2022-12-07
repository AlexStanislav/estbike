<template>
  <div id="bike-model">
    <div id="bike-title">
      {{ bikeTitle }}
    </div>
    <div id="bike-info">
      <div id="bike-image-container">
        <div class="bike-image-gradient"></div>
        <div
          id="bike-image"
          :style="{
            backgroundImage: `url(${require(`@/assets/img/${currentModel.brand}/${currentModel.img[0]}`)})`,
          }"
        ></div>
        <div class="bike-image-background"></div>
        <div id="bike-details-container">
          <p>{{ currentModel.description }}</p>
        </div>
        <div id="bike-tech-container">
          <div class="bike-technical-container">
            <div
              class="bike-icon"
              :style="{
                backgroundImage: `url(${require(`@/assets/img/engine-motor-svgrepo-com.svg`)})`,
              }"
            ></div>
            <div
              class="bike-icon"
              :style="{
                backgroundImage: `url(${require(`@/assets/img/seat-height.svg`)})`,
              }"
            ></div>
            <div
              class="bike-icon"
              :style="{
                backgroundImage: `url(${require(`@/assets/img/fuel-counter-svgrepo-com.svg`)})`,
              }"
            ></div>
            <div
              class="bike-icon"
              :style="{
                backgroundImage: `url(${require(`@/assets/img/fuel-svgrepo-com.svg`)})`,
              }"
            ></div>
          </div>
          <div class="bike-technical-container">
            <div class="bike-detail bike-data">
              <number ref="power" :from="0" :to="powerNumber" /> CP
            </div>
            <div class="bike-detail bike-data">
              <number ref="heightOne" :from="0" :to="heightNumberOne" />
              <span v-if="hasSecondHeight"
                >/ <number ref="heightTwo" :from="0" :to="heightNumberTwo"
              /></span>
              MM
            </div>
            <div class="bike-detail bike-data">
              <number
                :format="theFormat"
                ref="consumptiopn"
                :from="0"
                :to="consumptionNumber"
              />
              L /100KM
            </div>
            <div class="bike-detail bike-data">
              <number
                :format="theFormat"
                ref="volume"
                :from="0"
                :to="volumeNumber"
              />
              L
            </div>
          </div>
          <div class="bike-technical-container">
            <div class="bike-detail bike-label">
              {{ currentModel.technical[0].detail }}
            </div>
            <div class="bike-detail bike-label">
              {{ currentModel.technical[1].detail }}
            </div>
            <div class="bike-detail bike-label">
              {{ currentModel.technical[2].detail }}
            </div>
            <div class="bike-detail bike-label">
              {{ currentModel.technical[3].detail }}
            </div>
          </div>
        </div>
      </div>
      <div id="main-image-container">
        <div id="main-image-background">
          <div id="main-image-bg"></div>
        </div>
        <div
          class="main-image"
          :style="{
            backgroundImage: `url(${require(`@/assets/img/${currentModel.brand}/${currentModel.mainImage}`)})`,
          }"
        ></div>
        <!-- <img :src="require(`@/assets/img/${currentModel.brand}/${currentModel.mainImage}`)" alt=""/> -->
      </div>
    </div>
    <p id="bike-price"> <span>Preț de vanzare cu TVA</span><number id="bike-price-value" :from="0" :to="priceNumber" :format="priceFormat"></number><span>&euro;</span></p>
    <div id="gallery-container">
      <h2 class="title">Gallerie</h2>
      <div id="gallery-wrapper">
        <div
          class="gallery-img"
          v-for="(img, index) of galleryImages"
          :key="index"
          @click="showImage(index)"
        >
          <div class="gallery-overlay">
            <div class="gallery-overlay-text">Deschide</div>
          </div>
          <img :src="img" />
        </div>
      </div>
      <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="galleryImages"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
    <h2 class="title">Din aceasi categorie</h2>
    <div id="similar-models-container">
      <card
        v-for="(model, index) of similarModels"
        :key="index"
        :data="model"
      ></card>
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: { VueEasyLightbox, Card },
  data() {
    return {
      visible: false,
      index: 0,
      slide: 0,
      sliding: null,
      powerNumber: 0,
      heightNumberOne: 0,
      heightNumberTwo: 0,
      consumptionNumber: 0,
      volumeNumber: 0,
      priceNumber: 0,
      hasSecondHeight: false,
    };
  },
  mounted() {
    let self = this
    if(!this.currentModel.name){
      this.$router.push("/models");
    }
    
    window.EventBus.listen("reloadmodel", function(){
      setTimeout(() => {
        self.getTechNumbers()
      }, 300);
    })
    setTimeout(() => {
      self.getTechNumbers();
    }, 1500);
    window.EventBus.dispatch('sectionnothome')
  },
  methods: {
    showImage(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    caiptalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    theFormat(number) {
      return number.toFixed(1);
    },
    priceFormat(number){
      return (parseInt(number, 10)).toLocaleString('ro-RO')
    },
    getTechNumbers() {
      let techData = [];
      for (const model of this.currentModel.technical) {
        techData.push(model);
      }

      this.powerNumber = parseFloat(techData[0].data, 10);
      this.heightNumberOne = parseFloat(techData[1].data, 10);
      if (techData[1].data.indexOf("/") !== -1) {
        this.hasSecondHeight = true;
        let secondHeight = techData[1].data.split("/")[1];
        this.heightNumberTwo = parseFloat(secondHeight, 10);
      }
      this.consumptionNumber = parseFloat(techData[2].data, 10);
      this.volumeNumber = parseFloat(techData[3].data, 10);
      this.priceNumber = parseInt(this.currentModel.price, 10);
    },
  },
  computed: {
    currentModel() {
      return this.$store.state.selectedModel;
    },
    bikeTitle() {
      let brand = this.caiptalize(this.currentModel.brand);
      let category = this.caiptalize(this.currentModel.category);
      return `${brand} ${this.currentModel.name} ${category}`;
    },
    galleryImages() {
      let gallery = [];
      for (const image of this.currentModel.img) {
        gallery.push(
          require(`@/assets/img/${this.currentModel.brand}/${image}`)
        );
      }
      return gallery;
    },
    technicalNumbers() {
      let techData = [];
      for (const model of this.currentModel.technical) {
        techData.push(model);
      }

      for (const data of techData) {
        console.log(data);
      }
      return techData;
    },
    similarModels() {
      let models = [];
      let arrayToSearch = [...this.$store.state.moto];
      for (const model of arrayToSearch) {
        if (model.category === this.currentModel.category && model.name !== this.currentModel.name) {
          models.push(model);
        }
      }
      return models;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

#bike-model {
  padding-top: 50px;
  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    margin: 2rem auto;
  }
}

#bike-title {
  width: 90%;
  font-size: 3rem;
  text-align: center;
  font-style: italic;
  padding: 2rem 0 1rem 0;
  border-bottom: 1px solid $dark-shade;
  margin: auto;
  font-weight: bold;
}

#bike-info {
  width: 90%;
  display: flex;
  margin: auto;
}

#bike-price {
  color: $main;
  font-size: 5rem;
  text-shadow: 1px 1px 1px $dark-shade;
  display: flex;
  align-items: center;
  justify-content: center;
  span:nth-child(1){
    font-size: 1.5rem;
    padding-bottom: 2rem;
    margin-top: 2.5rem;
    text-transform: uppercase;
    margin-right: 2rem;
  }
}

#bike-price-value{
  font-size: 5rem !important;
}

#main-image-container {
  width: 40vw;
  height: 50vh;
  margin-top: 2rem;
  margin-left: -5%;
  display: flex;
  justify-content: center;
  position: relative;
  .main-image {
    width: 100%;
    height: auto;
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    clip-path: polygon(25% 0%, 100% 0%, 100% 101%, 25% 100%, 0% 50%);
  }
  img {
    width: 100%;
    height: auto;
    clip-path: polygon(25% 0%, 100% 0%, 100% 101%, 25% 100%, 0% 50%);
  }
}

#main-image-background {
  width: 40vw;
  height: 50vh;
  position: absolute;
  filter: drop-shadow(-10px 0px 0px $dark-shade)
    drop-shadow(-10px 0px 0px $main) drop-shadow(10px 0px 0px $dark-shade)
    drop-shadow(10px 0px 0px $main);
}

#main-image-bg {
  width: 100%;
  height: 100%;
  background: white;
  clip-path: polygon(25% 0%, 100% 0%, 100% 101%, 25% 100%, 0% 50%);
}

#bike-image-container {
  width: 50vw;
  height: 50vh;
  position: relative;
  margin-top: 2rem;
  filter: drop-shadow(10px 0px 0px $dark-shade) drop-shadow(10px 0px 0px $main);
}

.bike-image-gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  background: $dark-shade;
  clip-path: polygon(100% 0%, 80% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
  z-index: 2;
}

#bike-image {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  clip-path: polygon(100% 0%, 80% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
  filter: blur(10px);
}

.bike-image-background {
  width: 100%;
  height: 100%;
  background: $dark-shade;
  clip-path: polygon(100% 0%, 80% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
  position: absolute;
  top: 1px;
  z-index: -1;
}

#bike-details-container {
  width: 79%;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  color: white;
  z-index: 3;
  margin: 2rem;
}

#bike-tech-container {
  position: absolute;
  bottom: 3rem;
  z-index: 3;
  color: white;
}

.bike-technical-container {
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
}

.bike-detail {
  text-transform: uppercase;
  width: 11rem;
  text-align: center;
}

.bike-icon {
  width: 3rem;
  height: 3rem;
  background-position: center;
  background-size: co;
  background-repeat: no-repeat;
}

.bike-label {
  font-size: 1rem;
}

#gallery-wrapper {
  width: 80%;
  margin: auto;
  display: flex;
  padding: 1rem;
  box-sizing: content-box;
  justify-content: center;
  overflow-x: auto;
  .gallery-img {
    width: 500px;
    margin: 0 1rem;
    filter: drop-shadow(10px 10px 0 $main);
    cursor: pointer;
    img {
      width: 100%;
      height: auto;
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }
  }
}

.gallery-overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  background: $dark-shade;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  z-index: 5;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}


.gallery-overlay-text{
  width: fit-content;
  color: white;
  font-size: 2rem;
}

.gallery-img:hover .gallery-overlay{
  opacity: 0.5;
}

#similar-models-container {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>