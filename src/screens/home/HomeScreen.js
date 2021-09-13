/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable linebreak-style */
import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  FlatList, SafeAreaView, StyleSheet,
} from 'react-native';
import HomeMenu from '../../components/HomeMenu';
import Indicator from '../../components/Indicator';
import { colorTheme } from '../../styles/Colors';
import { ASGet } from '../../utils/index';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const isFocused = useIsFocused();

  const renderData = ({ item }) => <HomeMenu item={item} />;

  useEffect(async () => {
    if (isFocused) {
      setIsLoading(true);

      await ASGet('channel')
        .then((response) => {
          if (response) {
            setDataSource(JSON.parse(response));
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isFocused]);

  if (isLoading === true) {
    return <Indicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={renderData}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme,
  },
});
