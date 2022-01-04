import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './search-input.styles';

interface SearchInputProps {
    query: string;
    onQueryChange?: (q: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ query, onQueryChange }) => {
    return (
        <View style={styles.searchInputContainer}>
            <TextInput testID='search-input' style={styles.searchInput} value={query} onChangeText={onQueryChange} placeholder='Search...' />
            <Icon name="search" size={25} color={"#585858"} />
        </View>
    )
}



export default SearchInput;