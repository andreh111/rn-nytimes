import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    articleCard: {
        flex: 1, flexDirection: 'row', alignItems: 'center', margin: 10, borderColor: 'black', shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    articleTitle: {
        fontWeight: 'bold'
    },
    articleThumbnail: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    }
});

export default styles;