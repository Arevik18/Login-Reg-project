import { io } from '../../../server';
import {ChatService} from "../../services";
import {SUCCESS_CODE} from "../../configs/status-codes";

export class ChatController {

    static async add(req, res, next) {
        try {
            const chat = await ChatService.addMessage(req.body);

            io.emit('message-added', chat);
    
            return res.status(SUCCESS_CODE).send({});

        } catch (err) {
            next(err);
        }
    }

    static async getAll(req, res, next) {
        try {
            let chats = await ChatService.getAll(req.body);

            return res.status(SUCCESS_CODE).json(chats);
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        const id = req.params.id;


        try {
            await ChatService.deleteMessage(id);

            io.emit('delete-message', id);
            return res.status(SUCCESS_CODE).send({});

        } catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        const id = req.params.id;
        const {message} = req.body;
        try {
            await ChatService.editMessage(id, message);
            io.emit('edit-message', {id, message});
            return res.status(SUCCESS_CODE);

        } catch (err) {
            next(err);
        }
    }
}
