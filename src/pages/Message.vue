<template>
  <transition name="fade" appear>
    <main>
      <h1 class="message__title">Opa, interrompendo o tour...</h1>
      <h2 class="message__subtitle">
        Antes de irmos para o nosso tour, gostaria de dizer algumas palavras
        para você, meu amor.
      </h2>
      <div class="message__texts">
        <p class="message__text">
          Eu estava com a ideia desse projeto desde fevereiro, que foi quando eu
          montei o figma (sim, eu montei um figma). Estava com vontade de te
          fazer um negócio diferente. Não fiquei vários meses fazendo esse
          projeto, é claro. Queria fazer ele com calma, aos poucos. No momento
          em que escrevo este texto estou em uma call com você. Admirando sua
          voz doce e bela e escrevendo lembrando de nossos momentos felizes e
          tristes juntos. Espero conseguir entregar esse projeto para você no
          primeiro sábado que a gente se ver. Não sei como vou te entregar esse
          projeto ainda kkkkk, mas sei que você já comprou nossa aliança, e essa
          é uma forma de amor minha de tentar te agradar de um jeito
          equivalente. Sei que não é igual, mas tentei kkkk. Amor, nos próximos
          paragrafos irei tentar de uma maneira não cringe (o que é impossível)
          dizer o que eu sinto por você. Me esforçarei para montar um texto bom.
          Espero que goste.
        </p>
        <p class="message__text">
          Amor, você de verdade é uma pessoa muito importante para mim. Você é a
          pessoa na qual eu mais confio e já amei. Você me deu uma nova forma de
          enxergar o mundo. Você tem todas as qualidades possíveis em um ser
          humano: linda e gostosa (kkkkkk brincadeira, não é só isso.). Você é
          uma pessoa muito boazinha, inteligente, amo seu jeito, o como você
          fica feliz com os seus gostos, o jeito que você não gosta de falar
          palavrão, etc, etc... Não irei ficar listando aqui tudo o que você
          tem, senão o texto fica muito mais maçante e acredito que você também
          não gosta muito de elogios dessa forma.
        </p>
        <p class="message__text">
          Temos muitas coisas em comum, mas também muitas coisas no qual não
          concordamos (como na ordem de comer a comida kkk), e acredito que isso
          foi o que tornou nossa relação muito diferenciada das demais. É
          engraçado se lembrarmos que nenhum de nós dois queriamos um romance,
          mas no fim, depois de muitas, e muitas, e muitas ocorrências e
          coincidências e uma pitada de sorte, acabamos juntos e nos tornando um
          casal muito meloso kkkkk. Isso tudo, só de lembrar desde como nos
          conhecemos no primeiro dia, que foi eu te dando um susto tentando te
          ajudar, até o nosso primeiro beijo em uma estação de trêm, para mim, é
          uma coisa que irei guardar para sempre no meu coração, e espero que na
          memória também.
        </p>
        <p class="message__text">
          Para finalizar este longo e chato texto, gostaria de dizer que te amo
          muito, que é muito importante para mim e que me faz feliz todos os
          dias. Gostaria de ficar com você eternamente! Espero que tenha gostado
          pelo menos um pouco do meu texto que fiz aqui no improviso enquanto
          estávamos em uma call, mas também com o que eu verdadeiramente sinto
          por você.
        </p>
        <p class="message__text">
          Antes disso, na verdade, o que seria o "tour"? Ele basicamente é um
          compilado do que consegui juntar de todos os nossos momentos juntos.
          Obviamente não estão todos aí, mas foram os que eu consegui achar.
        </p>
      </div>
      <button class="message__button" @click="$router.push('/tour')">
        Ok, li tudo (Finalmente)
      </button>
    </main>
  </transition>
</template>

<script>
export default {
  name: "Message",
};
</script>

<style scoped>
@import url("../assets/css/message/messageStyle.css");
@import url("../assets/css/transitionsStyle.css");
</style>
