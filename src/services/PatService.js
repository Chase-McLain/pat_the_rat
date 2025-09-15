import { AppState } from "@/AppState.js"



class PatService{
  

  collectAutoPats(){
    AppState.totalPats += AppState.AutoPatPower
  }

  pat() {
    AppState.totalPats += AppState.patsPerClick
  }
  buyClickUpgrade(clickname) {
   let clickgrade = AppState.Clicks.find((click) => click.name == clickname)
    if (AppState.totalPats < clickgrade.cost) {
      return
    } 
    AppState.totalPats -= clickgrade.cost
    AppState.patsPerClick += clickgrade.power
    clickgrade.cost += clickgrade.priceIncrease
    clickgrade.lvl += 1

  }
  
  buyAutoUpgrade(autoname) {
    let autograde = AppState.Autos.find((auto) => auto.name == autoname)
    if (AppState.totalPats < autograde.cost) {
      return
    }
    AppState.totalPats -= autograde.cost
    AppState.AutoPatPower += autograde.power
    autograde.cost += autograde.priceIncrease
    autograde.lvl += 1

  }

}






export const patService = new PatService()





