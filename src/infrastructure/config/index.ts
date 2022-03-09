import dotenv from 'dotenv'
import Joi from 'joi'

dotenv.config()

interface ConfigInfo {
  NODE_ENV: string
  PORT: number
  DB_URI: string,
  MONGO_DB_USER: string,
  MONGO_DB_PASS: string,
  MONGO_DB_AUTH: string,
}

function loadConfig() {
  const configSchema = Joi.object<ConfigInfo>({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    PORT: Joi.number().required(),
    DB_URI: Joi.string().uri().required(),
    MONGO_DB_USER: Joi.string().required(),
    MONGO_DB_PASS: Joi.string().required(),
    MONGO_DB_AUTH: Joi.string().required()
  })

  const {error, value} = configSchema.validate(process.env, {allowUnknown: true})
  console.log('- Environment variables loaded...')

  if (error) throw error
  return {...value} as ConfigInfo
}

export {loadConfig}
