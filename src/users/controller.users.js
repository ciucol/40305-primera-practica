const { Router } = require('express')
const UserManager = require('../dao/user.manager')
const FilesManager = require('../dao/files.manager')
const User = new UserManager()

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find()

    const response = users.map(({ _id, name, lastname, products }) => ({
      id: _id,
      name,
      lastname,
      products
    }))

    res.json({ message: response })
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const users = await User.findOne(id)

    res.json({ message: users })
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, lastname } = req.body

    const newUser = {
      name,
      lastname
    }

    await User.create(newUser)

    res.status(201).json('Usuario creado')
  } catch (error) {
    console.log(error)
  }
})


router.post('/populate', async (req, res) => {
  try {
    const usersManager = new FilesManager('Users.json')
    const users = await usersManager.loadItems()

    const response = await User.insertMany(users)

    res.json({ messages: response })
  } catch (error) {
    console.log(error)
  }
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { product } = req.body

  const user = await User.findOne(id)
  user.products.push({ product })
  const response = await User.updateOne(id, user)

  res.json({ message: response })
})

router.delete('/', async (req, res) => {
  await User.deleteMany()

  res.json({ message: 'usuarios eliminados' })
})

module.exports = router