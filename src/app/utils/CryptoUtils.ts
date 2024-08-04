var CryptoJS = require("crypto-js");

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || '';
const serverSecretKey = process.env.SECRET_KEY!;

export const decrypt = (encryptedData: string): string => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error('Decryption failed', error);
        return '';
    }
};

export const encrypt = (data: string): string => {
    return CryptoJS.AES.encrypt(data, serverSecretKey).toString();
};