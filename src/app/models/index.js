import User from './user';
import Settings from './settings';

export default function initModels(mongoose) {
    User(mongoose);
    Settings(mongoose);
};
