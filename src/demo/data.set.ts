export class DataSet {
  radar = {
    data: [1,2,3],
    opts: {
      engine: 'd3',
    }
  };
  list = [{
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [5, 2, 4, 2, 0]
      ]
    },
    opts: {
      type: 'Bar',
    }
  }, {
    opts: {
      type: 'Line',
    }
  }, {
    data: {
      series: [10, 2, 4, 3]
    },
    opts: {
      type: 'Pie',
    }
  }];
}
