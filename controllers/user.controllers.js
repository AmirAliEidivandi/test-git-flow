const getUsers = (req, res) => {
    const users = {
        name: 'amirali',
        age: 20,
        email: 'amirah64887@gmail.com'
    }
    res.status(200).json(users)
}

module.exports = {
    getUsers
}