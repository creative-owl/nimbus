require('dotenv').config()
const { db, Http } = require('@c8o/nimbus-core')
const MainController = require('./Controllers/MainController')

exports.lambdaHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  await db.connect()
  const AppProcessResult = await new Http().route(event, context, MainController)
  await db.disconnect()

  return AppProcessResult
}
