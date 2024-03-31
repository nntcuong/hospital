import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import db from '../models/index';
let createNewUser = async (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await hashUserPassword(data.password);

            await db.User.create({
                email: data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender==='1'?true:false,      
                roleId: data.roleId,
            })
            resolve('Create user successfully')
        } catch (error) {
            reject(error)
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    })
}
let getAllUser=()=>{
    return new Promise(async(resolve,reject) => {
        try {
            let users=db.User.findAll({
                raw: true,
            })
            resolve(users)
        } catch (error) {
            reject(error);
        }
    })
}
let finUserById=(userId)=>{
    return new Promise(async(resolve,reject) => {
        try {
            let users=db.User.findOne({
               where:{ id:userId}
            })
            if(users){
                resolve(users)
            }
            else{
                resolve([])
            }
            
        } catch (error) {
            reject(error);
        }
    })
}
let updateUser=(data)=>{
    return new Promise(async(resolve,reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            });
            if(user){

                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save();
                let allUsers=await db.User.findAll({
                    raw: true,
                })
                resolve(allUsers)
            }
            else{
                resolve();
            } 
       
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser:getAllUser,
    finUserById:finUserById,
    updateUser:updateUser,
}