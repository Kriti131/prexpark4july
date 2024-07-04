import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import './chart.css'; // Import the CSS file for chart styling

const Chart = () => {
    const parkingsChartRef = useRef(null);
    const peakHoursChartRef = useRef(null);

    const initParkingsChart = (container) => {
        // const chart = echarts.init(container);
        // const option = {
        //     title: {
        //         text: 'No. of Parkings'
        //     },
        //     tooltip: {
        //         trigger: 'axis'
        //     },
        //     xAxis: {
        //         type: 'category',
        //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        //     },
        //     yAxis: {
        //         type: 'value'
        //     },
        //     series: [
        //         {
        //             name: 'No. of Parkings',
        //             type: 'line',
        //             data: [50, 75, 60, 75, 70, 55, 80],
        //             smooth: true
        //         },
        //         {
        //             name: 'No. of Parkings',
        //             type: 'line',
        //             data: [30, 40, 35, 50, 45, 30, 25],
        //             smooth: true
        //         }
        //     ]
        // };
        // chart.setOption(option);
        const chart = echarts.init(container);
    const option = {
        title: {
            text: 'No. of Parkings'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'No. of Parkings',
                type: 'line',
                data: [50, 75, 60, 75, 70, 55, 80],
                smooth: true,
                lineStyle: {
                    color: 'darkblue' // Dark blue color for the first line
                },
                itemStyle: {
                    color: 'darkblue', // Fill color for the data points
                    borderColor: 'darkblue', // Border color for the data points
                    borderWidth: 2 // Border width for the data points
                },
                symbol: 'circle', // Shape of the data points
                symbolSize: 8 // Size of the data points
            },
            {
                name: 'No. of Parkings',
                type: 'line',
                data: [30, 40, 35, 50, 45, 30, 25],
                smooth: true,
                lineStyle: {
                    color: 'skyblue' // Sky blue color for the second line
                },
                itemStyle: {
                    color: 'skyblue', // Fill color for the data points
                    borderColor: 'skyblue', // Border color for the data points
                    borderWidth: 2 // Border width for the data points
                },
                symbol: 'circle', // Shape of the data points
                symbolSize: 8 // Size of the data points
            }
        ]
    };
    chart.setOption(option);
    };

    const initPeakHoursChart = (container) => {
        const chart = echarts.init(container);
        const option = {
            title: {
                text: 'Peak Hours throughout the week',
                left: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
                axisLine: {
                    lineStyle: {
                        color: '#C0C0C0'
                    }
                },
                axisLabel: {
                    color: '#000000'
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#C0C0C0'
                    }
                },
                axisLabel: {
                    color: '#000000'
                },
                splitLine: {
                    lineStyle: {
                        color: '#E0E0E0'
                    }
                }
            },
            series: [
                { 
                    name: 'Peak Hours', 
                    type: 'line', 
                    data: [40, 40, 60, 45, 50, 50, 90, 60, 70, 80, 60, 50], 
                    smooth: false,
                    lineStyle: {
                        color: '#0000FF',
                        width: 2
                    },
                    itemStyle: {
                        opacity: 0 // Make points invisible
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 0, 255, 0.1)'
                        }, {
                            offset: 1,
                            color: 'rgba(0, 0, 255, 0)'
                        }], false),
                    },
                    markPoint: { 
                        data: [
                            { 
                                type: 'max', 
                                name: 'Max', 
                                valueIndex: 6, 
                                coord: ['12:00', 90],
                                symbol: 'none',
                                label: {
                                    show: true,
                                    formatter: '{c}',
                                    position: 'top'
                                }
                            }
                        ]
                    },
                    markLine: {
                        data: [
                            {
                                xAxis: '12:00',
                                lineStyle: {
                                    color: '#FF0000',
                                    type: 'dashed'
                                }
                            }
                        ]
                    }
                }
            ]
        };
        chart.setOption(option);
    
    };

    useEffect(() => {
        if (parkingsChartRef.current) {
            initParkingsChart(parkingsChartRef.current);
        }
        if (peakHoursChartRef.current) {
            initPeakHoursChart(peakHoursChartRef.current);
        }
    }, []);

    return (
        <div className="ChartContainer">
            <div ref={parkingsChartRef} className="Chart"></div>
            <div ref={peakHoursChartRef} className="Chart"></div>
        </div>
    );
};

export default Chart;