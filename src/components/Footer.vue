<template>
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
          <div class="footer-info-content"><a href="https://wa.me/0733782453" target="_blank">+40 733 782 453</a></div>
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
        <div class="footer-info">
          <router-link to="/rabla">Rabla</router-link>
        </div>
        <div class="footer-info">
          <router-link to="/service">Service</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

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
</style>