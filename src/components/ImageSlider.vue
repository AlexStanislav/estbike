<template>
  <div id="slider-container">
    <button v-if="showButtons" id="prevSlide" @click="prevSlide()">
      &lang;
    </button>
    <div id="slider">
      <div id="slider-gradient"></div>
      <div id="slider-caption">
        <h2>Showcase {{ showcase.name }}</h2>
        <p>{{ showcase.description }}</p>
      </div>
      <transition name="fade">
        <img :src="getImage" :key="getImage" />
      </transition>
      <div id="index-container">
        <div
          v-for="(dot, index) of showcase.img.length"
          :key="index"
          class="index-dot"
        >
            <div class="index-button" @click="goToSlide(index)">
                <div class="inner-index-button"></div>
            </div>
        </div>
      </div>
      <div id="bottom-gradient"></div>
    </div>
    <button v-if="showButtons" id="nextSlide" @click="nextSlide()">
      &rang;
    </button>
  </div>
</template>
<script>
export default {
  props: {
    showButtons: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentImage: 0,
      indexDots: document.getElementsByClassName("inner-index-button"),
      autoPlay: setInterval(() => { this.nextSlide(); }, 5000)
    };
  },
  mounted() {
    this.indexDots[this.currentImage].classList.add("index-active");
  },
  destroyed(){
    clearInterval(this.autoPlay)
  },
  computed: {
    getImage() {
      let img = require(`@/assets/img/${this.showcase.img[this.currentImage]}`);
      return img;
    },
    showcase() {
      return this.$store.state.moto[2];
    },
  },
  methods: {
    goToSlide(slide) {
      this.currentImage = slide;
      this.removeActiveClass("index-active", this.indexDots)
      this.indexDots[slide].classList.add("index-active");
      clearInterval(this.autoPlay)
    },
    nextSlide() {
      if (this.currentImage < this.showcase.img.length - 1) {
        this.currentImage++;
      } else {
        this.currentImage = 0;
      }
      this.removeActiveClass("index-active", this.indexDots)
      this.indexDots[this.currentImage].classList.add("index-active");
    },
    prevSlide() {
      if (this.currentImage > 0) {
        this.currentImage--;
      } else {
        this.currentImage = 2;
      }
    },
    removeActiveClass(cssClass, elements) {
      for (const element of elements) {
        element.classList.remove(cssClass);
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

#slider-container {
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  align-items: center;
  button {
    font-size: 5rem;
    background: none;
    border: none;
    margin: 0 1rem;
    cursor: pointer;
    height: fit-content;
    color: $light-shade;
  }
}

#slider {
  width: 64rem;
  overflow: hidden;
  display: flex;
  position: relative;
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease-in-out;
  }
}

.fade-enter-from {
  opacity: 1;
}

.fade-enter-to {
  opacity: 0.7;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0.7;
}

#slider-gradient {
  position: absolute;
  width: 100%;
  height: 40%;
  background: linear-gradient(to bottom, $dark-shade, transparent);
  z-index: 2;
}

#slider-caption {
  left: 10%;
  width: 80%;
  position: absolute;
  color: $light-shade;
  z-index: 2;
}

#index-container {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  z-index: 3;
}

#bottom-gradient {
  position: absolute;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, $dark-shade, transparent);
  bottom: 0;
}

.index-button {
  border: 2px solid $main;
  margin: 1rem;
  padding: 0.2rem;
  box-sizing: content-box;
  cursor: pointer;
}

.inner-index-button{
    width: 10px;
    height: 10px;
}

.index-active {
  background: $main;
}
</style>