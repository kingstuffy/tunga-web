const StorageTypes = {
    Session: 1,
    Local: 2
};
const apiVersion = 'v1';
const ApiConfig = {
    defaultApiUrl: `https://api.test.clane.com:8443/`,
    default2ApiUrl: `https://sc.test.clane.com:8443/api/${apiVersion}/`,
    defaultStorage: StorageTypes.Local,
    StorageTypes,
    articleTypes: {
        video: 'video',
        audio: 'audio',
        image: 'image',
    }
};

export const AlertTimeout = 30000; // milliseconds

export default ApiConfig;
