<template>
  <div id="popular-card-container">
    <div
      class="popular-card"
      v-for="(bike, index) of $store.state.popular"
      :key="index"
      @click="showInfo(bike)"
    >
      <div class="card-gradient"></div>
      <div
        class="card-info"
        @mouseenter="revealOpacity"
        @mouseleave="resetOpacity"
      >
        {{ bike.name }}
      </div>
      <div
        class="popular-image"
        :style="{
          backgroundImage: `url(${require(`@/assets/img/${bike.img[0]}`)})`,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showInfo(data){
        window.EventBus.dispatch("showmodal",{
            isVisible: true,
            moto: data
        })
    },
    revealOpacity(event){
      event.srcElement.parentElement.children[2].style.width='110%';
      event.srcElement.parentElement.children[2].style.height='110%';
      event.srcElement.parentElement.children[2].style.marginTop='-5%';
      event.srcElement.parentElement.children[2].style.marginLeft='-5%';
      event.srcElement.parentElement.children[0].style.opacity = 0.3;
    },
    resetOpacity(event){
      event.srcElement.parentElement.children[2].style.width='100%';
      event.srcElement.parentElement.children[2].style.height='100%';
      event.srcElement.parentElement.children[2].style.marginTop='0';
      event.srcElement.parentElement.children[2].style.marginLeft='0';
      event.srcElement.parentElement.children[0].style.opacity = 0.5
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/imports";


#popular-card-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  cursor: pointer;
}

.popular-card {
  width: 20rem;
  height: 20rem;
  border: 1px solid $dark-shade;
  position: relative;
  overflow: hidden;
}

.card-gradient {
  background: $dark-shade;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.card-info{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $light-shade;
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 2px 2px 1px #000;
}

.popular-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
}
</style>
