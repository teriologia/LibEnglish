import React, { Component } from 'react';
import { View, SafeAreaView, Text, Dimensions } from 'react-native';
import { Card, Button, Input, Divider, Image } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import Logo from '../../../assets/logo.png'

const { width } = Dimensions.get('window')
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView style={ styles.safeView }>
            <View style={{marginTop: 25, flex: 1}}>
                <Card
                containerStyle={styles.cardStyle} 
                title='WELCOME TO LIB-ENGLISH'
                >
                    <Input 
                            placeholder='E-MAIL'
                            leftIcon={{ type: 'font-awesome', name: 'user', }}
                            leftIconContainerStyle={{marginRight: 10,}}
                            containerStyle={{marginBottom: 25}}
                    />
                    <Input
                        placeholder='PASSWORD'
                        leftIcon={{ type: 'font-awesome', name: 'key', }}
                        leftIconContainerStyle={{ marginRight: 5, }}
                        containerStyle={{marginBottom: 10}}
                    />
                        <Button 
                        title='Log in'
                        onPress={() => Actions.appScreen()}
                        />
                        <Divider style={{marginVertical: 10}}></Divider>
                        <Button title='Register' />
                </Card>
                <View style={styles.backgroundImage} >
                    <Image source={Logo} style={{ width: width - 20, height: 175}} />
                </View>
                <View style={styles.createdBy}>
                    <Text style={{color: 'white'}}>Created By Mehmet Serdar Tekin</Text>
                </View>
            </View>
        </SafeAreaView>
    );
  }
}

export default Home;
