import React from "react";
import conf from "../src/conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client 
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)

    }

    async createAccount({email,password,name}) {

        try {
        const userAccount = await this.account.create('unique()', email, password, name);
        if (userAccount) {
            return this.login({email, password});
        }

        else{
            return userAccount;
        }
        } catch (error) {

            console.log ( "AuthService :: createAccount :: error", error )
            throw error;

        }

    }

    async login({email, password}){
        try {
            const session = await this.account.createEmailPasswordSession({email, password})
            return session;
        } catch (error) {
            console.log( " AuthService :: login :: error", error)
            throw error
        }
    }

    async logout() {

        try {
        await this.account.deleteSessions()
        } catch(error) {
            console.log ("AuthService :: logout :: error", error)
        }
    }

    async getCurrentUser () {
        try {
            await this.account.get()
        } catch (error) {
            console.log (" AuthService :: getCurrentUser :: error")
            return null
        }
    }
}

const authService = new AuthService()

export default authService
