import { Share } from "react-native";

import Article from "../models/article.model";

export const shareArticle = async (item: Article) => {
    try {
        const result = await Share.share({
            message:
                `
                ${item.abstract} \n
                ${item.web_url}
            `
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error: any) {
        alert(error.message);
    }
};