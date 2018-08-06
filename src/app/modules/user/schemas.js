import {
    PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH
} from '../../configs/constants';

export default {
    getOne: {
        authentication: true
    },
    delete: {
        authentication: true
    },
    getAll: {
        authentication: true
    },
    getById:{
        authentication: true
    },

    update: {
        validation: {
            name: {
                in: 'body',
                notEmpty: {
                    errorMessage: 'required'
                }
            },


            'password': {
                in: 'body',
                notEmpty: {
                    errorMessage: 'required'
                },
                matches: {
                    options: [/^(?=.*?[a-zA-Z])(?=.*?[0-9])[\w@#$%^?~-]{0,128}$/],
                    errorMessage: 'invalid-password'
                },
                isLength: {
                    options: [{ min: PASSWORD_MIN_LENGTH, max: PASSWORD_MAX_LENGTH }],
                    errorMessage: 'invalid-password-length'
                }
            }
        },
        authentication: true
    }
};

