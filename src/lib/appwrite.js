import { Client, Account, Databases, Storage } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    // Replace with your project ID


console.log("hellow",import.meta.env.VITE_APPWRITE_PROJECT_ID);
console.log("hellow",import.meta.env.VITE_DATABASE_ID);
console.log("hellow",import.meta.env.VITE_BUCKET_ID);
console.log("hellow",import.meta.env.VITE_APPWRITE_PROJECT_ID);
export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);
export { ID } from 'appwrite';
