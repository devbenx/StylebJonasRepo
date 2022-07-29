import { MongoClient } from 'mongodb'

const uri = 'mongodb+srv://stylebjonas:PnmPkL073kmvee0c@cluster0.4jeba.mongodb.net/?retryWrites=true&w=majority'
const options = {}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri, options)
clientPromise = client.connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
