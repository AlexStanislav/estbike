<template>
  <div id="models">
    <h1>Descoperă modele</h1>
    <div id="models-wrapper">
      <div id="sidebar">
        <h2>Filtrați dupa</h2>
        <div class="filter-container">
          <h3>Preț</h3>
          <vSelect :options="priceOptions" v-model="priceFilter"></vSelect>
          <h4>Intre</h4>
          <div class="price-range-container">
            <div class="price-range-value">{{ priceMinValue.toLocaleString('ro-RO') }}&euro;</div> 
            <span>și</span>
            <div class="price-range-value">{{ priceMaxValue.toLocaleString('ro-RO') }}&euro;</div>
          </div>
          <multi-range-slider
            baseClassName="multi-range-slider-bar-only"
            :minValue="priceRangeMin"
            :maxValue="priceRangeMax"
            :min="priceRangeMin"
            :max="priceRangeMax"
            @input="updatePriceRange"
          />
        </div>
        <div class="filter-container">
          <h3>Marca</h3>
          <vSelect :options="modelOptions" v-model="modelFilter" @input="resetModelFilter()"></vSelect>
        </div>
      </div>
      <div id="models-grid">
        <card
          v-for="(moto, index) of displayModels"
          :key="index"
          :data="moto"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import MultiRangeSlider from "multi-range-slider-vue";
import "multi-range-slider-vue/MultiRangeSliderBarOnly.css";
export default {
  components: { Card, vSelect, MultiRangeSlider },
  data() {
    return {
      priceFilter: "",
      priceMinValue: 0,
      priceMaxValue: 100,
      priceRangeMin: 0,
      priceRangeMax: 100,
      displayModels: this.$store.state.moto,
      priceOptions: [
        { label: "Descrescator", code: "desc" },
        { label: "Crescator", code: "asc" },
      ],
      modelFilter: "",
      modelOptions: [],
    };
  },
  mounted() {
    this.getPrices()
    this.getModels()
  },
  methods: {
    resetModelFilter(){
      this.displayModels = this.$store.state.moto
    },
    getModels(){
      let arrayToSort = [...this.displayModels]
      let modelsArray = []
      for (const moto of arrayToSort) {
        modelsArray.push(moto.brand)
      }
      let intermediaryArray = [...new Set(modelsArray)]
      for (const model of intermediaryArray) {
        this.modelOptions.push({label: (model.charAt(0).toUpperCase() + model.slice(1)), code: model})
      }
    },
    getPrices() {
      let arrayToSort = [...this.displayModels];
      let prices = () => {
        return arrayToSort.map((moto) => moto.price);
      };
      this.priceRangeMin = Math.min(...prices());
      this.priceRangeMax = Math.max(...prices());
      this.priceMinValue = Math.min(...prices());
      this.priceMaxValue = Math.max(...prices());
    },
    updatePriceRange(event) {
      this.priceMinValue = event.minValue;
      this.priceMaxValue = event.maxValue;
    },
  },
  watch: {
    priceMinValue: function (newValue) {
      // let arrayToSort = [...this.displayModels];
      let arrayToSort = [...this.$store.state.moto];
      let filteredArray = arrayToSort.filter((element) => {
        return parseInt(element.price, 10) >= newValue;
      });
      if (newValue === this.priceRangeMin) {
        this.displayModels = this.$store.state.moto;
      } else {
        this.displayModels = filteredArray;
      }
    },
    priceMaxValue: function (newValue) {
      // let arrayToSort = [...this.displayModels];
      let arrayToSort = [...this.$store.state.moto];
      let filteredArray = arrayToSort.filter((element) => {
        return parseInt(element.price, 10) <= newValue;
      });
      if (newValue === this.priceRangeMax) {
        this.displayModels = this.$store.state.moto;
      } else {
        this.displayModels = filteredArray;
      }
    },
    priceFilter: function (newValue) {
      let arrayToSort = [...this.displayModels];
      // let arrayToSort = this.$store.state.moto;
      if (newValue === null) {
        this.displayModels = this.$store.state.moto;
      } else {
        if (newValue.code === "desc") {
          arrayToSort.sort((a, b) => {
            let firstPrice = parseInt(a.price, 10);
            let secondPrice = parseInt(b.price, 10);
            if (firstPrice === secondPrice) {
              return firstPrice - secondPrice;
            } else {
              return secondPrice - firstPrice;
            }
          });
        } else if (newValue.code === "asc") {
          arrayToSort.sort((a, b) => {
            let firstPrice = parseInt(a.price, 10);
            let secondPrice = parseInt(b.price, 10);
            if (firstPrice === secondPrice) {
              return secondPrice - firstPrice;
            } else {
              return firstPrice - secondPrice;
            }
          });
        }
        this.displayModels = arrayToSort;
      }
    },
    modelFilter: function(newValue){
      let arrayToSort = [...this.displayModels]
      let filteredArray = []
      if(newValue === null){
        this.displayModels = this.$store.state.moto;
      }else{
        for (const moto of arrayToSort) {
          if(moto.brand === newValue.code){
            filteredArray.push(moto)
          }
        }
        this.displayModels = filteredArray
      }
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

:root {
  --vs-dropdown-option--active-bg: #d79566;
}

#models h1 {
  width: 80%;
  margin: 0 auto 2rem auto;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid;
  text-align: center;
}

#models-wrapper {
  display: flex;
}

#models-grid {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  overflow-y: auto;
  margin-left: 2rem;
  flex-basis: 80%;
}

#sidebar {
  height: 90rem;
  background: $main;
  flex-basis: 20%;
  border-radius: 1rem;
  h2 {
    width: 80%;
    margin: 1rem auto;
    color: white;
    text-align: center;
    border-bottom: 1px solid white;
    padding-bottom: 5px;
  }
}

.filter-container {
  width: 90%;
  margin: 0 auto 1rem auto;
  display: flex;
  flex-flow: column;
  background: $light-accent;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  h3, h4 {
    color: $main;
    width: 70%;
    text-align: center;
    margin: auto;
    margin-bottom: 1rem;
  }
  h4{
    margin: 0.5rem auto 0 auto;
  }
}

.price-range-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  span{
    color: $main;
    font-weight: bold;
  }
}
.price-range-value {
  width: 4rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  background: white;
  border: 1px solid $main;
}

.multi-range-slider-bar-only * {
  padding: 3px;
}

.multi-range-slider-bar-only .bar-inner {
  background: $main;
  box-shadow: none;
}
.multi-range-slider-bar-only .bar-left,
.multi-range-slider-bar-only .bar-right {
  box-shadow: none;
}
</style>