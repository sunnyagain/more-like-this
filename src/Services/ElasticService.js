import { Client } from 'elasticsearch'
import BaseService from './BaseSerivce'
import _ from 'lodash'

export default class ElasticService extends BaseService {

    constructor() {
        super()
        this.init()
    }

    async init() {
        this.client = Client({
            host: process.env.ES_URI || 'localhost:9200',
            // log: 'trace',
            apiVersion: '7.6', // must be same version as Elasticsearch instance
        });
    }

    async mlt(opt) {
        if (!!this.client) await this.init()
        const assetId = _.get(opt, 'id', 1)
        const similarFields = _.get(opt, 'fields', ['category'])
        const response = await this.client.search({
            index: opt.index || 'assets',
            body: {
                query: {
                    more_like_this: {
                        fields: similarFields,
                        like: {
                            _id: assetId
                        },
                        min_term_freq: 1,
                        max_query_terms: 12
                    }
                }
            }
        })
        // console.log(`Elastic mlt response`, response)
        return response
    }

}