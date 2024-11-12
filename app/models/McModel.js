

export class McQuestions {
  constructor(data) {
    this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers

  }

  // Card, but the example is coming from the lab example html
  get Card() {
    return `
        <div class="col-6 col-md-3">
        <div class="card p-5 m-3">
          <div class="card-body text-center">
          <h4> ${this.category} </h4>
          <p class="text-start text-center">${this.question}</p>
          </div>
        </div>
      </div>
    
    `

  }

}