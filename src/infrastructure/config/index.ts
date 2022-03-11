import dotenv from 'dotenv'
import Joi from 'joi'

dotenv.config()

interface ConfigInfo {
  NODE_ENV: string
  PORT: number
  DB_URI: string,
  MONGO_DB: string,
  MONGO_PORT: string,
  MONGO_USER: string,
  MONGO_PASS: string,
  MONGO_DB_AUTH: string,
  MONGO_HOSTNAME: string,
}

function loadConfig() {
  const configSchema = Joi.object<ConfigInfo>({
    NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
    PORT: Joi.number().required(),
    DB_URI: Joi.string().uri().required(),
    MONGO_USER: Joi.string().required(),
    MONGO_PASS: Joi.string().required(),
    MONGO_PORT: Joi.string().required(),
    MONGO_DB: Joi.string().required(),
    MONGO_HOSTNAME: Joi.string(),
    MONGO_DB_AUTH: Joi.string().required()
  })

  const {error, value} = configSchema.validate(process.env, {allowUnknown: true})
  console.log('- Environment variables loaded...')

  if (error) throw error
  return {...value} as ConfigInfo
}

export {loadConfig}
