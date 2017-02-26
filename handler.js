'use strict';
const Email = require('./sendemail.js');

module.exports.send = (event, context, callback) => {
  Email.sendEmail();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success!',
      input: event,
    }),
  };

  callback(null, response);
};
