import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';

const styles = StyleSheet.create({});

const RightItems = ({a, b}: any) => (
  <View style={{backgroundColor: 'red'}}>
    <Text>DELETE</Text>
  </View>
);

const HomePage: NavigationFunctionComponent = ({componentId}) => {
  console.log(componentId);
  return (
    <>
      <RectButton onPress={() => openSettingsPage(componentId)}>
        <Swipeable renderRightActions={RightItems}>
          <View style={{backgroundColor: 'pink', margin: 16, padding: 16}}>
            <Text>Hiii</Text>
            <Text>open settings</Text>
          </View>
        </Swipeable>
      </RectButton>
    </>
  );
};

function openSettingsPage(componentId: string) {
  Navigation.push(componentId, {
    component: {
      name: 'Settings',
      options: {
        topBar: {
          title: {
            text: 'Settings',
          },
        },
      },
    },
  });
}

HomePage.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

export default HomePage;
