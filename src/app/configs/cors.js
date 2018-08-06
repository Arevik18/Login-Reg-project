const corsOptions = {
    development: {
        origin: /localhost:4200/,
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ]
    },
    production: {
        origin: /datra.herokuapp.com/,
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ]
    }
};

export default corsOptions[process.env.NODE_ENV || 'development'];
