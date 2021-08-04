import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '100%',
        padding:10
    },
    startContainer:{
        flexDirection: 'row',
    },
    midContainer:{
        justifyContent: 'space-around',
        marginStart: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        marginStart: 10,
        borderRadius: 50,
    },
    username:{
        fontWeight: 'bold',
        fontSize: 16
    },
    status: {
        fontSize: 12,
        color: 'grey'
    },
});

export default styles;