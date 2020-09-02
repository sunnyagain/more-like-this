import BaseService, { BaseSerivce } from "./BaseSerivce"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

export default class DatabaseService extends BaseService {

    constructor() {
        super()
    }

    async init() {
        try {
            this.client = await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
                connectTimeoutMS: 100
            });
        } catch (exception) {
            console.error(`Error while connecting DB ${exception}`)
        }
    }

}