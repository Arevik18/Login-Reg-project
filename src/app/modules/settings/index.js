import { Router } from 'express';
import endpoints from './endpoints';

export default class SettingsModule {
    apiRouter;
    router;

    constructor (apiRouter) {
        this.apiRouter = apiRouter;
        this.router = Router();
    }

    createEndpoints() {
        this.assignRouter();
        this.assignEndpoints();
    }

    assignRouter() {
        this.apiRouter.use('/settings', this.router);
    }

    assignEndpoints() {
        endpoints(this.router);
    }
}
