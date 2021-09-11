/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {Dimensions, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {ScrollView} from 'react-native-gesture-handler';
import Indicator from '../components/Indicator';
import {showError} from '../utils/index';
import {colorPrimary} from '../styles/colors';
import {DateTime} from 'luxon';

const ChartScreen = ({route}) => {
  const {channel, sensor, api, id} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [description, setDescription] = useState('');

  const getData = async () => {
    await axios
      .get(`${api}field/${id}.json`)
      .then(response => {
        if (response.data.channel[`field${id}`]) {
          setDataSource(response.data.feeds);
          setDescription(response.data.channel[`field${id}`]);
        }
      })
      .catch(e => {
        showError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setIsLoading(true);
    setTimeout(async () => {
      setRefreshing(false);
      getData();
    }, 2000);
  }, [refreshing]);

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Indicator />;
  }

  let labels = [];
  let dataSets = [];

  if (dataSource.length > 0) {
    let i = 0;
    dataSource.reverse();
    dataSource.forEach(item => {
      if (item[`field${id}`] === undefined) {
        return;
      }

      if (i > 15) {
        return;
      }
      labels.push(item.created_at);
      // labels.push(DateTime.fromISO(item.created_at).toFormat('d/M hh:mm'));
      dataSets.push(parseFloat(item[`field${id}`]));
      i++;
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colorPrimary}
          />
        }>
        <Text style={styles.textChannel}>
          {channel}
          {' - '}
          {sensor}
        </Text>
        <Text style={styles.textDescription}>{description}</Text>

        {dataSource.length > 0 ? (
          <LineChart
            data={{
              labels,
              datasets: [
                {
                  data: dataSets,
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={Dimensions.get('window').height - 100}
            // yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              barPercentage: 0.7,
              decimalPlaces: 2, // optional, defaults to 2dp
              fillShadowGradient: 'rgba(1, 222, 205, 1)',
              fillShadowGradientOpacity: 0.5,
              color: (opacity = 1) => `rgba(1, 122, 205, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForBackgroundLines: {
                strokeWidth: 1,
                stroke: '#e3e3e3',
                strokeDashArray: '0',
              },
            }}
            bezier
            hidePointsAtIndex={[1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 15]}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        ) : (
          <View style={styles.viewNoData}>
            <Text style={styles.textNoDAta}>Tidak ada Data</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 15,
  },
  textChannel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textNoData: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewNoData: {
    flexDirection: 'row',
    height: Dimensions.get('window').height - 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
