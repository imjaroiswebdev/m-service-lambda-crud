if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import Model from './model'

export const updateOne = (event, context, callback) => {
  const handleError = err =>  {
    if (err) callback(JSON.stringify({
      statusCode: 500,
      errorMsg: err
    }), null)
  }

  const {
    id,
    name
  } = event

  const update = Object.assign(
    {},
    typeof name !== 'undefined' && { name },
  )
  
  Model.update({ id }, update)
    .then(item => {
      const response = {
        statusCode: 200,
        id: item.id,
        name: item.name
      }
    
      callback(null, response)
    })
    .catch(handleError)
};
