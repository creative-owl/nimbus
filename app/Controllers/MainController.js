const { Controller } =require('@c8o/nimbus-core')

class MainController extends Controller {
  async get(Request, Response) {
    return Response.json(200, {}, {})
  }

  async options(Request, Response) {
    return Response.json(204, {})
  }
}

module.exports = MainController
