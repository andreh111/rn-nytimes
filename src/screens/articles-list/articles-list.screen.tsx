import React, { useState,useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { AppNavigationProps } from '../../types';
import Article from '../../models/article.model';
import SearchInput from '../../components/search-input/search-input.component';
import ArticleItem from '../../components/article-item/article-item.component';
import ArticleService from '../../services/articles.service';

const ArticlesList: React.FC<AppNavigationProps> = ({ navigation }: AppNavigationProps) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchValue] = useDebounce(searchQuery, 1000);
    const [page, setPage] = useState<number>(0);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const getListNews = () => {
        setRefreshing(true);
        ArticleService.getArticleNews(searchQuery, page).then(result => {
            setPage(page + 1)
            setArticles(oldArticles => [...oldArticles, ...result.data.response.docs]);
            setRefreshing(false);
        }).catch(error => {
            setRefreshing(false);
        })
    }

    const onChangeSearch = (query: string): void => {
        setSearchQuery(query);
    };

    const renderItem = ({ item, index }: { item: Article, index: number }) => {
        return <ArticleItem item={item} index={index} testId={`item-${index}`} goToItemDetails={() => navigation.navigate('ArticleDetail', { item })} />
    }

    useEffect(()=>{
        setArticles([]);
        getListNews();        
    },[searchValue]);

    return (
        <View testID='articles-list' style={{ flex: 1 }}>
            <SearchInput
                query={searchQuery}
                onQueryChange={onChangeSearch}
            />
            <FlatList
                data={articles}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => {
                    getListNews();
                }}
                ListFooterComponent={<ActivityIndicator animating={refreshing} />}
                testID='articles-flatlist'
            />
        </View>
    )
}

export default ArticlesList;