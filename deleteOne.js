if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import Model from './model'

export const deleteOne = ({ id }, context, callback) => {
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
        message: 'Item does not exist or it was already deleted'
      })

      item.delete()
        .then(() => {
          const response = {
            statusCode: 200,
            message: 'Item succesfully deleted'
          }
        
          callback(null, response)
        })
    })
};
