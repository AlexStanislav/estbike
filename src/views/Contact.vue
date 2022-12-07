<template>
  <div class="contact">
    <h1>Contact</h1>
    <div class="contact-wrapper">
      <div class="contact-info">
        <h2>Nu ezitați să ne contactați</h2>
        <div class="contact-info-wrapper">
          <div class="info-row">
            <div class="info-picto">
              <img
                :src="require('@/assets/img/phone-white.png')"
                alt="Logo EstBike"
              />
            </div>
            <div class="info-content"><a href="https://wa.me/0733782453" target="_blank">+40 733 782 453</a></div>
          </div>
          <div class="info-row">
            <div class="info-picto">
              <img
                :src="require('@/assets/img/phone-white.png')"
                alt="Logo EstBike"
              />
            </div>
            <div class="info-content"><a href="https://wa.me/0774515065" target="_blank">+40 774 515 065</a></div>
          </div>
          <div class="info-row">
            <div class="info-picto">
              <font-awesome-icon icon="fas fa-envelope" />
            </div>
            <div class="info-content">
              <a href="mailto:office@estbike.ro">office@estbike.ro</a>
            </div>
          </div>
          <div class="info-row">
            <div class="info-picto">
              <font-awesome-icon icon="fas fa-envelope" />
            </div>
            <div class="info-content">
              <a href="mailto:campina@estbike.ro">campina@estbike.ro</a>
            </div>
          </div>
          <div class="info-row">
            <div class="info-picto">
              <font-awesome-icon icon="fas fa-address-card" />
            </div>
            <div class="info-content">Strada Medeea 1A, Contanta</div>
          </div>
          <div class="info-row">
            <div class="info-picto">
              <font-awesome-icon icon="fas fa-address-card" />
            </div>
            <div class="info-content">Strada Șelimbăr nr. 10, Comuna Brebu</div>
          </div>
          <div class="info-row">
            <div class="info-picto">
              <font-awesome-icon icon="fas fa-address-card" />
            </div>
            <div class="info-content">
              Strada Pescarilor PA7 Parter, Contanta
            </div>
          </div>
          <div class="social-media">
              <div class="main-contact-wrapper" id="instagram-contact">
                <font-awesome-icon
                  icon="fa-brands fa-instagram"
                ></font-awesome-icon>
                <div class="contact-title">INSTAGRAM</div>
                <div class="contact-handle">@estbike</div>
                <div class="contact-follow">
                  <a href="https://www.instagram.com/estbike/">FOLLOW</a>
                </div>
              </div>
              <div class="main-contact-wrapper" id="facebook-contact">
                <font-awesome-icon icon="fa-brands fa-facebook"></font-awesome-icon>
                <div class="contact-title">FACEBOOK</div>
                <div class="contact-handle">Est Bike Adventure</div>
                <div class="contact-follow">
                  <a href="https://www.facebook.com/estbike.ro">FOLLOW</a>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="maps">
        <h2>Locațiile noastre</h2>
        <div class="iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11447.937554508204!2d28.5983005!3d44.1661813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa67bd9768e231959!2sEST%20BIKE%20ADVENTURE!5e0!3m2!1sro!2sro!4v1664964531380!5m2!1sro!2sro"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11250.472360489086!2d25.7747136!3d45.174583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b60a315be9c5724!2sEST%20BIKE%20Campina!5e0!3m2!1sro!2sro!4v1664964232514!5m2!1sro!2sro"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.4289457603763!2d28.653765300000007!3d44.1982312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bafb75dc353631%3A0x8a4044ca53f132a1!2sEst%20Bike%20Funky%20Sports!5e0!3m2!1sro!2sro!4v1664984674764!5m2!1sro!2sro"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.EventBus.dispatch('sectionnothome')
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.contact {
  width: 90%;
  margin: 80px auto 0 auto;
  h1,
  h2 {
    width: 80%;
    text-align: center;
    margin: 2vh auto;
    border-bottom: 1px solid;
  }
}

.contact-wrapper {
  display: flex;
}
.contact-info,
.maps {
  width: 40vw;
}

.maps iframe {
  margin: 1rem 0;
  border: 2px solid $light-accent !important;
}

.contact-info-wrapper {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

.info-row {
  width: 80%;
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.info-picto {
  background: $main;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  color: white;
}
.info-content {
  font-size: 1.5rem;
  color: $main;
  a {
    text-decoration: none;
    color: $main;
  }
}

.social-media{
    display: flex;
}

.main-contact-wrapper{
  width: 270px;
  height: 270px;
  display: flex;
  flex-flow: column;
  margin: 3rem 0.5rem;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
}
</style>