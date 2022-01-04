import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300 
    },
    innerContainer:{
         flexDirection: 'row',
          justifyContent: 'space-between',
           alignItems: 'center',
            margin: 10 
    },
    headline: {
        fontWeight: '800',
        fontSize: 17,
        margin: 10
    },
    paragraph:{
        fontWeight: '400',
        fontSize: 16, 
        margin: 10 
    }
});

export default styles;