import BaseService from '../../Services/BaseSerivce'

export default class AssetsController extends BaseService {

    constructor({ ExpressService, AssetService, ElasticService }) {
        super()
        this.expressService = ExpressService
        this.router = this.expressService.router()
        this.assetService = AssetService
        this.elasticService = ElasticService

        this.Create = this.Create.bind(this)
        this.Get = this.Get.bind(this)
        this.List = this.List.bind(this)
        this.Update = this.Update.bind(this)
        this.Delete = this.Delete.bind(this)
        this.mlt = this.mlt.bind(this)

        this.initRoutes()
        this.expressService.app.use('/assets', this.router)
    }

    initRoutes() {

        this.router.post('/', this.Create)
        this.router.put('/:id', this.Update)
        this.router.get('/:id', this.Get)
        this.router.get('/', this.List)
        this.router.delete('/:id', this.Delete)
        this.router.get('/:id/mlt', this.mlt)

    }

    // @TODO
    async Get(req, res, next) {
        res.json(req.params).status(200)
    }

    // @TODO
    async Create(req, res, next) {

    }

    // @TODO
    async List(req, res, next) {
        const assets = this.assetService.list()
        res.json(assets).status(200)
    }

    // @TODO
    async Update(req, res, next) {

    }

    // @TODO
    async Delete(req, res, next) {

    }

    // @WIP
    async mlt(req, res, next) {
        const response = await this.elasticService.mlt({
            fields: ["category"],
            assetId: req.params.id
        })
        return res.json(response)
    }
}