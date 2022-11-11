<template>
  <baidu-map class="map" :center="map.center" map-type="BMAP_HYBRID_MAP"
             :scroll-wheel-zoom="true" :zoom="map.zoom"
             @ready="handler">
    <bm-traffic>
    </bm-traffic>
    <!--    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>-->
    <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
    <!--    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>-->
    <!-- 南门区 -->
    <bm-polygon :path="area1" fillColor="#EFF5F5">
    </bm-polygon>
    <bm-label content="南门" :position="{lng: 114.04715176569117, lat: 32.136322960249466}"
              :labelStyle="{color: 'red', fontSize : '18px'}" title="点击查看"/>
  </baidu-map>
</template>

<script>
export default {
  data: () => ({
    map: {
      center: {lng: 114.048924, lat: 32.140866},
      zoom: 17,
      show: true,
      dragging: true,

    },
    // 南门区
    area1: [
      {lng: 114.04760990150125, lat: 32.13696504435769},
      {lng: 114.04727303693501, lat: 32.13638411131355},
      {lng: 114.04675651126678, lat: 32.13630385053346},
      {lng: 114.04680142654227, lat: 32.13599045061395},
      {lng: 114.04788837620934, lat: 32.13600191648382},
      {lng: 114.0478479524614, lat: 32.13693064711044},
      {lng: 114.04760990150125, lat: 32.13696504435769},
    ]
  }),
  methods: {
    handler({BMap, map}) {
      let me = this;
      // 点击事件获取经纬度
      map.addEventListener('click', function (e) {
        console.log(e.point.lng, e.point.lat)
      })
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
