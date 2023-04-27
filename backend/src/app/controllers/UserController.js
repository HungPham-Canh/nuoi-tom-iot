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
        User.findOne({email: req.body.email})
            .then(user => {
                console.log(user)
                // if user.password == req.body.password {
                //     res.send("Password not correct")
                // }
                // else res.send("Login success")
            })
            .catch(err => {})
    }

    // changePassword(req, res, next) {
    //     User.updateOne()
    // }
}

export default new UserController