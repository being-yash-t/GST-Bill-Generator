import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  OpaqueColorValue,
  Dimensions,
  StatusBar,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {RectButton, ScrollView, Switch} from 'react-native-gesture-handler';
import {HomePageProp} from '../../AppNavigation';

const styles = StyleSheet.create({});

const screenDimentions = Dimensions.get('window');
const cardSize = screenDimentions.width / 3;

const HomeButton: React.FC<{
  text: string;
  backgroundColor: string | OpaqueColorValue;
  imageSource: ImageSourcePropType;
  onPress: () => void;
}> = ({backgroundColor, onPress, text, imageSource}) => {
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
          <Image
            source={imageSource}
            style={{height: cardSize / 2, width: cardSize / 2, margin: 8}}
          />
          <Text
            style={{
              color: 'black',
              fontFamily: 'Montserrat-Regular',
              margin: 8,
              fontSize: 18,
            }}>
            {text}
          </Text>
        </RectButton>
      </View>
    </>
  );
};

const Homepage: React.FC<HomePageProp> = ({navigation}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          margin: 8,
        }}>
        <View style={{borderRadius: 12, overflow: 'hidden'}}>
          <RectButton onPress={() => navigation.navigate('SettingsPage')}>
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

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            margin: 36,
          }}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <HomeButton
              text="New Bill"
              backgroundColor="#f9bfff"
              imageSource={require('../../assets/images/invoice.png')}
              onPress={() => navigation.navigate('NewBillPage')}
            />
            <HomeButton
              text="Firm Details"
              imageSource={require('../../assets/images/law.png')}
              backgroundColor="#bfffd1"
              onPress={() => navigation.navigate('FirmDetailsPage')}
            />
            <HomeButton
              text="Bayers"
              imageSource={require('../../assets/images/buyer.png')}
              backgroundColor="#ffdfbd"
              onPress={() => navigation.navigate('BayersPage')}
            />
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <View style={{height: cardSize / 2}} />

            <HomeButton
              text="Bank Details"
              imageSource={require('../../assets/images/bank.png')}
              backgroundColor="#f4ffbf"
              onPress={() => navigation.navigate('BankDetailsPage')}
            />
            <HomeButton
              text="Old Bills"
              imageSource={require('../../assets/images/time-and-date.png')}
              backgroundColor="#bfe1ff"
              onPress={() => navigation.navigate('OldBillsPage')}
            />
            <HomeButton
              text="Cart Items"
              imageSource={require('../../assets/images/cart.png')}
              backgroundColor="#ffbfd2"
              onPress={() => navigation.navigate('CartItemsPage')}
            />
            {/* <HomeButton text="" backgroundColor="blue" onPress={() => navigation.navigate('SettingsPage')} /> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Homepage;
