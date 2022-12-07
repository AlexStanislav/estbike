<template>
  <div class="home">
    <div id="slider-container">
      <div id="gradient-top" class="gradient-overlay"></div>
      <div id="gradient-bottom" class="gradient-overlay"></div>
      <HooperCarousel></HooperCarousel>
    </div>
    <div id="home-models">
      <h2 class="title">Descoperă modele</h2>
      <brand-list></brand-list>
      <div id="models-container">
        <card
          v-for="(moto, index) of homeModels"
          :key="index"
          :data="moto"
        ></card>
      </div>
      <div class="models-redirect">
        <router-link to="/models">Mai multe...</router-link>
      </div>
    </div>
    <div id="home-contact">
      <h2 class="title">Nu ezitați să luați legatura cu noi</h2>
      <div id="home-contact-container">
        <div class="home-contact-wrapper" id="instagram-contact">
          <font-awesome-icon icon="fa-brands fa-instagram"></font-awesome-icon>
          <div class="contact-title">INSTAGRAM</div>
          <div class="contact-handle">@estbike</div>
          <div class="contact-follow">
            <a href="https://www.instagram.com/estbike/">FOLLOW</a>
          </div>
        </div>
        <div class="home-contact-wrapper" id="facebook-contact">
          <font-awesome-icon icon="fa-brands fa-facebook"></font-awesome-icon>
          <div class="contact-title">FACEBOOK</div>
          <div class="contact-handle">Est Bike Adventure</div>
          <div class="contact-follow">
            <a href="https://www.facebook.com/estbike.ro">FOLLOW</a>
          </div>
        </div>
        <div class="home-contact-wrapper" id="general-contact">
          <div class="contact-handle">
            <img
              :src="require('@/assets/img/phone-white.png')"
              alt="Logo EstBike"
            />
          </div>
          <div class="contact-handle"><a href="https://wa.me/0733 782 453">0733 782 453</a></div>
          <br />
          <div class="contact-handle">
            <font-awesome-icon icon="fas fa-envelope" />
          </div>
          <div class="contact-handle">
            <a href="mailto:office@estbike.ro">office@estbike.ro</a>
          </div>
          <br />
          <div class="contact-handle">
            <font-awesome-icon icon="fas fa-address-card" />
          </div>
          <div class="contact-handle">Strada Medeea 1A, Contanta</div>
        </div>
        <iframe
          id="home-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11447.937554508204!2d28.5983005!3d44.1661813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa67bd9768e231959!2sEST%20BIKE%20ADVENTURE!5e0!3m2!1sro!2sro!4v1664964531380!5m2!1sro!2sro"
          width="300"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import BrandList from '../components/BrandList.vue';
import Card from "../components/Card.vue";
import HooperCarousel from "../components/HooperCarousel.vue";
// @ is an alias to /src

export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      selectedBrand: "honda",
    };
  },
  methods: {
    
    handleScroll(event) {
      let header = document.getElementsByTagName("header")[0];
      if (
        event.target.documentElement.scrollTop > 0 &&
        event.target.documentElement.scrollTop <= 1
      ) {
        header.classList.add("wide-header");
      } else if (event.target.documentElement.scrollTop === 0) {
        header.classList.remove("wide-header");
      }
    },
  },
  components: { Card, HooperCarousel, BrandList },
  computed: {
    homeModels: {
      get(){
        let models = [];
        for (const moto of this.$store.state.moto) {
          if(moto.brand == this.$store.state.activeBrand){
            models.push(moto);
          }
        }
        return models.slice(0, 8);
      },
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

.home h2 {
  margin: 5rem auto 5rem auto;
  font-size: 3rem;
}
.gradient-overlay {
  position: absolute;
  width: 100%;
  height: 20%;
  z-index: 1;
  opacity: 0.5;
  pointer-events: none;
}

#gradient-bottom {
  background: linear-gradient(to top, $dark-shade, transparent);
  bottom: 0;
}
#gradient-top {
  background: linear-gradient(to bottom, $dark-shade, transparent);
  top: 0;
}

#slider-container {
  border-bottom: 10px solid $main;
}

#models-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

#home-models {
  width: 90%;
  margin: auto;
}

.models-redirect {
  width: 100%;
  text-align: center;
  margin-top: 3rem;
  a {
    color: $dark-shade;
    font-size: 1.5rem;
    text-align: center;
  }
}


#home-contact {
  width: 90%;
  margin: auto;
}

#home-contact-container {
  display: flex;
  justify-content: center;
  iframe {
    margin-left: 1rem;
  }
}

.home-contact-wrapper {
  width: 300px;
  height: 300px;
  display: flex;
  flex-flow: column;
  margin: 0 1rem;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
}

#instagram-contact {
  background: #08bdbd;
}
#facebook-contact {
  background: #1877f2;
}
#general-contact {
  background: $main;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-top: 1rem;
}

.contact-handle {
  color: white;
  margin-top: 0.2rem;
  a {
    color: white;
  }
}

.contact-follow {
  border: 2px solid white;
  padding: 0.7rem 1rem;
  margin-top: 1.5rem;
  a {
    color: white;
    text-decoration: none;
  }
}

.fa-instagram,
.fa-facebook {
  width: 5rem;
  height: 5rem;
  color: white;
}

.fa-envelope,
.fa-address-card {
  width: 2rem;
  height: 2rem;
}
</style>
