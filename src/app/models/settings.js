export default (mongoose) => {
    let SettingsSchema = mongoose.Schema({
        userId: { type: String, ref: 'User', required: true, index: true },
        categoryName: { type: String, required: true, index: true },
        providers: [
            {
                name: { type: String, required: true },
                status: { type: String, enum: ['active', 'inactive'], default: 'inactive' }
            }
        ],
        status: { type: String, enum: ['inactive', 'in_progress', 'needs_information', 'options_available', 'complete'], default: 'inactive' }
    });

    return mongoose.model('Settings', SettingsSchema);
};

