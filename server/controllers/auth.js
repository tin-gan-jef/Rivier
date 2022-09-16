import bcrypt from 'bcrypt'
import Admin from "../models/Admin.js";


// REGISTRATION
export const adminSignup = async(req, res)=>{
    try {
        const salt =  bcrypt.genSaltSync(10);
        const hash =  bcrypt.hashSync(req.body.password, salt);
        const newUser = new Admin({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

// LOGIN
export const adminLogin = async(req, res)=>{
try {
    const user = await Admin.findOne({email: req.body.email})
    if(!user) return res.status(404).json("Email not found!")
    const passwordCorrect = await bcrypt.compareSync(req.body.password, user.password)
    if(!passwordCorrect) return res.status(404).json("Wrong password!")
    const {password, ...others} = user._doc
    res.status(200).json(others)

} catch (error) {
    res.status(500).json(error)
}
}