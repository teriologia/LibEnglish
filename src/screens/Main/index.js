import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Button, Divider } from 'react-native-elements'
import { ListCard } from '../../components'
import styles from './styles'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.scoreContainer}>
            <Text style={styles.score}> SCORE: </Text>
            <Text style={styles.scoreNumber}>16060</Text>
        </View>
        <View style={styles.levelContainer}>
            <Text style={styles.levelFont}>LVL: </Text>
            <Text style={styles.levelNumber}>5</Text>
          <View style={styles.upgradeContainer}> 
            <Icon
                raised
                name='arrow-up-circle'
                type='feather'
                color='#000'
                size={15}
            />
            <Text style={styles.upgradeText}> UPGRADE</Text>
            </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button icon={{ name:'book', color: 'white' }} title='Start Test' containerStyle={{flex:1}} />
          <Divider style={{marginHorizontal: 10,}} />
          <Button icon={{ name: 'comments', color: 'white', type:'font-awesome' }} title='Start Chat' containerStyle={{ flex: 1 }} />
        </View>
        <View style={styles.bestOfContainer}>
          <Text style={styles.bestOfText}>Best of This Week</Text>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </View>
      </View>
    );
  }
}

export default Main;
