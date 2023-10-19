import service from "./user.service.js";

const createUser = async (req, res) => {
    try {
        const userData = req.body;

        const user = await service.createUserService(userData);
        
        res.status(201).json({
            status : "Success",
            message : user
        })
    } catch (error) {
       res.status(404).json({
        status : false,
        message : error
       }) 
    } 
}

const getUser = (req, res) => {
    console.log("I am get User")
}

export default {
    createUser, getUser
};