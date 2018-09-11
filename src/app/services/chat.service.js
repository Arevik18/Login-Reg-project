import mongoose from 'mongoose';
import {BadRequest, NotFound} from "../errors/index";
const Chat = mongoose.model('Chat');

export class ChatService {

    constructor () {}


    static addMessage(attributes) {
        let chat = new Chat({
            message: attributes.message

        });

        return Chat.create(chat);
    }

    static async getAll() {
        return await Chat.find();
    }

    static deleteMessage(id) {

        let chat = Chat.findOne({
            _id: id
        });
        if (!chat) {
            throw new NotFound("Message does not exist with id: " + id);
        }

        return Chat.remove(chat);
    }
    static async editMessage(id, message) {
        return await Chat.update({ _id: id},{message});
    }
}
