import SettingsModule from './settings';
import AuthModule from './auth';
import UserModule from './user';

export default (router) => {

    const auth = new AuthModule(router);
    const user = new UserModule(router);
    const settings = new SettingsModule(router);

    const modules = [
        auth,
        user,
        settings
    ];

    modules.forEach((module) => module.createEndpoints());
};
