class apiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.Success = statusCode < 400
    }
}