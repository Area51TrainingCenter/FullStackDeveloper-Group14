const yenv = require("yenv")
const env = yenv()

const connectionString = `mongodb+srv://${env.DB.USER}:${env.DB.PWD}@${env.DB.HOST}/${env.DB.NAME}?retryWrites=true&w=majority`

export { connectionString }