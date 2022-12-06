<template>
  <div id="app">
    <Header />
    <div id="mobile-menu-container" :style="{ left: `${menuPos}%` }">
      <nav @click="toggleMenu()">
        <router-link to="/">Acasă</router-link>
        <router-link to="/models">Modele</router-link>
        <router-link to="/about">Despre noi</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/rabla">Rabla</router-link>
        <router-link to="/service">Service</router-link>
      </nav>
    </div>
    <main>
      <router-view />
    </main>
    <Footer />
    <preloader />
    <button id="scroll-to-top" @click="scrollToTop()">
      <div class="top-icon"></div>
    </button>
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Preloader from "./components/Preloader.vue";
export default {
  components: { Header, Footer, Preloader },
  data() {
    return {
      menuPos: -100,
    };
  },
  mounted() {
    let self = this;
    let header = document.getElementsByTagName("header")[0];
    window.EventBus.listen("sectionnothome", function () {
      header.classList.add("wide-header");
    });
    window.EventBus.listen("sectionishome", function () {
      header.classList.remove("wide-header");
    });

    window.EventBus.listen("showpreloader", function () {
      let body = document.getElementsByTagName("body")[0];
      body.style.overflow = "hidden";
    });

    window.EventBus.listen("showmenu", function () {
      self.toggleMenu();
    });
  },
  methods: {
    toggleMenu() {
      if (this.menuPos === -100) {
        this.menuPos = 0;
      } else {
        this.menuPos = -100;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

body {
  font-family: "Oswald" !important;
  margin: 0;
  padding: 0;
}

.wide-header {
  width: 100%;
  top: 0;
  left: 0;
  background: $dark-shade;
  border-bottom: 3px solid $main;
  #header-container {
    width: 85%;
    margin: 0;
    left: 50px;
    border: none;
  }
  #header-decoration {
    display: none;
  }
}

main {
  margin: auto;
  width: 100%;
  // margin-top: 70px;
}

#mobile-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  #mobile-menu-button {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: auto;
    }
  }
  #phone-number-container {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    box-sizing: content-box;
  }
  #phone-number {
    color: white;
    font-size: 0.9rem;
  }
}

#mobile-menu-container {
  width: 100%;
  height: 100%;
  position: fixed;
  background: $dark-shade;
  z-index: 4;
  left: -100%;
  top: 50px;
  transition: all 0.3s ease-in;
  nav {
    width: 100%;
    flex-flow: column;
    left: 0;
    top: 1rem;
  }
  a {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    // margin: 1rem 0;
  }
}

@import "@/assets/scss/app.media";

#scroll-to-top{
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-radius: 10%;
  border: none;
  background: $dark-shade;
  border: 2px solid $main;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  z-index: 3;
}

.top-icon{
  width: 2rem;
  height: 2rem;
  clip-path: polygon(50% 0, 100% 25%, 100% 55%, 50% 30%, 0 55%, 0 25%);
  background: white;
  margin-bottom: -0.1rem;
}
</style>
