import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { Home, Main } from '../screens'


const RouterComponent = () => {
    return (
        <Router>
            <Stack key='main' hideNavBar>
                <Scene
                    key='login'
                    component={Home}
                    renderLeftButton={<View />}
                    initial
                />
                <Stack key='appScreen' navigationBarStyle={{ backgroundColor: '#e0e6ed',}}>
                    <Scene
                        titleStyle={styles.headerTitle}
                        key='mainScreen'
                        component={Main}
                        renderLeftButton={<View />}
                        title='Lib-English'
                        renderRightButton={<View />}
                        initial
                    />
                   
                </Stack>
            </Stack>

        
        </Router>
    )
}

const styles={
    headerTitle:{
        flex: 1,
        textAlign: 'center',
    }
}

export default RouterComponent