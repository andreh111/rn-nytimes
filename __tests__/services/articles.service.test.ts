import * as articles_service from "../../src/services/articles.service"
// @ponicode
describe("articles_service.default.getArticleNews", () => {
    test("case#1", async () => {
        await articles_service.default.getArticleNews("rgb(0,100,200)", 10)
    })
    test("case#2", async () => {
        await articles_service.default.getArticleNews("", 0)
    })
})
