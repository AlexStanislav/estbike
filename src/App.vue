<template>
  <div id="app">
    <header>
      <div id="header-container">
        <div id="logo-container">
          <img :src="require('@/assets/img/logoest.jpg')" alt="Logo EstBike" />
        </div>
        <div id="phone-container">
          <img
            :src="require('@/assets/img/phone-white.png')"
            alt="Logo EstBike"
          />
          <div id="phone-number-container">
            <div id="phone-number-title">Telefon</div>
            <div id="phone-number">0733 782 453</div>
          </div>
        </div>
        <nav>
          <router-link to="/">Acasă</router-link>
          <router-link to="/models">Modele</router-link>
          <router-link to="/about">Despre noi</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>
      <div id="mobile-header">
        <div id="mobile-menu-button" @click="toggleMenu()">
          <img :src="require('@/assets/img/menu.svg')" />
        </div>
        <div id="logo-container">
          <img :src="require('@/assets/img/logoest.jpg')" alt="Logo EstBike" />
        </div>
        <div id="phone-number-container">
          <div id="phone-number">+40 0733 782 453</div>
        </div>
      </div>
    </header>
    <div id="mobile-menu-container" :style="{ left: `${menuPos}%` }">
      <nav @click="toggleMenu()">
        <router-link to="/">Acasă</router-link>
        <router-link to="/models">Modele</router-link>
        <router-link to="/about">Despre noi</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
    <main>
      <router-view />
    </main>
    <footer>
      <div id="footer-container">
        <div class="footer-wrapper">
          <img :src="require('@/assets/img/logoest.jpg')" alt="Logo EstBike" />
          <p class="footer-about">
            EST BIKE reprezinta pasiunea imensa pentru motociclete si ATV-uri
            concretizata intr-un magazin de motociclete si ATV, echipamente si
            accesorii. Proiectul a fost inceput in primavara...
          </p>
          <router-link to="/about">cititi mai mult...</router-link>
        </div>
        <div class="footer-wrapper">
          <div class="footer-info">
            <div class="footer-info-title">ADRESA:</div>
            <div class="footer-info-content">Strada Medeea 1A, Contanta</div>
          </div>
          <div class="footer-info">
            <div class="footer-info-title">TELEFON:</div>
            <div class="footer-info-content">0733 782 453</div>
          </div>
          <div class="footer-info">
            <div class="footer-info-title">EMAIL:</div>
            <div class="footer-info-content">
              <a href="mailto:office@estbike.ro">office@estbike.ro</a>
            </div>
          </div>
          <div class="footer-info">
            <div class="footer-info-title">PROGRAM LUCRU/PROGRAMARI:</div>
            <div class="footer-info-content">
              Luni - Vineri / 9:00 AM - 6:00 PM
            </div>
          </div>
        </div>
        <div class="footer-wrapper">
          <div class="footer-info">
            <router-link to="/">Acasă</router-link>
          </div>
          <div class="footer-info">
            <router-link to="/models">Modele</router-link>
          </div>
          <div class="footer-info">
            <router-link to="/about">Despre noi</router-link>
          </div>
          <div class="footer-info">
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
      </div>
    </footer>
    <modal />
  </div>
</template>
<script>
import Modal from "./components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      menuPos: -100,
    };
  },
  methods: {
    toggleMenu() {
      if (this.menuPos === -100) {
        this.menuPos = 0;
      } else {
        this.menuPos = -100;
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

body {
  font-family: "OpenSans";
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  height: 50px;
  background: $main;
  box-shadow: 0 1px 5px 1px rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  top: 0;
  z-index: 5;
}

#header-container {
  width: 65%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
}

#logo-container {
  width: 100px;
  img {
    width: 100%;
    height: auto;
  }
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
}

#phone-number-title {
  font-size: 0.8rem;
  font-weight: bold;
}

#phone-number {
  font-size: 0.9rem;
}

nav {
  height: 100%;
  color: $light-shade;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  a {
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
    background: $light-accent;
    color: $light-shade;
  }
  a.router-link-exact-active {
    background: $light-accent;
    color: $light-shade;
  }
}

main {
  margin: auto;
  width: 65%;
  margin-top: 70px;
}

footer {
  width: 100%;
  padding: 5rem 0;
  background: $dark-shade;
  margin-top: 2rem;
}

#footer-container {
  width: 65%;
  margin: auto;
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    color: $light-shade;
    font-size: 0.9rem;
  }
}

.footer-wrapper {
  margin-right: 5rem;
}

.footer-about {
  width: 270px;
  font-size: 0.8rem;
  line-height: 20px;
  color: #777;
}

.footer-info {
  color: $light-shade;
  margin-bottom: 1rem;
}

.footer-info-title {
  font-size: 0.9rem;
}
.footer-info-content {
  font-size: 0.8rem;
  color: #777;
  margin-top: 0.2rem;
}

#mobile-header {
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
    font-size: 1.2rem;
  }
}

#mobile-menu-container {
  width: 100%;
  height: 100%;
  position: fixed;
  background: $main;
  z-index: 4;
  left: -100%;
  top: 50px;
  transition: all 0.3s ease-in;
  nav{
    width: 100%;
    flex-flow: column;
    left: 0;
    top: 1rem;
  }
  a{
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin: 1rem 0;
  }
}

@import "@/assets/scss/app.media";
</style>
