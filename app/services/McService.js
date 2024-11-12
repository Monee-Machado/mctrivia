import { AppState } from "../AppState.js";
import { McQuestions } from "../models/McModel.js";


class McService {
  async fetchMcQuestions() {
    console.time('McFetching');
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
    let data = await response.json()
    console.log('data', data);

    const mcQuestions = data.results.map(mcQuestionData => new McQuestions(mcQuestionData))
    console.log('🍟🍔', mcQuestions)
    console.timeEnd('McFetching')
    AppState.mcQuestions = mcQuestions
  }



}

export const mcService = new McService()


