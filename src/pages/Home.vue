<template>
  <transition name="fade" appear>
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
  </transition>

  <transition name="fade" appear>
    <div v-if="showDialogConfirm">
      <div class="dialog">
        <div class="dialog__content">
          <h2 class="dialog__title">Eba!!!</h2>
          <h3 class="dialog__subtitle">Que cringe, não?</h3>
          <p class="dialog__text">
            Antes de você falar: "nossa, Caio, não precisava me pedir em namoro
            de novo", vamos fazer um "tour"?
          </p>
          <button class="dialog__button" @click="$router.push('message')">
            Tá bom, tá bom...
          </button>
        </div>
        <div class="dialog__subcontent">
          <button
            v-if="!showSubcontent"
            class="subcontent__button"
            @click="showSubcontent = true"
          >
            Ver conteúdo (Cuidado!)
          </button>
          <template v-else>
            <img
              src="../assets/img/pokeball-image.png"
              alt="Pokeball Image"
              class="subcontent__image"
            />
            <p class="subcontent__text">
              Não sou um mestre pokémon, mas queria estar capturando seus
              peitos. Ops, beijos...
            </p>
            <p class="subcontent__joke">
              Eu sei, o pae manja muito nas cantadas.
            </p>
            <p class="subcontent__observation">
              * Errei sem querer. O orçamento para arrumar o HTML estava curto.
            </p>
          </template>
        </div>
      </div>
      <div class="dialog__background" @click="showDialogConfirm = false"></div>
    </div>
  </transition>
  <template v-if="showDialogDeny && clickCount === 4">
    <div class="dialog-deny">
      <div class="dialog__content-deny">
        <h2 class="dialog__title">Ops!!!</h2>
        <h3 class="dialog__subtitle">Clicou errado, não?</h3>
        <p class="dialog__text">
          Todos cometemos erros. Acredito que você leu errado, hein. Ai, ai, ai,
          minha crazy perfect.
        </p>
        <button class="dialog__button" @click="showDialogDeny = false">
          Vou clicar certo...
        </button>
      </div>
    </div>
    <div
      v-if="showDialogDeny"
      class="dialog__background"
      @click="showDialogDeny = false"
    ></div>
  </template>
  <template v-if="showDialogDeny && clickCount === 3">
    <div class="dialog-deny">
      <div class="dialog__content-deny">
        <h2 class="dialog__title">Alo???</h2>
        <h3 class="dialog__subtitle">Terra chamando Bi</h3>
        <p class="dialog__text">
          Está tudo OK com a sua visão? Gente, segunda vez que você clica no
          "NÃO". Clique certo, viu. O botão correto fica do lado que não tem
          cachorro.
        </p>
        <button class="dialog__button" @click="showDialogDeny = false">
          Agora entendi. Lado que não tem cachorro
        </button>
      </div>
    </div>
    <div
      v-if="showDialogDeny"
      class="dialog__background"
      @click="showDialogDeny = false"
    ></div>
  </template>
  <template v-if="showDialogDeny && clickCount === 2">
    <div class="dialog-deny">
      <div class="dialog__content-deny">
        <h2 class="dialog__title">??????</h2>
        <h3 class="dialog__subtitle">Você quer recusar?</h3>
        <p class="dialog__text">
          Você clicou no "NÃO". Repito: "NÃO" pela terceira vez! Acredito que a
          gostosura está afetando o seu cérebro. Clique certoooo. Lado D I R E I
          T O.
        </p>
        <button class="dialog__button" @click="showDialogDeny = false">
          OK. Minha gostosura afetou o cérebro
        </button>
      </div>
    </div>
    <div
      v-if="showDialogDeny"
      class="dialog__background"
      @click="showDialogDeny = false"
    ></div>
  </template>
  <template v-if="showDialogDeny && clickCount === 1">
    <div class="dialog-deny">
      <div class="dialog__content-deny">
        <h2 class="dialog__title">Eita...</h2>
        <h3 class="dialog__subtitle">Agora foi erro meu...</h3>
        <p class="dialog__text">
          Todos cometemos erros. Eu disse o lado direito mas você não sabe
          diferenciar. Mais fácil: Lado que está escrito “Sim”.
        </p>
        <button class="dialog__button" @click="showDialogDeny = false">
          Entendi, meu amor
        </button>
      </div>
    </div>
    <div
      v-if="showDialogDeny"
      class="dialog__background"
      @click="showDialogDeny = false"
    ></div>
  </template>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showYesButton: false,
      clickCount: 5,
      showDialogDeny: false,
      showDialogConfirm: false,
      showSubcontent: false,
    };
  },
  methods: {
    handleDenyClick() {
      --this.clickCount;
      if (this.clickCount === 1) {
        this.showYesButton = true;
      }
      this.showDialogDeny = true;
    },
  },
  mounted() {
    console.log("Tá olhando o que aqui? Sua linda. Te amo.");
  },
};
</script>

<style scoped>
@import url("../assets/css/home/homeStyle.css");
@import url("../assets/css/transitionsStyle.css");
</style>
