/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Gap from '../../components/Gap';
import NewItem from '../../components/NewItem';
import {colorDanger, colorPrimary} from '../../styles/colors';
import {ASGet, ASSet, showError, showSuccess} from '../../utils';

const UpdateChannelScreen = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [api, setApi] = useState('');
  // const [id, setId] = useState(0);
  const [index, setIndex] = useState(0);
  const [channelList, setChannelList] = useState([]);

  const saveData = async () => {
    setIsLoading(true);

    const data = {id: route.params.id, name, api};
    const currentData = [...channelList];
    currentData[index] = data;

    await ASSet('channel', JSON.stringify(currentData))
      .then(() => {
        setChannelList(currentData);
        showSuccess('Data berhasil disimpan');
        navigation.navigate('Channel');
      })
      .catch(e => {
        console.log('Update Data : ', e);
        showError(`Data gagal disimpan: ${e.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteData = async () => {
    Alert.alert(
      'Hapus Channel',
      'Apakah Anda yakin ingin menghapus channel ini.?',
      [
        {
          text: 'Ya',
          onPress: async () => {
            setIsLoading(true);

            const currentData = [...channelList];
            currentData.splice(index, 1);

            await ASSet('channel', JSON.stringify(currentData))
              .then(() => {
                setChannelList(currentData);
                showSuccess('Data berhasil dihapus');
                navigation.navigate('Channel');
              })
              .catch(e => {
                console.log('Update Data : ', e);
                showError(`Data gagal disimpan: ${e.message}`);
              })
              .finally(() => {
                setIsLoading(false);
              });
          },
        },
        {
          text: 'Tidak',
          style: 'cancel',
        },
      ],
    );
  };

  useEffect(async () => {
    await ASGet('channel').then(response => {
      if (response) {
        const data = JSON.parse(response);
        for (const i in data) {
          if (data[i].id === route.params.id) {
            setName(data[i].name);
            setApi(data[i].api);
            setIndex(i);
            break;
          }
        }

        setChannelList(JSON.parse(response));
      }

      //   setId(route.params.id);
      //   setName(route.params.name);
      //   setApi(route.params.api);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Gap height={20} />
        <NewItem
          label="Nama Channel"
          value={name}
          onChangeText={dataNama => {
            setName(dataNama);
          }}
        />
        <Gap height={20} />
        <NewItem
          label="Alamat API"
          value={api}
          height={100}
          onChangeText={dataAPI => {
            setApi(dataAPI);
          }}
        />
        <Gap height={20} />
        <Button title="Simpan" onPress={saveData} isLoading={isLoading} />
      </View>
      <Button
        title="Hapus"
        onPress={deleteData}
        isLoading={isLoading}
        style={styles.buttonDelete}
      />
    </View>
  );
};

export default UpdateChannelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  buttonDelete: {
    backgroundColor: colorDanger,
  },
});
