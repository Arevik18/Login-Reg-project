
export default (mongoose) => {
    const chatSchema = new  mongoose.Schema({
        message: String,
        createdAt: Date,
        updatedAt: Date
    });

    chatSchema.pre('save', function(next) {
        const now = new Date();

        this.updatedAt = now;

        if (!this.createdAt)
            this.createdAt = now;

        next();
    });

    return mongoose.model('Chat', chatSchema);
};
