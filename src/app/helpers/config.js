if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

import env from 'env-var';

export const mongoUrl = env.get('MONGO_URL').asString();
export const apiUrl = env.get('API_URL').asString();
export const appUrl = env.get('APP_URL').asString();
export const apiPort = env.get('PORT').asString();
export const tokenSecret = env.get('TOKEN_SECRET').asString();
