<template lang="html">
  <!-- 行业数据 -->
  <div class="business-data">
      <div class="titleBox">
          <h4 class="list-title"><a href="#">行业数据</a></h4>
      </div>
      <div class="echartsBox">
          <div id="echartsMap"></div>
          <div id="echartsTable"></div>
      </div>
  </div>
</template>

<script>
//全部加载
// import echarts from 'echarts'
//按需加载
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/map'
import 'echarts/theme/macarons'
import 'echarts/map/js/china'

export default {
  data() {
    return {
      mapOption: {
          title: {
              text: '本月乳品行业产量',
              x: 'center'
          },
          tooltip: {
              trigger: 'item',
              position: 'inside'
          },
          legend: {
              orient: 'vertical',
              x: 'left',
              data: ['乳制品']
          },
          dataRange: {
              min: 0,
              max: 500000,
              x: 'left',
              y: 'bottom',
              text: ['高(单位：吨)', '低'], // 文本，默认为数值文本
              calculable: true
          },
          toolbox: {
              show: true,
              orient: 'vertical',
              x: 'right',
              y: 'center',
              feature: {
                  mark: {
                      show: true
                  },
                  dataView: {
                      show: true,
                      readOnly: false
                  },
                  restore: {
                      show: true
                  },
                  saveAsImage: {
                      show: true
                  }
              }
          },
          roamController: {
              show: true,
              x: 'right',
              mapTypeControl: {
                  'china': true
              }
          },
          series: [{
              name: '乳制品',
              type: 'map',
              mapType: 'china',
              roam: false,
              itemStyle: {
                  normal: {
                      label: {
                          show: true
                      }
                  },
                  emphasis: {
                      label: {
                          show: true
                      }
                  }
              },
              data: [{
                      name: '北京',
                      value: 50729.02
                  }, {
                      name: '天津',
                      value: 68260.99
                  }, {
                      name: '上海',
                      value: 44182.37
                  }, {
                      name: '重庆',
                      value: 12587.00
                  }, {
                      name: '河北',
                      value: 263174.48
                  }, {
                      name: '河南',
                      value: 159825.45
                  }, {
                      name: '云南',
                      value: 441555.77
                  }, {
                      name: '辽宁',
                      value: 69533.55
                  }, {
                      name: '黑龙江',
                      value: 118521.95
                  }, {
                      name: '湖南',
                      value: 23341.36
                  }, {
                      name: '安徽',
                      value: 79928.66
                  }, {
                      name: '山东',
                      value: 174469.69
                  }, {
                      name: '新疆',
                      value: 29889.54
                  }, {
                      name: '江苏',
                      value: 117466.91
                  }, {
                      name: '浙江',
                      value: 39732.78
                  }, {
                      name: '江西',
                      value: 10586.96
                  }, {
                      name: '湖北',
                      value: 77050.34
                  }, {
                      name: '广西',
                      value: 28999.48
                  }, {
                      name: '甘肃',
                      value: 22441.58
                  }, {
                      name: '山西',
                      value: 35692.07
                  }, {
                      name: '内蒙古',
                      value: 244400.91
                  }, {
                      name: '陕西',
                      value: 125828.60
                  }, {
                      name: '吉林',
                      value: 15213.79
                  }, {
                      name: '福建',
                      value: 10586.96
                  }, {
                      name: '贵州',
                      value: 6300.00
                  }, {
                      name: '广东',
                      value: 56780.55
                  }, {
                      name: '青海',
                      value: 13751.00
                  }, {
                      name: '西藏',
                      value: 667.00
                  }, {
                      name: '四川',
                      value: 114957.13
                  }, {
                      name: '宁夏',
                      value: 58145.35
                  }, {
                      name: '海南',
                      value: 445.85
                  }

              ]
          }]
      },
      barOption: {
        title: {
            //text: 'XX行业2015年各季度产量',
            // subtext: '纯属虚构',
            x: 'center',
            y: '0'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['华中', '华东', '华北', '华西', '华南'],
            y: '35'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'centeer',
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar', 'stack', 'tiled']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['一季度', '二季度', '三季度', '四季度']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '华中',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
        }, {
            name: '华东',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
        }, {
            name: '华北',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
        }, {
            name: '华西',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
        }, {
            name: '华南',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                data: [
                    [{
                        type: 'min'
                    }, {
                        type: 'max'
                    }]
                ]
            }
        }]
      }
    }
  },
  computed: {},
  mounted() {
    this.echartsInit()
  },
  attached() {},
  methods: {
    echartsInit(){
      const barChart = echarts.init(document.getElementById('echartsTable'), 'macarons')
      const mapChart = echarts.init(document.getElementById('echartsMap'), 'macarons')

      mapChart.setOption(this.mapOption)
      barChart.setOption(this.barOption)
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
