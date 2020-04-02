const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db/blog.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ blogs: [], users: [] })
  .write()

db.set('users', [{
  username: 'admin',
  password: 'liyajie920112',
  nickName: 'LiYajie'
}]).write()

module.exports = db
