import SettingsModule from './settings';
import AuthModule from './auth';
import ChatModule from './chat';
import UserModule from './user';

export default (router) => {

    const auth = new AuthModule(router);
    const user = new UserModule(router);
    const settings = new SettingsModule(router);
    const chat = new ChatModule(router);

    const modules = [
        auth,
        user,
        settings,
        chat

    ];

    modules.forEach((module) => module.createEndpoints());
};
