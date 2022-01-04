import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Image, Text } from 'react-native';


import { ArticleDetailRouteProp } from '../../types';
import { shareArticle } from '../../utils';
import styles from './article-detail.styles';




const ArticleDetail = ({ route }: { route: ArticleDetailRouteProp }) => {
    const item = route.params && route.params?.item;
    const itemThumbnail = item?.multimedia && item.multimedia.length > 0 && item.multimedia[0].url ?
    { uri: `https://nytimes.com/${item?.multimedia[0].url}` } : require('../assets/article.png');

    return (
        <View>
            <Image style={styles.image} source={itemThumbnail} />
            <View style={styles.innerContainer}>
                <Text style={{ fontWeight: 'bold' }}>Category: {item.section_name}</Text>
                <Icon name="share-outline" size={25} onPress={() => shareArticle(item)} />
            </View>
            <Text style={styles.headline}>{item.headline?.main}</Text>
            <Text style={styles.paragraph}>{item.lead_paragraph}</Text>
        </View>
    )
}



export default ArticleDetail;