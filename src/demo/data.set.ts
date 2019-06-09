export const colors = ['#a61234', '#66aa66', '#b9b9b9', '#efa021'];
export class DataSet {
  radar = {
    data: [
      [
        { axis: 'Battery Life', value: 22 },
        { axis: 'Brand', value: 28 },
        { axis: 'Contract Cost', value: 9 },
        { axis: 'Design And Quality', value: 17 },
        { axis: 'Have Internet Connectivity', value: 92 },
        { axis: 'Large Screen', value: 12 },
        { axis: 'Price Of Device', value: 21 },
        { axis: 'To Be A Smartphone', value: 50 }
      ], [
        { axis: 'Battery Life', value: 7 },
        { axis: 'Brand', value: 16 },
        { axis: 'Contract Cost', value: 35 },
        { axis: 'Design And Quality', value: 13 },
        { axis: 'Have Internet Connectivity', value: 20 },
        { axis: 'Large Screen', value: 13 },
        { axis: 'Price Of Device', value: 35 },
        { axis: 'To Be A Smartphone', value: 38 }
      ], [
        { axis: 'Battery Life', value: 6 },
        { axis: 'Brand', value: 10 },
        { axis: 'Contract Cost', value: 30 },
        { axis: 'Design And Quality', value: 14 },
        { axis: 'Have Internet Connectivity', value: 22 },
        { axis: 'Large Screen', value: 14 },
        { axis: 'Price Of Device', value: 41 },
        { axis: 'To Be A Smartphone', value: 30 }
      ]
    ],
    opts: {
      engine: 'd3',
    }
  };
  list = [{
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [5, 2, 4, 2, 0],
        [1, 3, 4, 2, 8]
      ]
    },
    opts: {
      stackBars: true,
      type: 'Bar',
    }
  }, {
    opts: {
      type: 'Line',
    }
  }, {
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [10, 2, 4, 3]
    },
    opts: {
      showLabel: true,
      type: 'Pie',
    }
  }];
}
