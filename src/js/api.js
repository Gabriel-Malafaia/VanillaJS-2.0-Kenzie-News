export class Api {
    static baseUrl = "https://kenzie-news-api.herokuapp.com/api/news"
    static options = {
        "Content-Type": "application/json",
        method: "GET"
    }

    static async news() {
        const dataPromise = await fetch(this.baseUrl, this.options)
        const dataResult  = dataPromise.json()
        return dataResult
    }
}