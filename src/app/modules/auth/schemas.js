export default {
    signup: {
        validation: {
            'email': {
                in: 'body',
                notEmpty: {
                    errorMessage: 'required'
                },
                isEmail: {
                    errorMessage: 'invalid'
                }
            }
        }
    },
    login: {
        validation: {
            'email': {
                in: 'body',
                notEmpty: {
                    errorMessage: 'required'
                }
            },
            'password': {
                in: 'body',
                notEmpty: {
                    errorMessage: 'required'
                }
            }
        }
    }
};

