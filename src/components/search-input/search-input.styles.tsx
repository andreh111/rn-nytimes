import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#585858',
        margin: 10,
        height: 50,
        borderRadius: 10,
        padding: 5
    },
    searchInput: {
        fontSize: 18,
        flex: 1
    }
});

export default styles;