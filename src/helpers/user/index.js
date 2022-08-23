const { UserModel } = require('../../models')

const findUserByNickName = async (nickName) =>
  await UserModel.findOne({ where: { nick_name: nickName } })

const userExist = async (uid) => await UserModel.findByPk(uid)

module.exports = { findUserByNickName, userExist }
