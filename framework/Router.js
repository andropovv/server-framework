module.exports = class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method, url,  handler) {
        if (!this.endpoints[url]) {
            this.endpoints[url] = {}
        }

        const endpoint = this.endpoints[url]

        if (endpoint[method]) {
            throw new Error('Method already exists');
        }

        endpoint[method] = handler
    }

    get(url, handler) {
        this.request('GET', url, handler)
    }
    post(url, handler) {
        this.request('POST', url, handler)
    }
    put(url, handler) {
        this.request('PUT', url, handler)
    }
    patch(url, handler) {
        this.request('PATCH', url, handler)
    }
    delete(url, handler) {
        this.request('DELETE', url, handler)
    }
}