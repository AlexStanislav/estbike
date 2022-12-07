<template>
  <header>
    <div id="logo-container" class="desktop-logo">
      <img :src="require('@/assets/img/logoest.jpg')" alt="Logo EstBike" />
    </div>
    <div id="header-container">
      <div id="phone-container">
        <img
          :src="require('@/assets/img/phone-white.png')"
          alt="Logo EstBike"
        />
        <div id="phone-number-container">
          <div id="phone-number-title">Telefon</div>
          <div id="phone-number"><a href="https://wa.me/0733782453" target="_blank">0733 782 453</a></div>
        </div>
      </div>
      <nav>
        <router-link to="/">Acasă</router-link>
        <router-link to="/models">Modele</router-link>
        <router-link to="/about">Despre noi</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/rabla">Rabla</router-link>
        <router-link to="/service">Service</router-link>
      </nav>
      <div id="header-decoration">
        <div id="top-decoration"></div>
        <div id="top-decoration-shadow"></div>
        <div id="bottom-decoration"></div>
        <div id="bottom-decoration-shadow"></div>
      </div>
    </div>
    <div id="mobile-header">
      <div id="mobile-menu-button" @click="toggleMenu()">
        <img :src="require('@/assets/img/menu.svg')" />
      </div>
      <div id="logo-container" class="mobile-logo">
        <img :src="require('@/assets/img/logoest.jpg')" alt="Logo EstBike" />
      </div>
      <div id="phone-number-container">
        <div id="phone-number"><a href="https://wa.me/0733782453" target="_blank">+40 733 782 453</a></div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    toggleMenu(){
      window.EventBus.dispatch("showmenu")
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

header {
  width: 55%;
  height: 50px;
  position: fixed;
  top: 1rem;
  left: 10%;
  z-index: 5;
  display: flex;
  background: transparent;
}

#logo-container {
  width: 132px;
  height: 50px;
  margin-right: 0.5rem;
  img {
    width: auto;
    height: 100%;
  }
}
#header-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  background: $dark-shade;
  border-bottom: 3px solid $main;
}

#phone-container {
  width: 125px;
  margin: 0 2rem;
  color: $light-shade;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 30px;
    height: 31px;
  }
  position: absolute;
  right: 0rem;
}

#phone-number-title {
  font-size: 1em;
}

#phone-number {
  font-size: 1rem;
  a{
    text-decoration: none;
    color: white;
  }
}

nav {
  height: 100%;
  color: $light-shade;
  position: absolute;
  display: flex;
  align-items: center;
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: $light-shade;
    height: 50px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    padding: 0 1rem;
    text-shadow: 0px 0px 2px #000;
  }
  a:hover {
    background: $main;
    color: $light-shade;
  }
  a.router-link-exact-active {
    background: $main;
    color: $light-shade;
  }
}

#header-decoration {
  width: 40px;
  height: 40px;
  position: absolute;
  right: -40px;
  top: 0;
}

#top-decoration {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40px 50px 0 0;
  border-color: #1c131c transparent transparent transparent;
  position: absolute;
  z-index: 2;
}
#top-decoration-shadow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40px 55px 0 0;
  border-color: $main transparent transparent transparent;
  position: absolute;
  z-index: 0;
}
#bottom-decoration-shadow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 0 0 53px;
  border-color: transparent transparent transparent $main;
  position: absolute;
  z-index: 0;
}

#bottom-decoration {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 47px 0 0 47px;
  border-color: transparent transparent transparent #1c131c;
  position: absolute;
  z-index: 1;
}
</style>