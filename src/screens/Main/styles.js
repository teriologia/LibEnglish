import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    main:{
        flex: 1,
        padding: 15,
        backgroundColor: '#303841',
    },
    scoreContainer:{
        borderRadius: 3,
        backgroundColor: '#e0e6ed',
        padding: 10,
        height: 120, 
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        flexDirection: 'row',
    },
    score:{
        fontSize: 32,
        color: '#000',
        fontWeight: 'bold',
    },
    scoreNumber:{
        color: '#c95859',
        fontSize: 28,
        fontWeight: 'normal',
    },
    levelContainer:{
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    levelFont:{
        fontSize: 26,
        color: '#FFF',
        fontWeight: 'bold',
    },
    levelNumber:{
        fontSize: 24,
        color: '#6fd868',
        fontWeight: '600',
    },
    upgradeContainer:{
        flexDirection: 'row', 
        backgroundColor: '#f4c301', 
        borderRadius: 50, 
        marginLeft: 20, 
        padding: 10, 
        marginTop: 10, 
        width: '70%',
    },
    upgradeText:{
        alignSelf: 'center', 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#000', 
        marginLeft: 5,
    },
    buttonsContainer:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 50,
    },
    bestOfContainer:{
        flex: 1,
        marginTop: 10,
        backgroundColor: '#e0e6ed',
    },
    bestOfText:{
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})