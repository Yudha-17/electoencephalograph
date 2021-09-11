/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable linebreak-style */
import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import {ASGet} from '../../utils/index';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Gap from '../../components/Gap';
import {useIsFocused} from '@react-navigation/native';
import Indicator from '../../components/Indicator';

const Channel = ({navigation}) => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(async () => {
    if (isFocused) {
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
  }, [isFocused]);

  if (isLoading === true) {
    return <Indicator />;
  }

  const renderData = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Update Channel', {
            id: item.id,
            name: item.name,
            api: item.api,
          });
        }}>
        <Card key={item.id} style={styles.flContainer}>
          <View style={styles.flContent}>
            <Text style={styles.flHeader}>{item.name}</Text>
            <Gap height={10} />
            <Text>{item.api}</Text>
          </View>
          <FaIcon name="chevron-right" />
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={renderData}
        keyExtractor={item => item.id}
      />
      <Button
        title="Tambah Channel"
        onPress={() => {
          navigation.navigate('TambahChannel');
        }}
      />
    </View>
  );
};

export default Channel;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flContent: {
    flexDirection: 'column',
    width: '90%',
  },
  flHeader: {
    fontSize: 18,
  },
});
