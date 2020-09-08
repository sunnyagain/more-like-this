import BaseService from './BaseSerivce'
import Asset from '../Models/Asset'

export default class AssetService extends BaseService {

    constructor({ DatabaseService }) {
        super()
        this.DatabaseService = DatabaseService
        this.dbConnection()
    }

    async dbConnection() {
        this.db = await this.DatabaseService.init()
        return this.db
    }

    async list(opt) {
        const assets = Asset.find()
        return assets
    }
}