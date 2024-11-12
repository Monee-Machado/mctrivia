import { AppState } from "../AppState.js"
import { mcService } from "../services/McService.js"



export class McController {
  constructor() {
    console.log('🍟🎮')
    AppState.on('mcQuestions', this.drawMcQuestions)
    this.fetchMcQuestions()
  }


  async fetchMcQuestions() {
    await mcService.fetchMcQuestions()
  }

  drawMcQuestions() {
    console.log('✏🍔')
    const mcQuestionListElm = document.getElementById('McQuestion-List')
    mcQuestionListElm.innerHTML = ''
    AppState.mcQuestions.forEach(mcQuestion => mcQuestionListElm.innerHTML += mcQuestion.Card)
  }


}




