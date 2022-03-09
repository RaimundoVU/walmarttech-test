import mongoose from 'mongoose'

interface MongoDBConnectionOptions {
  dbUri: string
}

export function loadDBConnection({dbUri}: MongoDBConnectionOptions, {dbOptions}: any) {
  let db: typeof mongoose | undefined = undefined

  return {
    start: async () => {
      db = await mongoose.connect(dbUri, {
        user: dbOptions.user,
        pass: dbOptions.pass,
        authSource: dbOptions.authSource,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('- Connected to MongoDB')
    },
    close: async () => {
      if (db) await db.disconnect()
      console.log('- Closed MongoDB connection')
    },
  }
}
