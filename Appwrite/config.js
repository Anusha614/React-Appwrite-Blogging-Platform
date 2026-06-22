import conf from "../src/conf/conf";
import { Client, ID, TablesDB, Query, Storage } from "appwrite";

export class Service {
    client = new Client();
    TablesDB; 
    bucket;

    constructor() {
        this.client
           .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.TablesDB = new TablesDB(this.client); 
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, ft_img, status, userId }) {
        try {
            
            return await this.TablesDB.createRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
                {
                    title,
                    content,
                    ft_img,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("config :: createPost :: error", error);
            throw error;
        }
    }

    async updatePost(slug, { title, content, ft_img, status }) {
        try {
            return await this.TablesDB.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId, 
                slug,
                {
                    title,
                    content,
                    ft_img,
                    status,
                }
            );
        } catch (error) {
            console.log("config :: updatePost :: error", error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            return await this.TablesDB.deleteRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId, 
                slug
            );
        } catch (error) {
            console.log("config :: deletePost :: error", error);
            throw error;
        }
    }

    async getPost(slug) {
        try {
            
            return await this.TablesDB.getRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug
            );
        } catch (error) {
            console.log("config :: getPost :: error", error);
            throw error;
        }
    }

    async listPost(queries = [Query.equal("status", "active")]) {
        try {
           
            return await this.TablesDB.listRows(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                queries
            );
        } catch (error) {
            console.log("config :: listPost :: error", error);
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log("config :: deleteFile :: error", error);
            throw error;
        }
    }


    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("config :: uploadFile :: error", error);
        }
    }

    
 getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;