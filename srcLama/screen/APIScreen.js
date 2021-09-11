/* eslint-disable linebreak-style */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {API_BASE_URL} from '../config';
import APIItem from '../components/APIItem';
import Indicator from '../components/Indicator';

const APIScreen = ({navigation}) => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await axios
      .get(`${API_BASE_URL}users?page=1`)
      .then(response => {
        if (response && response.data.data) {
          setDataSource(response.data.data);
        }
      })
      .catch(response => {
        console.log(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const renderItem = ({item}) => (
    <APIItem
      item={item}
      onPress={() => {
        navigation.navigate('APIDetailScreen', {
          id: item.id,
        });
      }}
    />
  );

  useEffect(() => {
    getData();
  }, []);

  if (isLoading === true) {
    return <Indicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default APIScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
