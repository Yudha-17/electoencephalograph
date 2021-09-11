import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/Fontisto';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import Card from './Card';

const HomeMenu = ({item}) => {
  const sizeMenu = 35;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.content}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chart', {
                channel: item.name,
                sensor: 'Temperature',
                api: item.api,
                id: 3,
              });
            }}>
            <Card style={styles.menu}>
              <MCIcon
                name="temperature-celsius"
                color={'red'}
                size={sizeMenu}
              />
              <Text
                style={styles.textMenu}
                adjustsFontSizeToFit
                numberOfLines={2}>
                Temperature
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chart', {
                channel: item.name,
                sensor: 'NH2',
                api: item.api,
                id: 4,
              });
            }}>
            <Card style={styles.menu}>
              <MCIcon name="atom-variant" color="#b103fc" size={sizeMenu} />
              <Text
                style={styles.textMenu}
                adjustsFontSizeToFit
                numberOfLines={2}>
                NH2
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chart', {
                channel: item.name,
                sensor: 'H2S',
                api: item.api,
                id: 7,
              });
            }}>
            <Card style={styles.menu}>
              <FIcon name="laboratory" color="#fc0362" size={sizeMenu} />
              <Text
                style={styles.textMenu}
                adjustsFontSizeToFit
                numberOfLines={2}>
                H2S
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chart', {
                channel: item.name,
                sensor: 'Humidity',
                api: item.api,
                id: 5,
              });
            }}>
            <Card style={styles.menu}>
              <MCIcon name="air-humidifier" color="blue" size={sizeMenu} />
              <Text
                style={styles.textMenu}
                adjustsFontSizeToFit
                numberOfLines={2}>
                Humidity
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chart', {
                channel: item.name,
                sensor: 'CO',
                api: item.api,
                id: 5,
              });
            }}>
            <Card style={styles.menu}>
              <MCIcon
                name="car-turbocharger"
                color="darkgreen"
                size={sizeMenu}
              />
              <Text
                style={styles.textMenu}
                adjustsFontSizeToFit
                numberOfLines={2}>
                CO
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chart', {
                channel: item.name,
                sensor: 'Dust Particles',
                api: item.api,
                id: 8,
              });
            }}>
            <Card style={styles.menu}>
              <FIcon name="atom" color="#03fc84" size={sizeMenu} />
              <Text
                style={styles.textMenu}
                adjustsFontSizeToFit
                numberOfLines={2}>
                Dust Particles
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chart', {
                channel: item.name,
                sensor: 'NO2',
                api: item.api,
                id: 3,
              });
            }}>
            <Card style={styles.menu}>
              <SLIcon name="chemistry" color="orange" size={sizeMenu} />
              <Text
                style={styles.textMenu}
                adjustsFontSizeToFit
                numberOfLines={2}>
                NO2
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chart', {
                channel: item.name,
                sensor: 'SO2',
                api: item.api,
                id: 6,
              });
            }}>
            <Card style={styles.menu}>
              <FA5Icon name="soap" color="#b1fc03" size={sizeMenu} />
              <Text
                style={styles.textMenu}
                adjustsFontSizeToFit
                numberOfLines={2}>
                SO2
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeMenu;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  menu: {
    width: width * 0.3 - 15,
    height: width * 0.3 - 25,
    alignItems: 'center',
  },
  textMenu: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: 5,
  },
});
