import mongoose from 'mongoose';
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
}