<template>
  <div class="service">
    <h1 class="title">Service</h1>
    <p>
      Acum ai posibilitatea să îți programezi motocicleta, scuterul sau ATV-ul
      în Service-ul nostru. Completează atent formularul de mai jos cu datele
      necesare iar colegii noștri te vor contacta pentru a stabili ziua și ora
      rezervării.
    </p>
    <div id="service-form">
      <h2 class="title">Cerere Service</h2>
      <div class="form-wrapper">
        <div class="form-container">
          <label>
            <b-form-input type="text" class="service-input" placeholder="Nume*" />
          </label>
          <label>
            <b-form-input type="text" class="service-input" placeholder="Prenume*" />
          </label>
          <label>
            <b-form-input type="text" class="service-input" placeholder="Email*" />
          </label>
          <label>
            <b-form-input type="text" class="service-input" placeholder="Adresa*" />
          </label>
        </div>
        <div class="form-container">
          <label>
            <b-form-input type="text" class="service-input" placeholder="Telefon*" />
          </label>
          <label>
            <b-form-input
              type="text"
              class="service-input"
              placeholder="Punct de lucru*"
            />
          </label>
          <label>
            <b-form-input
              type="text"
              class="service-input"
              placeholder="Tip Vehicul*"
            />
          </label>
          <label>
            <b-form-input type="text" class="service-input" placeholder="Marca*" />
          </label>
        </div>
        <div class="form-container">
          <label>
            <b-form-input type="text" class="service-input" placeholder="Model*" />
          </label>
          <label>
            <b-form-input
              type="text"
              class="service-input"
              placeholder="An fabricatie*"
            />
          </label>
          <label>
            <b-form-input
              type="text"
              class="service-input"
              placeholder="Capacitate Cilindrica*"
            />
          </label>
          <label>
            <b-form-input
              type="text"
              class="service-input"
              placeholder="Serie cadru*"
            />
          </label>
        </div>
      </div>
      <div class="form-container">
        <h2 class="title">Selecteaza operatiuni service</h2>
        <div class="service-check-container">
          <label>
            <input type="checkbox" class="service-check" />
            <div>Limitare A2 (35kW)</div>
          </label>
          <label>
            <input type="checkbox" class="service-check" />
            <div>Schimb ulei si filtru</div>
          </label>
          <label>
            <input type="checkbox" class="service-check" />
            <div>Schimb filtru de aer</div>
          </label>
          <label>
            <input type="checkbox" class="service-check" />
            <div>Curatat si ungere lant</div>
          </label>
        </div>
        <div class="service-check-container">
          <label>
            <input type="checkbox" class="service-check" />
            <div>Schimb bujii</div>
          </label>
          <label>
            <input type="checkbox" class="service-check" />
            <div>Revizie furca</div>
          </label>
          <label>
            <input type="checkbox" class="service-check" />
            <div>Reglaj carburatoare</div>
          </label>
          <label>
            <input type="checkbox" class="service-check" />
            <div>Schimb kit lant</div>
          </label>
        </div>
        <div class="service-check-container">
          <label>
            <input type="checkbox" class="service-check" />
            <div>Verificat aliniament roti</div>
          </label>
          <label>
            <input type="checkbox" class="service-check" />
            <div>Probleme racire motor</div>
          </label>
          <label>
            <input type="checkbox" class="service-check" />
            <div>Probleme instalatia electrica</div>
          </label>
          <label>
            <input type="checkbox" class="service-check" />
            <div>Schimb placute frana</div>
          </label>
        </div>
      </div>
      <div class="form-container">
        <textarea cols="30" rows="10" placeholder="Alte operatiuni..."></textarea>
      </div>
    </div>
    <button class="service-button">Trimite</button>
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
textarea {
  resize: none;
    font-size: 1rem;
}
.service {
  h1 {
    font-family: "Oswald";
  }
  h2 {
    border-bottom: none;
  }
  p {
    font-size: 1.3rem;
  }
  width: 70%;
  margin: 80px auto 0 auto;
  font-family: "OpenSans";
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

#service-form {
  width: 60%;
  display: flex;
  flex-flow: column wrap;
  padding: 0.5rem;
  justify-content: center;
  font-family: "Oswald";
  border-top: 2px solid $dark-shade;
  border-bottom: 2px solid $dark-shade;
}

.form-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  label {
    margin: 1rem;
  }

  label div {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
}
.form-container {
  display: flex;
  flex-flow: column wrap;
  padding: 1rem 0;
  justify-content: center;
}

// .form-container:nth-child(2) {
//   border-left: 1px solid;
//   border-right: 1px solid;
// }
// .service-input {
//   border: none;
//   padding: 0.5rem;
//   border-bottom: 1px solid $dark-shade;
//   // border-left: 1px solid $dark-shade;
// }

.service-check-container {
  display: flex;
  justify-content: center;
  label {
    width: 12rem;
    display: flex;
    align-items: center;
    .service-check{
      width: 1rem;
      height: 1rem;
      margin-right: 5px;
    }
  }
}

.service-button {
  width: 20rem;
  font-size: 2rem;
  margin-top: 1rem;
  background: $main;
  color: $light-shade;
  border: 2px solid $dark-shade;
  cursor: pointer;
  font-family: "Oswald";
}
</style>