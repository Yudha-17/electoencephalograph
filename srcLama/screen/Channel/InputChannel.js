/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable linebreak-style */
import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Button from '../../components/Button';
import Gap from '../../components/Gap';
import NewItem from '../../components/NewItem';
import {ASGet, ASSet, showError, showSuccess} from '../../utils/index';
import {useIsFocused} from '@react-navigation/native';

const InputChannel = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [channel, setChannel] = useState('');
  const [link, setLink] = useState('');
  const [channelList, setChannelList] = useState([]);
  const isFocused = useIsFocused();

  const saveData = async () => {
    setIsLoading(true);

    let data = [{id: Date.now(), name: channel, api: link}];
    if (channelList != null) {
      data = [...channelList, ...data];
    }

    await ASSet('channel', JSON.stringify(data))
      .then(() => {
        setChannelList(data);
        showSuccess('Data berhasil disimpan');
        navigation.navigate('Channel');
      })
      .catch(e => {
        console.log('Catch Error : ', e);
        showError(`Data gagal disimpan: ${e.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(async () => {
    // await ASSet('channel', []);
    await ASGet('channel').then(response => {
      console.log('Local storage: ', response);
      setChannelList(JSON.parse(response));
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Gap height={20} />
        <NewItem
          label="Nama Channel"
          value={channel}
          onChangeText={dataNama => {
            setChannel(dataNama);
          }}
        />
        <Gap height={30} />
        <NewItem
          label="Alamat API"
          height={120}
          value={link}
          onChangeText={dataAPI => {
            setLink(dataAPI);
          }}
        />
      </ScrollView>
      <Button title="Simpan" onPress={saveData} isLoading={isLoading} />
    </View>
  );
};

export default InputChannel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
