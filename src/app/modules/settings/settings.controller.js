import { CREATED_CODE, SUCCESS_CODE } from '../../configs/status-codes';
import {
    SettingsService
} from '../../services';
import {BadRequest, NotFound} from "../../errors";
import {INVALID, NOT_EXISTS} from "../../configs/constants";

export class SettingsController {
    /**
     * This function is used to get all current user's settings
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<*>}
     */
    static async getAll(req, res, next) {
        try{
            let settings = await SettingsService.getAll({
                userId: req.user._id
            });

            return res.status(SUCCESS_CODE).json(settings);
        }
        catch(err) {
            next(err);
        }
    }

    static async getByCategory(req, res, next) {
        try{
            const categoryName = req.params.cat;
            let settings = await SettingsService.getAll({
                categoryName
            });

            return res.status(SUCCESS_CODE).json(settings);
        }
        catch(err) {
            next(err);
        }
    }

    /**
     * This function is used to create setting for current user
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<*>}
     */
    static async create(req, res, next) {
        const { title, position, backgroundColor } = req.body;

        try {
            if (position < 0 || position > (req.user.email.length - 1)) {
                throw new BadRequest(INVALID('Position'));
            }

            let setting = await SettingsService.save({
                title,
                position,
                backgroundColor,
                userId: req.user._id
            });

            return res.status(CREATED_CODE).json(setting);
        }
        catch (err) {
            next(err);
        }
    }

    /**
     * This function is used to update existing setting for current user
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<*>}
     */
    static async update(req, res, next) {
        const { title, position, backgroundColor } = req.body;

        try {
            if (position < 0 || position > (req.user.email.length - 1)) {
                throw new BadRequest(INVALID('Position'));
            }

            let setting = await SettingsService.getByUserAndId(req.user._id, req.params.id);

            if (setting === null) {
                throw new NotFound(NOT_EXISTS('Setting'));
            }

            setting.title = title;
            setting.position = position;
            setting.backgroundColor = backgroundColor;
            console.log(setting);

            setting = await SettingsService.save(setting);

            return res.status(SUCCESS_CODE).json(setting);

        } catch (err) {
            next(err);
        }

    }

}
