import {
    UserService
} from '../../services';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { BadRequest } from '../../errors';
import Utils from '../../helpers/utils';
import { io } from '../../../server';

export class AuthController {

    /**
     * Register a new user
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<*>}
     */
    static async signup(req, res, next) {
        const payload = req.body;

        try {

            let user = await UserService.getByEmail(payload.email);

            if (user) {
                throw new BadRequest('email-unique');
            }

            user = await UserService.create(payload);

            const tokenInfo = Utils.signJWTToken(user);

            /*io.on('connection', function (socket) {
                socket.emit('news', { hello: 'world' });
                socket.on('my other event', function (data) {
                    console.log(data);
            });*/

            return res.status(SUCCESS_CODE).json({
                currentUser: tokenInfo.token,
                user: {
                   id: user.id,
                    email: user.email,
                    firstName:user.firstName,


                }
            });

        } catch (err) {
            next(err);
        }
    }

    /**
     * Sign In User to the app.
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<*>}
     */
    static async login(req, res, next) {
        const { email, password } = req.body;

        let user;
        try {
            // Check if user exists by given email
            user = await UserService.getByEmail(email);
            console.log(user);

            // Compare password
            if (!user || !user.comparePassword(password)) {
                return next(new BadRequest('invalid-email-or-password'));
            }

            const tokenInfo = Utils.signJWTToken(user);

            return res.status(SUCCESS_CODE).json({
                currentUser: tokenInfo.token,
                user: {
                  id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                   // userId: req.user._id
                }
            });
        }
        catch (err) {
            return next(err);
        }
    }

}
