if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import Model from './model'

export const getById = ({ id }, context, callback) => {
  const handleError = err =>  {
    if (err) callback(JSON.stringify({
      statusCode: 500,
      errorMsg: err
    }), null)
  }

  Model.get({ id })
    .then(item => {
      if (!item) callback(null, {
        statusCode: 400,
        item:  {},
        msg: 'Item does not exist'
      })
      
      const response = {
        statusCode: 200,
        item
      }
    
      callback(null, response)
    })
    .catch(handleError)
};
