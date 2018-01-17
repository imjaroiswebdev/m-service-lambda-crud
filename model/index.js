if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import dynamoose from 'dynamoose'
import uuid from 'uuid/v1'

const { Schema } = dynamoose

const modelSchema = new Schema({
  id: {
    type: String,
    hashKey: true
  },
  name: {
    type: String,
    default: 'Item name'
  }
})

productSchema.methods.store = function(options) {
  const item = this

  item.id = uuid()

  return new Promise((resolve, reject) => {
    item.save(options)
      .then(item => resolve(item))
      .catch(err => reject(err))
  })
}

export default dynamoose.model(process.env.DYNAMODB_TABLE, modelSchema, { create: false })