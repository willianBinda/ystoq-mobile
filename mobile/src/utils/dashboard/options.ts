export const option_dash_1 = {
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

export const option_dash_2 = {
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
