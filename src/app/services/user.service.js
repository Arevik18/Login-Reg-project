import mongoose from 'mongoose';
const User = mongoose.model('User');

export class UserService {

    constructor() {
    }

    static async create(payload) {
        let user = new User({
            email: payload.email,
            firstName: payload.firstName,
        });
        user.setPassword(payload.password);

        return await User.create(user);
    }

    static async update(user, attributes) {
        return await user.update({$set: attributes});
    }

    static async getAll() {
        return await User.find();
    }
   /* static async getOne() {
        return await User.find();
    }*/

    static async getByEmail(email) {
        return await User.findOne({email});
    }

   static async getById(_id) {
        return await User.findOne({_id});
    }

    static async delete(user) {
        return User.deleteOne({_id: user._id});
    }
}