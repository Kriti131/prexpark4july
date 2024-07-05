import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import './chart.css'; // Import the CSS file for chart styling

const Chart = () => {
    const parkingsChartRef = useRef(null);
    const peakHoursChartRef = useRef(null);

    const initParkingsChart = (container) => {
        const chart = echarts.init(container);
        const option = {
            grid: {
                bottom: 60 
            },
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    fontFamily: 'Outfit' 
                }
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    fontFamily: 'Outfit' 
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    fontFamily: 'Outfit' 
                }
            },
            series: [
                {
                    name: 'No. of Parkings',
                    type: 'line',
                    data: [50, 75, 60, 75, 70, 55, 80],
                    smooth: true,
                    lineStyle: {
                        color: 'darkblue' 
                    },
                    itemStyle: {
                        color: 'darkblue', 
                        borderColor: 'darkblue', 
                        borderWidth: 2 
                    },
                    symbol: 'circle', 
                    symbolSize: 8 
                },
                {
                    name: 'No. of Parkings',
                    type: 'line',
                    data: [30, 40, 35, 50, 45, 30, 25],
                    smooth: true,
                    lineStyle: {
                        color: 'skyblue'
                    },
                    itemStyle: {
                        color: 'skyblue',
                        borderColor: 'skyblue', 
                        borderWidth: 2 
                    },
                    symbol: 'circle', 
                    symbolSize: 8 
                }
            ]
        };
        chart.setOption(option);
    };

    const initPeakHoursChart = (container) => {
        const chart = echarts.init(container);
        const option = {
            grid: {
                bottom: 60 
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                textStyle: {
                    fontFamily: 'Outfit' 
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
                    color: '#000000',
                    fontFamily: 'Outfit' 
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
                    color: '#000000',
                    fontFamily: 'Outfit' // Set the font family
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
                                    position: 'top',
                                    fontFamily: 'Outfit' // Set the font family
                                }
                            }
                        ]
                    },
                    // Removed markLine here
                }
            ]
        };
        chart.setOption(option);
    };

    useEffect(() => {
        const handleResize = () => {
            if (parkingsChartRef.current) {
                echarts.getInstanceByDom(parkingsChartRef.current).resize();
            }
            if (peakHoursChartRef.current) {
                echarts.getInstanceByDom(peakHoursChartRef.current).resize();
            }
        };
        window.addEventListener('resize', handleResize);
        if (parkingsChartRef.current) {
            initParkingsChart(parkingsChartRef.current);
        }
        if (peakHoursChartRef.current) {
            initPeakHoursChart(peakHoursChartRef.current);
        }
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="ChartContainer">
            <div className="ChartWrapper">
                <div ref={parkingsChartRef} className="Chart"></div>
                <div className="ChartHeading">No. of Parkings</div>
            </div>
            <div className="ChartWrapper">
                <div ref={peakHoursChartRef} className="Chart"></div>
                <div className="ChartHeading">Peak Hours throughout the week</div>
            </div>
        </div>
    );
};

export default Chart;