import React, { useCallback, useContext, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context } from '../../context/authContext';
// @ts-ignore
import { ECharts } from 'react-native-echarts-wrapper';
import { useFocusEffect } from '@react-navigation/native';
import { axios } from '../../actions';
export default () => {
  const refChart1 = useRef<ECharts>();
  const refChart2 = useRef<ECharts>();
  const { state } = useContext(Context);

  useFocusEffect(
    useCallback(() => {
      const setUp = async () => {
        try {
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
        } catch (error) {
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
        try {
          const { data } = await axios.get('/dashboard-quantidade-estoque', {
            headers: {
              Authorization: `Bearer ${state.token}`,
              Email: 'Bearer ' + state.email,
            },
          });

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
        } catch (error) {
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
      };
      setUp();

      //   console.log('A tela ganhou foco!');

      //   // Opcional: Retorne uma função de limpeza se necessário
      return () => {
        console.log('A tela perdeu o foco!');
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
  //   useEffect(() => {

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  const option = {
    title: {
      text: 'Entrada e Saída de Produtos',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      bottom: 0, // Posiciona a legenda na parte inferior
      orient: 'horizontal', // Define a orientação horizontal
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%', // Ajusta a altura para dar espaço para a legenda
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: [
      {
        type: 'bar',
        name: 'entrada',
        itemStyle: {
          color: '#5882F4', // Define a cor azul
        },
      },
      {
        name: 'Saídas',
        type: 'bar',
        itemStyle: {
          color: '#76D186', // Define a cor verde claro
        },
      },
    ],
  };

  const option2 = {
    title: {
      text: 'Produtos Disponíveis por Estoque',
    },
    xAxis: {
      type: 'category',
      //   data: ['Estoque reserva 1', 'Estoque reserva 2', 'Estoque reserva 3'],
      axisLabel: {
        rotate: 15, // Rotaciona as labels do eixo X em 45 graus
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      bottom: 0, // Posiciona a legenda na parte inferior
      orient: 'horizontal', // Define a orientação horizontal
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '20%', // Ajusta a altura para dar espaço para a legenda
      containLabel: true,
    },
    // series: [
    //   {
    //     type: 'bar',
    //     stack: 'total',
    //     barWidth: '60%',
    //   },
    // ],
  };
  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        <ECharts ref={refChart1} option={option} />
      </View>
      <View style={styles.chart}>
        <ECharts ref={refChart2} option={option2} />
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
