import mongoose from 'mongoose';
const Settings = mongoose.model('Settings');

export class SettingsService {

    constructor () {}

    static save(settings) {
        if (settings._id) {
            return settings.save();
        }

        return Settings.create(settings);
    }
    
    static async getAll(params) {
        if (params) {
            return await Settings.find(params);
        }

        return await Settings.find();
    }

    static async getByUserAndId(userId, id) {
        return await Settings.findOne({ userId, _id: id });
    }

}
