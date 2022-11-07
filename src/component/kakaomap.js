/*global kakao*/
import React, { useEffect } from 'react'

const Location = () => {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(35.63278067994149, 129.4386431197772),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(35.63278067994149, 129.4386431197772);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }, [])

    return (
        <div>
            <div id="map" style={{ width: "100%", height: "300px", padding: "40px" }}></div>
        </div>
    )
}

export default Location;