<script setup>
import { AppState } from './AppState.js';
import { RouterView } from 'vue-router';
import { patService } from './services/PatService.js';

function pat() {
  // console.log('pat')
  patService.pat()
}

setInterval(patService.collectAutoPats, 1000 * 3)

function buyClickUpgrade(clickname) {
  // console.log('buying click upgrade', clickname)
  patService.buyClickUpgrade(clickname)
}

function buyAutoUpgrade(autoname) {
  // console.log('buying auto upgrade', autoname)
  patService.buyAutoUpgrade(autoname)
}

</script>




<template>

  <header class="container">
    <section class="row">
      <div class="col text-center rat-title">
        <h1>
          <span class="mdi mdi-hand-wave-outline"></span> <span class="mdi mdi-cheese"></span> Pat The Rat
          <span class="mdi mdi-cheese"></span> <span class="mdi mdi-hand-wave-outline"></span>
        </h1>
      </div>
    </section>
  </header>




  <main class="container">
    <RouterView />

    <!-- The Rat Named Pat -->

    <section class="row text-center">
      <div class="col rat">
        <img @click="pat()" class="img-fluid"
          src="https://png.pngtree.com/png-vector/20250115/ourmid/pngtree-cartoon-rat-png-image_15109234.png"
          alt="pat the rat">
      </div>
    </section>

    <!-- Pat Counters -->

    <section class="row text-center rat-title">
      <div class="col-md-12">
        <h3>Rats Patted: {{ AppState.totalPats }}</h3>
      </div>
      <div class="col-md-6">
        <h4>
          Pats Per Click: {{ AppState.patsPerClick }}
        </h4>
      </div>
      <div class="col-md-6">
        <h4>
          Auto Pat Power: {{ AppState.AutoPatPower }}
        </h4>
      </div>
    </section>

    <!-- Upgrades Section -->

    <section class="row text-center rat-title">
      <div v-for="click in AppState.Clicks" :key="click.name" class="col-md-6">
        <span>
          <button @click="buyClickUpgrade(click.name)" class="btn btn-info">
            {{ click.name }}: {{ click.cost }}
          </button>
          <p>
            Lvl: {{ click.lvl }}
          </p>
        </span>
        <!-- <span>
          <button class="btn btn-info">
            {{ AppState.Clicks[1].name }}: {{AppState.Clicks[1].cost}}
          </button>
          <p>
            Lvl: {{ AppState.Clicks[1].lvl }}
          </p>
        </span> -->
      </div>

      <div v-for="auto in AppState.Autos" :key="auto.name" class="col-md-6">
        <span>
          <button @click="buyAutoUpgrade(auto.name)" class="btn btn-info">
            {{ auto.name }}: {{ auto.cost }}
          </button>
          <p>
            Lvl: {{ auto.lvl }}
          </p>
        </span>
        <!-- <span>
          <button class="btn btn-info">
            {{ AppState.Autos[1].name }}: Cost Here
          </button>
          <p>
            Lvl: 1
          </p>
        </span> -->
      </div>
    </section>




  </main>





  <footer class=" text-center rat-title">
    Made with <i class="mdi mdi-heart text-pink"></i> by Supreme Rat Farmer
  </footer>

</template>




<style lang="scss">
.rat-title {
  color: yellow;
  text-shadow: 2px 2px 2px rgb(0, 123, 205);
}

.rat {
  color: yellow;
  user-select: none;
  cursor: grab;
  transition: all 0.1s ease;
}

.rat:active {
  cursor: grabbing;
  transform: scale(1.03);
}
</style>
