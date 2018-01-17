if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import Model from './model'

export const listAll = ({ limit }, context, callback) => {
  const handleError = err =>  {
    if (err) callback(JSON.stringify({
      statusCode: 500,
      errorMsg: err
    }), null)
  }

  Model.scan().limit(limit = null).exec()
    .then(items => {
      const response = {
        statusCode: 200,
        items
      }
    
      callback(null, response)
    })
    .catch(handleError)
};
