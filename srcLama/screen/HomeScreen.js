/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable linebreak-style */
import {useIsFocused} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeMenu from '../components/HomeMenu';
import Indicator from '../components/Indicator';
import {ASGet} from '../utils';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const isFocused = useIsFocused();

  const renderData = ({item}) => <HomeMenu item={item} />;

  useEffect(async () => {
    if (isFocused) {
      setIsLoading(true);

      await ASGet('channel')
        .then(response => {
          if (response) {
            setDataSource(JSON.parse(response));
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  if (isLoading === true) {
    return <Indicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={renderData}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
