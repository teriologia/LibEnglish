import React from 'react'
import { View, Text} from 'react-native'
import { Avatar } from 'react-native-elements'
import styles from './styles'

function ListCard(){
    return(
        <View style={styles.main} >
            <Avatar
                rounded
                source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />
            <Text style={styles.nameText}>Katy Friedson</Text>
            <Text style={styles.scoreText}>860</Text>
        </View>
    )
}

export default ListCard