import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  OpaqueColorValue,
  Dimensions,
} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {RectButton, ScrollView, Switch} from 'react-native-gesture-handler';

const styles = StyleSheet.create({});

const screenDimentions = Dimensions.get('window');
const cardSize = screenDimentions.width / 4;

const HomeButton: React.FC<{
  text: string;
  backgroundColor: string | OpaqueColorValue;
  onPress: () => void;
}> = ({backgroundColor, onPress, text}) => {
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
          <Text style={{color: 'black', fontFamily: 'Montserrat-Regular'}}>
            {text}
          </Text>
        </RectButton>
      </View>
    </>
  );
};

const Homepage: NavigationFunctionComponent = ({componentId}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <ScrollView>
        <View
          style={{
            height: cardSize * 1.3,
            justifyContent: 'center',
            margin: 16,
          }}>
          <Text
            style={{
              fontSize: 36,
              fontFamily: 'Montserrat-Bold',
            }}>
            GST Bill Generator
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{borderRadius: 12, overflow: 'hidden'}}>
              <RectButton
                onPress={() => openPageById(componentId, 'SettingsPage')}>
                <Text style={{fontFamily: 'Montserrat-Bold', margin: 16}}>
                  Settings
                </Text>
              </RectButton>
            </View>
            <Switch
              value={darkMode}
              onValueChange={(value) => setDarkMode(value)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', margin: 36}}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <HomeButton
              text="New Bill"
              backgroundColor="#bfe1ff"
              onPress={() => openPageById(componentId, 'NewBillPage')}
            />
            <HomeButton
              text="Firm Details"
              backgroundColor="#bfffd1"
              onPress={() => openPageById(componentId, 'FirmDetailsPage')}
            />
            <HomeButton
              text="Bayers"
              backgroundColor="#ffdfbd"
              onPress={() => openPageById(componentId, 'BayersPage')}
            />
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <View style={{height: cardSize / 2}} />

            <HomeButton
              text="Bank Details"
              backgroundColor="#f4ffbf"
              onPress={() => openPageById(componentId, 'BankDetailsPage')}
            />
            <HomeButton
              text="Old Bills"
              backgroundColor="#f9bfff"
              onPress={() => openPageById(componentId, 'OldBillsPage')}
            />
            <HomeButton
              text="Cart Items"
              backgroundColor="#ffbfd2"
              onPress={() => openPageById(componentId, 'CartItemsPage')}
            />
            {/* <HomeButton text="" backgroundColor="blue" onPress={() => {}} /> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

Homepage.options = {
  topBar: {
    visible: false,
  },
};

function openPageById(componentId: string, pageId: string) {
  Navigation.push(componentId, {
    component: {
      name: pageId,
    },
  });
}

export default Homepage;
