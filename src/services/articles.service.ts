import { API_KEY, API_URL } from "../config/api.config";
import axios from 'axios';

export default class ArticleService {
    static getArticleNews(q: string = '',page: number = 0) {
        return axios({
            url: API_URL,
            params:{
                'q': q,
                'page': page,
                'api-key': API_KEY
            }
        })
    }
}

