<template>
  <main>
    <h1 class="home__title">
      Meu amor, <br />
      quer namorar comigo (de novo)?
    </h1>
    <div class="home__buttons">
      <button
        v-if="!showYesButton"
        class="home__button"
        @click="handleDenyClick"
      >
        Não
      </button>
      <button v-else class="home__button" @click="showDialogConfirm = true">
        Sim
      </button>
      <button class="home__button" @click="showDialogConfirm = true">
        Sim
      </button>
    </div>
  </main>
  <div v-if="showDialogConfirm" class="dialog">
    <div class="dialog__content">
      <h2 class="dialog__title">Eba!!!</h2>
      <h3 class="dialog__subtitle">Que brega, não?</h3>
      <p class="dialog__text">
        Antes de você falar: "nossa, Caio, não precisava me pedir em namoro de
        novo", vamos fazer um "tour"?
      </p>
      <button class="dialog__button">Tá bom, tá bom...</button>
    </div>
    <div class="dialog__subcontent">
      <button v-if="!showSubcontent" class="subcontent__button" @click="showSubcontent = true">
        Ver conteúdo (Cuidado!)
      </button>
      <template v-else>
        <img
          src="../assets/img/pokeball-iamge.png"
          alt="Pokeball Image"
          class="subcontent__image"
        />
        <p class="subcontent__text">
          Não sou um mestre pokémon, mas queria estar capturando seus peitos.
          Ops, beijos...
        </p>
        <p class="subcontent__joke">Eu sei, o pae manja muito nas cantadas.</p>
        <p class="subcontent__observation">
          * Errei sem querer. O orçamento para arrumar o HTML estava curto.
        </p>
      </template>
    </div>
  </div>
  <div v-if="showDialogConfirm" class="dialog__background" @click="showDialogConfirm = false"></div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showYesButton: false,
      clickCount: 3,
      showDialogConfirm: false,
      showSubcontent: false,
    };
  },
  methods: {
    handleDenyClick() {
      --this.clickCount;
      if (this.clickCount === 0) {
        this.showYesButton = true;
      }
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/home/homeStyle.css");
</style>
