import React, { memo } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import Article from '../../models/article.model';
import styles from './article-item.styles';

interface ArticleItemProps {
    item: Article;
    index?: number;
    goToItemDetails?: () => void;
    testId?: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ item, index, testId, goToItemDetails }) => {
    const renderThumbnail = item?.multimedia && item.multimedia.length > 0 && item.multimedia[0].url ?
        { uri: `https://nytimes.com/${item?.multimedia[0].url}` } : require('../../assets/article.png');

    return (
        <TouchableOpacity testID={testId} onPress={goToItemDetails} style={styles.articleCard}>
            <Image style={styles.articleThumbnail} source={renderThumbnail} />
            <View style={{ flex: 1 }}>
                <Text style={styles.articleTitle} key={index}>{item?.headline?.main.trim()}</Text>
                <Text>{item.abstract?.substring(0, 80).trim() + '...'}</Text>
            </View>
        </TouchableOpacity>
    )
}



export default ArticleItem;