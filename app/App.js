
import { McController } from "./controllers/McController.js";
const USE_ROUTER = false

class App {

  McController = new McController()

  // constructor() {
  //   if (USE_ROUTER) {
  //     this.router = router
  //     this.router.init(this)
  //   }
  // }

}

const app = new App()
// @ts-ignore
window.app = app
