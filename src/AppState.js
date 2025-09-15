import { reactive } from 'vue'
import { Click } from './models/Click.js'
import { Auto } from './models/Auto.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({


  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,

  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  patsPerClick: 1,

  totalPats: 0,

  AutoPatPower: 0,

  Clicks: [
    new Click({
      name: 'Extra Finger',
      cost: 10,
      power: 1,
      lvl: 1,
      priceIncrease: 2
    }),

    new Click({
      name: 'Extra Hand',
      cost: 100,
      power: 10,
      lvl: 1,
      priceIncrease: 20
    })
  ],

  Autos: [
    new Auto({
      name: 'Robot Finger',
      cost: 1000,
      power: 100,
      lvl: 1,
      priceIncrease: 500
    }),

    new Auto({
      name: 'Robot Hand',
      cost: 10000,
      power: 1000,
      lvl: 1,
      priceIncrease: 1000
    })
  ]

})

