import appluCaseMiddleware from "axios-case-converter"
import axios from "axios"
import applyCaseMiddleware from "axios-case-converter"

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

const options = {
    ignoreHeaders: true
}

const client = applyCaseMiddleware(axios.create({
    baseURL: "http://localhost:3001/v1"
}), options)

export default client
