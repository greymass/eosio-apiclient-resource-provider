import { APIClient, APIClientOptions } from '@greymass/eosio'
import { ResourceProviderAPI } from './v1/resource_provider'

export default class ResourceProviderAPIClient extends APIClient {
    constructor(options: APIClientOptions) {
        super(options)
        this.v1.resource_provider = new ResourceProviderAPI(this)
    }
}