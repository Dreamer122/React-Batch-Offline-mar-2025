import { Client,Account,Databases, Storage } from 'appwrite';
const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECTID);

const account = new Account(client);
const databases=new Databases(client)
const storage=new Storage(client)
export {account,databases,storage}