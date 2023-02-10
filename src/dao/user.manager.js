const Usuarios = require("./models/users.model");

class UserManager {
  async find() {
    try {
      const users = await Usuarios.find()

      return users
    } catch (error) {
      console.log(error)
    }
  }

  async findOne(id) {
    try {
      const user = await Usuarios.findOne({ _id: id })

      return user
    } catch (error) {
      console.log(error)
    }
  }

  async create(newUser) {
    try {
      await Usuarios.create(newUser)

      return 'Nuevo usuario creado'
    } catch (error) {
      console.log(error)
    }
  }

  async insertMany(newUsers) {
    try {
      await Usuarios.insertMany(newUsers)

      return 'Usuarios cargados correctamente'
    } catch (error) {

    }
  }

  async updateOne(userId, updateObject) {
    try {
      await Usuarios.updateOne({ _id: userId }, updateObject)

      return 'Usuario actualizado'
    } catch (error) {

    }
  }

  async deleteMany() {
    try {
      await Usuarios.deleteMany()

      return 'Usuarios eliminados'
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = UserManager