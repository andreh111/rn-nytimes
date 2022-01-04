import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteProp } from '@react-navigation/native';

import Article from "../models/article.model";

export type RootStackParamList = {
    ArticlesList: undefined;
    ArticleDetail: { item: Article };
}

export type AppNavigationProps = NativeStackScreenProps<RootStackParamList, 'ArticlesList'>;


export type ArticleDetailRouteProp = RouteProp<RootStackParamList, 'ArticleDetail'>;