import conf from "../src/conf/conf";
import { Client, ID, TablesDB,Query,Storage } from "appwrite";

export class Service {

client = new Client()
databases;
bucket;

constructor () {

    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.databases = new TablesDB(this.client)
    this.bucket = new Storage(this.client)
}

async createPost ({title, slug, content, featuredImage,status,userId}) {

    try {

        return await this.databases.createRow(
            conf.appwriteDatabaseId,
            conf.appwriteTableId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        )
    } catch (error) {
        console.log("config :: createPost :: error", error)
        throw error
    }
}

async updatePost (slug,{title, content, featuredImage,status}){

    try {

        return await this.TablesDB.updateRow(
            conf.appwriteDatabaseId,
            conf.appwriteBucketId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
    } catch (error) {
        console.log("config :: updatePost :: error", error)
        throw error
    }
}

async deletePost (slug){

    try{
        await this.TablesDB.deleteRow(
            conf.appwriteDatabaseId,
            conf.appwriteBucketId,
            slug
        )
        return true
    } catch (error) {
        console.log ("config :: deletePost :: error", error)
        throw error
    }
}

getPost (slug){

    try{
        await this.TablesDB.getRow(
            conf.appwriteDatabaseId,
            conf.appwriteBucketId,
            slug
        )
    } catch (error) {
        console.log ("config :: getPost :: error", error)
        throw error
    }
}

listPost (queries = [Query.equal("status","active")]) {

    try{

        return await this.databases.listRows(
            conf.appwriteDatabaseId,
            conf.appwriteBucketId,
            queries,
        )
    } catch (error) {
        console.log ("config :: listPost :: error", error)
    }
}

async deleteFile (fileId) {

    try{

        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true

    } catch (error) {
        console.log ("config :: deleteFile :: error",error)
        throw error
    }
}

uploadFile (fileId){

    try{

        await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log ("config :: uploadFile :: error", error)
    }
}
}

const service = new Service()
export default Service