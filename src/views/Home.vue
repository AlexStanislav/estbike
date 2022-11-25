<template>
  <div class="home">
    <div id="slider-background"></div>
    <image-slider />
    <div id="popular-container">
      <h2>Modele populare</h2>
      <popular-cards />
    </div>
    <div id="home-models">
      <h2>Descoperă modele</h2>
      <div id="models-container">
        <card v-for="(moto, index) of homeModels" :key="index" :data="moto"></card>
      </div>
      <div class="models-redirect">
        <router-link to="/models">Mai multe...</router-link>
      </div>
    </div>
    <div id="home-contact">
      <h2>Nu ezitați să luați legatura cu noi</h2>
      <div id="home-contact-container">
        <div class="home-contact-wrapper" id="instagram-contact">
          <font-awesome-icon icon="fa-brands fa-instagram"></font-awesome-icon>
          <div class="contact-title">
            INSTAGRAM
          </div>
          <div class="contact-handle">
            @estbike
          </div>
          <div class="contact-follow">
            <a href="https://www.instagram.com/estbike/">FOLLOW</a>
          </div>
        </div>
        <div class="home-contact-wrapper" id="facebook-contact">
          <font-awesome-icon icon="fa-brands fa-facebook"></font-awesome-icon>
          <div class="contact-title">
            FACEBOOK
          </div>
          <div class="contact-handle">
            Est Bike Adventure
          </div>
          <div class="contact-follow">
            <a href="https://www.facebook.com/estbike.ro">FOLLOW</a>
          </div>
        </div>
        <div class="home-contact-wrapper" id="general-contact">
          <div class="contact-handle"><img :src="require('@/assets/img/phone-white.png')" alt="Logo EstBike"/></div>
          <div class="contact-handle">+40 733 782 453</div>
          <br>
          <div class="contact-handle"><font-awesome-icon icon="fas fa-envelope" /></div>
          <div class="contact-handle"><a href="mailto:office@estbike.ro">office@estbike.ro</a></div>
          <br>
          <div class="contact-handle"><font-awesome-icon icon="fas fa-address-card" /></div>
          <div class="contact-handle">Strada Medeea 1A, Contanta</div>
        </div>
        <iframe id="home-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11447.937554508204!2d28.5983005!3d44.1661813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa67bd9768e231959!2sEST%20BIKE%20ADVENTURE!5e0!3m2!1sro!2sro!4v1664964531380!5m2!1sro!2sro" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <!-- Campina
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11250.472360489086!2d25.7747136!3d45.174583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b60a315be9c5724!2sEST%20BIKE%20Campina!5e0!3m2!1sro!2sro!4v1664964232514!5m2!1sro!2sro" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
        Biciclete
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.4289457603763!2d28.653765300000007!3d44.1982312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bafb75dc353631%3A0x8a4044ca53f132a1!2sEst%20Bike%20Funky%20Sports!5e0!3m2!1sro!2sro!4v1664984674764!5m2!1sro!2sro" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import ImageSlider from '../components/ImageSlider.vue';
import PopularCards from '../components/PopularCards.vue';
// @ is an alias to /src

export default {
  components: { PopularCards, ImageSlider, Card },
  computed:{
    homeModels(){
      let models = []
      for (let i=0;i<8;i++) {
        models.push(this.$store.state.moto[i])
      }
      return models
    }
  }
 
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";


.home h2 {
  width: 80%;
  margin: 2rem auto 2rem auto;
  text-align: center;
  border-bottom: 1px solid;
  padding-bottom: 0.2rem;
}

#slider-background{
  top: 0;
  left: 0;
  width: 100%;
  height: 43rem;
  background: $dark-shade;
  position: absolute;
  z-index: -1;
}

#models-container{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.models-redirect{
  width: 100%;
  text-align: center;
  margin-top: 3rem;
  a{
    color: $dark-shade;
    font-size: 1.5rem;
    text-align: center;
  }
}

#home-contact-container{
  display: flex;
}

.home-contact-wrapper{
  width: 300px;
  height: 300px;
  display: flex;
  flex-flow: column;
  margin: 0 1rem;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
}

#instagram-contact{
  background: #08bdbd;
}
#facebook-contact{
  background: #1877F2;
}
#general-contact{
  background: $main;
}

.contact-title{
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-top: 1rem;
}

.contact-handle{
  color: white;
  margin-top: 0.2rem;
  a{
    color: white;
  }
}

.contact-follow{
  border: 2px solid white;
  padding: 0.7rem 1rem;
  margin-top: 1.5rem;
  a{
    color: white;
    text-decoration: none;
  }
}

.fa-instagram, .fa-facebook{
  width: 5rem;
  height: 5rem;
  color: white;
}

.fa-envelope, .fa-address-card{
  width: 2rem;
  height: 2rem;
}
</style>
