const User = require('./user-model')

const getUsers = async (req, res) => {
    if (req.params.id) {
        const users = await User.findById(req.params.id)
    }
    const users = await User.find()
    res.send(users)
}
const createUser = async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
}

module.exports = {
    getUsers,
    createUser
}