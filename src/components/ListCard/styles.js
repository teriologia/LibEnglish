import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    main:{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
    },
    nameText:{
        alignSelf: 'center',
        marginLeft: 20,
        fontSize: 20,
    },
    scoreText:{
        alignSelf: 'center',
        textAlign: 'right',
        flex: 1,
        fontSize: 20,
        color: '#6fd868',
    }
})