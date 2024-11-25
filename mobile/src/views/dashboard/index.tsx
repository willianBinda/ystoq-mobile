import React, { useCallback, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
// @ts-ignore
import { ECharts } from 'react-native-echarts-wrapper';
import { useFocusEffect } from '@react-navigation/native';
import { axios } from '../../actions';
import { option_dash_1, option_dash_2 } from '../../utils/dashboard/options';

export default () => {
  const refChart1 = useRef<ECharts>();
  const refChart2 = useRef<ECharts>();

  const setUp = async () => {
    try {
      if (refChart1.current) {
        const { data } = await axios.get('/dashboard-entrada-saida');
        refChart1.current.setOption({
          series: [
            {
              data: data.map((item: any) => item.entrada), // Mapeia os valores de entrada
            },
            {
              data: data.map((item: any) => item.saida), // Mapeia os valores de saída
            },
          ],
        });
      }
    } catch (error) {
      if (refChart1.current) {
        refChart1.current.setOption({
          series: [
            {
              data: [], // Mapeia os valores de entrada
            },
            {
              data: [], // Mapeia os valores de saída
            },
          ],
        });
      }
    }
    try {
      if (refChart2.current) {
        const { data } = await axios.get('/dashboard-quantidade-estoque');

        const series = data.dados.map((item: any) => {
          return {
            ...item,
            type: 'bar',
            stack: 'total',
            barWidth: '60%',
          };
        });
        refChart2.current.setOption({
          series: series,
          xAxis: {
            data: data.estoques.map((item: any) => item.descricao),
          },
        });
      }
    } catch (error) {
      if (refChart2.current) {
        refChart2.current.setOption({
          series: {
            data: [],
            type: 'bar',
            stack: 'total',
            barWidth: '60%',
          },
          xAxis: {
            data: [],
          },
        });
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      setUp();

      //   console.log('A tela ganhou foco!');

      //   // Opcional: Retorne uma função de limpeza se necessário
      return () => {
        // console.log('A tela perdeu o foco!');
      };
    }, []),
  );
  //   useEffect(() => {

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        <ECharts
          ref={refChart1}
          option={option_dash_1}
          onLoadEnd={() => {
            setUp();
          }}
        />
      </View>
      <View style={styles.chart}>
        <ECharts
          ref={refChart2}
          option={option_dash_2}
          onLoadEnd={() => {
            setUp();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  chart: {
    width: '100%',
    height: '50%',
  },
});
