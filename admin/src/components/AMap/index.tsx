import React, { useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import { message } from 'antd';
type AMapProps = {
    axis: Number[],
    load: Boolean
};
const AMAP: React.FC<AMapProps> = ({ axis, load }) => {
    const [messageApi, contextHolder] = message.useMessage();
    var startAxis: number[]

    useEffect(() => {
        AMapLoader.load({
            "key": "cd8aa98f2814cb46b77daab524a10939",
            "version": "2.0",
            "plugins": ['AMap.Driving', 'AMap.Geolocation'],
        }).then((AMap) => {
            let aMap = new AMap.Map('container', {
                zoom: 15,
                center: axis //初始化地图中心点
            });
            // var aMap = new AMap.Map('container', {
            //     resizeEnable: true,
            //     // center: [116.427281, 39.903719],//地图中心点
            //     zoom: 13 //地图显示的缩放级别
            // })

            if (load) {
                new Promise((resolve) => {
                    AMap.plugin('AMap.Geolocation', function () {
                        var geolocation = new AMap.Geolocation({
                            // 是否使用高精度定位，默认：true
                            enableHighAccuracy: true,
                            // 设置定位超时时间，默认：无穷大
                            timeout: 10000,
                            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                            buttonOffset: new AMap.Pixel(10, 20),
                            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                            zoomToAccuracy: true,
                            //  定位按钮的排放位置,  RB表示右下
                            buttonPosition: 'RB'
                        })
                        aMap.addControl(geolocation);
                        geolocation.getCurrentPosition(function (status: any, result: any) {
                            if (status == 'complete') {
                                onComplete(result)
                            } else {
                                onError()
                            }
                        });
                        function onComplete(data: any) {
                            // data是具体的定位信息
                            startAxis = [data.position.lng, data.position.lat]
                            console.log(startAxis);
                            resolve(startAxis)

                        }
                        function onError() {
                            // 定位出错
                            const error = () => {
                                messageApi.open({
                                    type: 'error',
                                    content: '获取定位失败，请刷新重试',
                                });
                            };
                            error()
                        }
                    })
                }).then((res) => {
                    //引入和创建驾车规划插件
                    AMap.plugin(["AMap.Driving"], function () {
                        const driving = new AMap.Driving({
                            map: aMap,
                            panel: "container",
                        });
                        const endLngLat = axis //终点坐标
                        //获取起终点规划线路
                        driving.search(res, endLngLat, function (status: any, result: any) {
                            if (status === "complete") {
                                //status：complete 表示查询成功，no_data 为查询无结果，error 代表查询错误
                                //查询成功时，result 即为对应的驾车导航信息
                                console.log(result);
                            } else {
                                console.log("获取驾车数据失败：" + result);
                            }
                        });

                    })
                }
                )
            } else {
                // 标记
                let marker = new AMap.Marker({
                    position: axis // 基点位置
                });
                // // 地图添加标记
                aMap.add(marker);
            }

        }).catch(e => {
            console.log(e);
        })
    }, [axis, load]);
    return (
        <>
            {contextHolder}
            <div id="container" style={{ marginTop: '10px', width: '100%', height: '500px' }}></div>
        </>
    );
};

export default AMAP;