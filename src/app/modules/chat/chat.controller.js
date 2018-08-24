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

}
