const storage = require('azure-storage')
const service = storage.createTableService("magazynania1", "zZZA2roghfGt4ZAJfs4J88V8s0HcBI1Z6qy/rqNybfM1NvWcfppvP3px9qzFgYBgeq1PdVrx8hULf/Q7CXGACA==")
const table = 'tasks'

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}