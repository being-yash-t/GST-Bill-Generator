import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import HtmlToPdf from 'react-native-html-to-pdf';
import Share from 'react-native-share';

const styles = StyleSheet.create({});

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello My Friend!</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
