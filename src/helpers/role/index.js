const { RoleModel } = require('../../models')

const roleExist = async (roleId) =>
  RoleModel.findOne({ where: { role_id: roleId } })

module.exports = { roleExist }
