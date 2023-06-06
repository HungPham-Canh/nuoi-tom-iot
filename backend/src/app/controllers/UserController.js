import User from '../models/User'

class UserController {
    signup(req, res, next) {
        const formData = {...req.body}
        const newUser = new User(formData)
        newUser.save()
            .then(() =>  res.send("Register success"))
            .catch(err => {
                res.send("Register failed")
                console.log(err)
            })
    }

    signin(req, res, next) {
        // console.log(req.query)
        User.findOne({email: req.query.email})
            .then(user => {
                // console.log(user)
                if (user.password == req.query.password) {
                    res.json({msg: "Login success", account: user})
                }
                else {res.json({msg: "Password not correct"})}
            })
            .catch(err => res.json({msg: "Username not found"}))
    }

    // changePassword(req, res, next) {
    //     User.updateOne()
    // }
}

export default new UserController