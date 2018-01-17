if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import Model from './model'
import initialLoad from './initialLoad'

export const initFill = (event, context, callback) => {
  const handleError = err =>  {
    if (err) callback(JSON.stringify({
      statusCode: 500,
      errorMsg: err
    }), null)
  }

  Model.batchPut(initialLoad)
    .then(() => Model.scan().exec())
    .then(items => {
      const response = {
        statusCode: 200,
        items
      }
    
      callback(null, response)
    })
    .catch(handleError)
};
