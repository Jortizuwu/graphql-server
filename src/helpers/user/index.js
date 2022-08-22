const { UserModel } = require('../../models')

const findUserByNickName = async (nickName) => {
  return await UserModel.findOne({ where: { nickName } })
}

const userExist = async (uid) => {
  return await UserModel.findByPk(uid)
}

module.exports = { findUserByNickName, userExist }
