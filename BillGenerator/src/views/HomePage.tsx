import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  OpaqueColorValue,
  Dimensions,
} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {
  RectButton,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';

const styles = StyleSheet.create({});

const screenDimentions = Dimensions.get('window');
const cardSize = screenDimentions.width / 4;

const HomeButton: React.FC<{
  backgroundColor: string | OpaqueColorValue;
  onPress: () => void;
}> = ({backgroundColor, onPress}) => {
  return (
    <>
      <View
        style={{
          height: cardSize,
          width: cardSize,
          backgroundColor: backgroundColor,
          borderRadius: 10,
          margin: 8,
          overflow: 'hidden',
          elevation: 2,
        }}>
        <RectButton
          style={[
            StyleSheet.absoluteFillObject,
            {justifyContent: 'center', alignItems: 'center'},
          ]}
          onPress={onPress}>
          <Text style={{color: 'white', fontFamily: 'Montserrat-Regular'}}>
            Hello!
          </Text>
        </RectButton>
      </View>
    </>
  );
};

const HomePage: NavigationFunctionComponent = ({componentId}) => {
  return (
    <>
      <ScrollView>
        <View
          style={{
            height: cardSize * 1.3,
            justifyContent: 'center',
            margin: 16,
          }}>
          <Text style={{fontSize: 36, fontFamily: 'Montserrat-Bold'}}>
            GST Bill Generator
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{borderRadius: 12, overflow: 'hidden'}}>
              <RectButton onPress={() => openSettingsPage(componentId)}>
                <Text style={{fontFamily: 'Montserrat-Bold', margin: 16}}>
                  Settings
                </Text>
              </RectButton>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', margin: 36}}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <HomeButton backgroundColor="pink" onPress={() => {}} />
            <HomeButton backgroundColor="red" onPress={() => {}} />
            <HomeButton backgroundColor="blue" onPress={() => {}} />
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <View style={{height: cardSize / 2}} />

            <HomeButton backgroundColor="gray" onPress={() => {}} />
            <HomeButton backgroundColor="purple" onPress={() => {}} />
            <HomeButton backgroundColor="green" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

HomePage.options = {
  topBar: {
    visible: false,
  },
};

function openSettingsPage(componentId: string) {
  Navigation.push(componentId, {
    component: {
      name: 'Settings',
    },
  });
}

export default HomePage;
