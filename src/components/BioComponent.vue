<script>
export default {
  name: 'BioComponent',
  props: {
    isMobile: Boolean
  }
}
</script>

<template>
  <div class="em-container">
    <div class="container d-flex align-items-center">
      <p :class="{'big-padding' : !isMobile}">
        Alice Caronna è una cantautrice e Sound Designer di Roma. Nel 2018, poche settimane dopo essersi laureata in “Sound Design” allo IED di Roma, Alice vince il contest “Arderemo” che le ha permesso di suonare sul palco dell’Ardeforte in compagina di artisti come i Zen Circus, Gemello, Lucci, Giancane e altri. Il 12 marzo del 2019 ha pubblicato il suo primo Ep “Alba” su tutte le piattaforme digitali musicali, la cui presentazione ha fatto sold out nel famoso locale romano “Le Mura”. È stata ospite in varie realtà, come a “Sanremo On”, dove ha presentato il suo primo singolo; in Radio Rai 1, Radio Rock, Radio Centro Suono 101.5, Radio Radio 104.5 per interviste; in Piazza del Popolo e in Piazza Venezia durante la manifestazione a sostegno dell’ambiente “Friday for future”, dove ha suonato prima del discorso di Greta Thunberg ed è stata inoltre ospite presso radio SER Catalunya nella città di Barcellona. Nel gennaio del 2022 vince il primo Nuovo Imaie che le permetterà di realizzare a breve un tour in molte città italiane. Mentre si muove come organizzatrice di eventi e collaboratrice attiva per l’etichetta discografica Sono Music Group, Alice sta lavorando al suo primo album in compagnia del produttore Renato D’Amico (Postino, Emma Nolde, Ilaria).
      </p>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container {
  // height: 100vh;
  background-color: $muted-bg-color;
}

p {
  border-top: 1px solid $accent-bg-color;
  border-bottom: 1px solid $accent-bg-color;
  color: $primary-bg-color;
  font-size: 1.2rem;
  padding: 2rem 0;
}

.big-padding {
  padding: 5rem 0;
  font-size: 2rem;
}


</style>