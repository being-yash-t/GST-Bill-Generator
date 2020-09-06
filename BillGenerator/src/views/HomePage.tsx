import * as React from 'react';
import {View, Text, StatusBar, StyleSheet } from 'react-native';
import {initDb} from '../services/SqliteHelper';
import {RectButton} from 'react-native-gesture-handler';

const styles = StyleSheet.create({});

export function HomePage(props: any) {
  console.log(props);
  initDb();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View >
        <Text>HomePage</Text>
        <RectButton rippleColor='pink' onPress={()=>console.log("tapped")}>
          <Text>Hiii</Text>
        </RectButton>
      </View>
    </>
  );
}
