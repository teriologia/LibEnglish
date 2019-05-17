import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { Card, Button, Input, Divider } from 'react-native-elements'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{marginTop: 25, flex: 1}}>
                <Card 
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
                        />
                            <Divider style={{marginVertical: 10}}></Divider>
                        <Button title='Register' />
                </Card>
                <View style={{ width: '100%', bottom: 0, position: 'absolute', marginBottom: 15, alignItems: 'center',}}>
                    <Text>Created By Mehmet Serdar Tekin</Text>
                </View>
            </View>
        </SafeAreaView>
    );
  }
}

export default Home;
