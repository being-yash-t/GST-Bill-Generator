import * as React from 'react';
import {View, Text, StatusBar, StyleSheet, Button} from 'react-native';
import {HomePageProps} from '../core/Navigation';
import { initDb } from '../services/SqliteHelper';

const styles = StyleSheet.create({});

export function HomePage(props: HomePageProps) {
  initDb()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View>
        <Text>HomePage</Text>
      </View>
    </>
  );
}
