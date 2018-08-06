import {
    UserService
} from '../../services';
import { SUCCESS_CODE } from '../../configs/status-codes';

export class UserController {

    static async getAll(req, res, next) {
        try {
            let users = await UserService.getAll();

            return res.status(SUCCESS_CODE).json(users);

        } catch (err) {
            next(err);
        }
    }

    /**
     * Get user details
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<*>}
     */
  static getOne(req, res, next) {
        try {
            const user = req.user;
            console.log(user);
            return res.status(SUCCESS_CODE).json({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
               // userId: req.user._id,
            });

        } catch (err) {
            next(err);
        }
    }

    /**
     * Update user details
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<*>}
     */
    static async update(req, res, next) {
        const payload = req.body;

        try {
            let user = req.user;

            const attributes = {
                name: payload.name,
                password: user.generatePassword(payload.password),
                status: 'ACTIVE'
            };

            await UserService.update(user, attributes);

            return res.status(SUCCESS_CODE).json({
               id: user.id,
                email: user.email,
                firstName: user.firstName,
              //  userId: req.user._id

            });

        } catch (err) {
            next(err);
        }
    }



    static async delete(req, res, next) {
        const id = req.params.id;
          console.log(req.params.id);
        try{
            const user = await UserService.getById(id);

            await UserService.delete(user);

            return res.status(SUCCESS_CODE).json({});
        }
        catch(err) {
            next(err);
        }
    }
}


