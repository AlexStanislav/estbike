<template>
  <div id="models">
    <h1>Descoperă modele</h1>
    <brand-list></brand-list>
    <div id="models-wrapper">
      <div id="sidebar">
        <h2>Filtre</h2>
        <div class="filter-container">
          <h3>Preț</h3>
          <vSelect :options="priceOptions" v-model="priceFilter"></vSelect>
          <h4>Intre</h4>
          <div class="price-range-container">
            <div class="price-range-value">
              {{ priceMinValue.toLocaleString("ro-RO") }}&euro;
            </div>
            <span>și</span>
            <div class="price-range-value">
              {{ priceMaxValue.toLocaleString("ro-RO") }}&euro;
            </div>
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
          <h3>Categorie</h3>
          <vSelect
            :options="modelOptions"
            v-model="modelFilter"
            @input="setFilter"
          ></vSelect>
        </div>

        <div class="filter-container" id="tech-filter-container">
          <h3>Detalii technice</h3>
          <div
            class="tech-wrapper"
            v-for="(filter, index) of techFilters"
            :key="index"
          >
            <div class="tech-label">{{ filter.label }}</div>
            <div class="tech-data">
              <b-form-checkbox-group
                v-for="(data, index) of filter.data"
                :key="index"
                v-model="techFilter"
              >
                <b-form-checkbox :value="{ label: filter.label, data: data }">{{
                  data
                }}</b-form-checkbox>
              </b-form-checkbox-group>
            </div>
          </div>
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
    <!-- <div id="models-pagination-container">
      <b-pagination
        :total-rows="totalRows"
        :per-page="perPage"
        v-model="currentPage"
      />
    </div> -->
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import MultiRangeSlider from "multi-range-slider-vue";
import "multi-range-slider-vue/MultiRangeSliderBarOnly.css";
import BrandList from "../components/BrandList.vue";
export default {
  components: { Card, vSelect, MultiRangeSlider, BrandList },
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      priceFilter: null,
      priceMinValue: 0,
      priceMaxValue: 100,
      priceRangeMin: 0,
      priceRangeMax: 100,
      displayModels: [],
      priceOptions: [
        { label: "Descrescator", code: "desc" },
        { label: "Crescator", code: "asc" },
      ],
      modelFilter: null,
      modelOptions: [],
      techFilter: [],
    };
  },
  mounted() {
    this.getPrices();
    this.getModels();
    this.displayModels = this.currentModels;
    let self = this;
    window.EventBus.listen("brand-selected", function () {
      self.displayModels = self.currentModels;
      self.getModels();
      self.getPrices();
    });
    window.EventBus.dispatch('sectionnothome')
  },
  methods: {
    getBrandModels() {
      let models = [];
      for (const moto of this.$store.state.moto) {
        if (moto.brand == this.$store.state.activeBrand) {
          models.push(moto);
        }
      }
      return models
    },
    setFilter(event) {
      if (event !== null) {
        this.modelFilter = event.code;
      } else {
        this.modelFilter = null;
      }
    },
    resetModelFilter() {
      this.displayModels = this.$store.state.moto;
    },
    getModels() {
      let arrayToSort = [...this.currentModels];
      let modelsArray = [];
      this.modelOptions = [];
      for (const moto of arrayToSort) {
        modelsArray.push(moto.category);
      }
      let intermediaryArray = [...new Set(modelsArray)];
      for (const model of intermediaryArray) {
        this.modelOptions.push({
          label: model.charAt(0).toUpperCase() + model.slice(1),
          code: model,
        });
      }
    },
    getPrices() {
      let arrayToSort = [...this.currentModels];
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
    sortPrice(array, code) {
      if (code === "desc") {
        array.sort((a, b) => {
          let firstPrice = parseInt(a.price, 10);
          let secondPrice = parseInt(b.price, 10);
          if (firstPrice === secondPrice) {
            return firstPrice - secondPrice;
          } else {
            return secondPrice - firstPrice;
          }
        });
      } else if (code === "asc") {
        array.sort((a, b) => {
          let firstPrice = parseInt(a.price, 10);
          let secondPrice = parseInt(b.price, 10);
          if (firstPrice === secondPrice) {
            return secondPrice - firstPrice;
          } else {
            return firstPrice - secondPrice;
          }
        });
      }
      return array;
    },
    sortModel(array, value) {
      let filteredArray = [];
      for (const moto of array) {
        if (moto.category === value) {
          filteredArray.push(moto);
        }
      }
      return filteredArray;
    },
  },
  watch: {
    techFilter: function (newValue) {
      let arrayToSort = [...this.currentModels];
      let filteredArray = [];
      if(newValue.length !== 0){
        for (const model of arrayToSort) {
          for (const tech of model.technical) {
            for (const filter of newValue) {
              if (tech.detail === filter.label) {
                if (tech.data === filter.data) {
                  filteredArray.push(model);
                }
              }
            }
          }
        }
        this.currentModels = filteredArray;
      }else{
        this.currentModels = this.getBrandModels()
      }
    },
    priceMinValue: function (newValue) {
      // let arrayToSort = [...this.displayModels];
      let arrayToSort = [...this.currentModels];
      let filteredArray = arrayToSort.filter((element) => {
        return parseInt(element.price, 10) >= newValue;
      });
      if (newValue === this.priceRangeMin) {
        this.displayModels = arrayToSort;
      } else {
        this.displayModels = filteredArray;
      }
    },
    priceMaxValue: function (newValue) {
      // let arrayToSort = [...this.displayModels];
      let arrayToSort = [...this.currentModels];
      let filteredArray = arrayToSort.filter((element) => {
        return parseInt(element.price, 10) <= newValue;
      });
      if (newValue === this.priceRangeMax) {
        this.displayModels = arrayToSort;
      } else {
        this.displayModels = filteredArray;
      }
    },
    priceFilter: function (newValue) {
      let arrayToSort = [...this.currentModels];
      // let arrayToSort = this.$store.state.moto;
      let sortedPrice = [];
      let finalModels = [];
      if (this.modelFilter !== null) {
        if (newValue === null) {
          this.displayModels = this.sortModel(arrayToSort, this.modelFilter);
        } else {
          sortedPrice = this.sortPrice(arrayToSort, newValue.code);
          finalModels = this.sortModel(sortedPrice, this.modelFilter);
          this.currentModels = finalModels;
        }
      } else {
        if (newValue === null) {
          this.displayModels = arrayToSort;
        } else {
          this.displayModels = this.sortPrice(arrayToSort, newValue.code);
        }
      }
    },
    modelFilter: function (newValue) {
      let arrayToSort = [...this.currentModels];
      let sortedModels = [];
      let finalModels = [];
      if (this.priceFilter !== null) {
        if (newValue === null) {
          this.currentModels = this.sortPrice(
            arrayToSort,
            this.priceFilter.code
          );
        } else {
          sortedModels = this.sortModel(arrayToSort, newValue);
          finalModels = this.sortPrice(sortedModels, this.priceFilter.code);
          this.currentModels = finalModels;
        }
      } else {
        if (newValue === null) {
          this.currentModels = this.getBrandModels();
        } else {
          this.currentModels = this.sortModel(arrayToSort, newValue);
        }
      }
    },
  },
  computed: {
    currentModels: {
      get() {
        return this.getBrandModels();
      },
      set(newValue) {
        this.displayModels = newValue;
      },
    },
    techFilters() {
      let tempArray = [];
      let filters = [];
      let arrayToSort = [...this.displayModels];
      for (const model of arrayToSort) {
        for (const detail of model.technical) {
          filters.push(detail.detail);
        }
      }

      let uniqueFilters = [...new Set(filters)];

      for (const model of this.displayModels) {
        for (const tech of model.technical) {
          for (const filter of uniqueFilters) {
            if (tech.detail === filter) {
              tempArray.push({ label: filter, data: tech.data });
            }
          }
        }
      }

      let result = Array.from(
        new Set(tempArray.map((entry) => entry.label))
      ).map((currentLabel) => {
        return {
          label: currentLabel,
          data: tempArray
            .filter((entry) => entry.label === currentLabel)
            .map((edition) => edition.data),
        };
      });
      let techFilters = [];
      for (const filter of result) {
        let uniqueData = [...new Set(filter.data)];
        techFilters.push({ label: filter.label, data: uniqueData });
      }

      return techFilters;
    },
    // lists() {
    //   const items = this.displayModels;
    //   // Return just page of items needed
    //   return items.slice(
    //     (this.currentPage - 1) * this.perPage,
    //     this.currentPage * this.perPage
    //   );
    // },
    // totalRows() {
    //   return this.currentModels.length;
    // },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

:root {
  --vs-dropdown-option--active-bg: #f00;
}

#models {
  width: 95%;
  margin: 80px auto 0 auto;
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
  // height: 100vh;
  flex-basis: 20%;
  background: $light-shade;
  h2 {
    width: 80%;
    margin: 1rem auto;
    text-align: center;
    padding-bottom: 5px;
  }
}

.filter-container {
  width: 90%;
  margin: 0 auto 1rem auto;
  display: flex;
  flex-flow: column;
  padding: 0.5rem 1rem 3rem 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid;
  h3,
  h4 {
    color: $main;
    width: 70%;
    text-align: center;
    margin: auto;
    margin-bottom: 1rem;
  }
  h4 {
    margin: 0.5rem auto 0 auto;
  }
}

.price-range-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  span {
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

#tech-filter-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
}

.tech-wrapper {
  width: 8rem;
  margin: 1rem 0;
}

.tech-label {
  font-size: 1.2rem;
  color: $main;
  border-bottom: 1px solid $main;
  margin-bottom: 1rem;
}

.tech-data .custom-control-label {
  margin-left: 0.5rem;
}
</style>