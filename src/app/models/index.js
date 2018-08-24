import User from './user';
import Chat from './chat';
import Settings from './settings';

export default function initModels(mongoose) {
    User(mongoose);
    Settings(mongoose);
    Chat(mongoose);
};
