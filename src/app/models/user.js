import { hashSync, genSaltSync, compareSync } from 'bcryptjs';


export default (mongoose) => {
    let UserSchema = mongoose.Schema({
       // userId: { type: String, ref: 'User', required: true, index: true },
        email: { type: String, required: true, index: { unique: 'email-unique' } },
        status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'INACTIVE' },
        firstName: String,
        password: String,
        createdAt: Date,
        updatedAt: Date
    });

    UserSchema.pre('save', function(next) {
        const now = new Date();

        this.updatedAt = now;

        if (!this.createdAt)
            this.createdAt = now;

        next();
    });

    UserSchema.methods = {
        generatePassword: function setUserPassword(pw) {
            return hashSync(pw, genSaltSync(8));
        },

        setPassword: function setUserPassword(pw) {
            this.password = hashSync(pw, genSaltSync(8));
        },

        comparePassword: function userCheckPassword(pw) {
            return compareSync(pw, this.password);
        },
    };

    UserSchema.plugin(require('mongoose-beautiful-unique-validation'));

    return mongoose.model('User', UserSchema);
};
