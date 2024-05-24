export const environment = {
    production: true,
    firebaseConfig: {
        apiKey: process.env["API_KEY"] || 'DEF_A',
        authDomain: process.env["AUTH_DOMAIN"]  || 'DEF_A',
        projectId: process.env["PROJECT_ID"] || 'DEF_A',
        storageBucket: process.env["STORAGE_BUCKET"] || 'DEF_A',
        messagingSenderId: process.env["MESSAGING_SENDER_ID"] || 'DEF_A',
        appId: process.env["APP_ID"]|| 'DEF_A',
    }
};
