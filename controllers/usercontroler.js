let user = [
    { id: 1, name: "jishnu", email: "jishnum@gmail.com", age: "23" },
    { id: 2, name: "scofield", email: "scofield4@gmail.com", age: "43" }
]


const getuser = (req, res) => {
    try {
        res.status(200).json(user)

    } catch (error) {
        res.status(error.code || 500).json({ error: error.message || "internal server error" })
    }
}

const createuser = (req, res) => {
    try {
        user.push(req.body)
        console.log(req.body);
        res.status(201).json(user)

    } catch (error) {
        res.status(error.code || 500).json({ error: error.message || "internal server error" })
    }

}
const updateuser = (req, res) => {
    try {
        const { userid } = req.params
        const { name, email, age } = req.body
        console.log(userid, name, email, age);
        const updateusers = user.map((users) => {
            if (users.id == userid) {
                users.name = name,
                    users.email = email,
                    users.age = age
            }
            return users
        })
        res.json(updateusers)

    } catch (error) {
        res.status(error.code || 500).json({ error: error.message || "internal server error" })
    }

}


const deleteuser = (req, res) => {
    try {
        console.log(parseInt(req.params.id));
        user = user.filter((lists) => lists.id !== parseInt(req.params.id))
        res.status(204).json(user)

    } catch (error) {
        res.status(error.code || 500).json({ error: error.message || "internal server error" })
    }

}

module.exports = {
    getuser,
    createuser,
    deleteuser,
    updateuser
}