const md5 = require('crypto-js/md5')
const jwt = require('jsonwebtoken')

const accessTokenExp = 60 * 60 * 24 // 24h

const secretStr = 'blog!@#secret'
function getMd5(str) {
  return md5(str).toString()
}

function getToken(data) {
  return jwt.sign({
    exp: Math.floor(Date.now() / 1000) + accessTokenExp, // 24h后过期
    data
  }, secretStr)
}

function decodeToken(token) {
  return jwt.decode(token)
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretStr, (err, decoded) => {
      if (err) {
        /*
          err = {
            name: 'TokenExpiredError',
            message: 'jwt expired',
            expiredAt: 1408621000
          }
        */
        reject(err)
      }
      resolve(decoded)
    })
  })
}

module.exports = {
  getMd5,
  getToken,
  verifyToken,
  decodeToken
}
