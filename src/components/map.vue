<template>
  <div class="map">
    <div class="textcontent">
      层级:{{ mtype }} {{ active !== 3 }}
    </div>
    <baidu-map class="map" :center="map.center" map-type="BMAP_HYBRID_MAP"
               :scroll-wheel-zoom="true" :zoom="map.zoom"
               @ready="handler">
      <bm-traffic>
      </bm-traffic>
      <!--    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>-->
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <!--    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>-->
      <!-- 南门区 -->
      <bm-polygon :path="area1" @click="active!==1&&showA()" :fillColor="active===1?'':'#95e1d3'">
      </bm-polygon>
      <bm-label content="南门片区" @click="showA" :position="A"
                :labelStyle="{color: 'red',border:'none',background:'none', fontSize : '15px'}" title="点击查看"/>
      <bm-polygon :path="are2" @click="active!==2&&showB()" :fillColor="active===2?'':'#eaffd0'">
      </bm-polygon>
      <!--景明片区-->
      <bm-label content="景明片区" @click="showB" :position="B"
                :labelStyle="{color: 'red',border:'none',background:'none',  fontSize : '18px'}" title="点击查看"/>
      <!--  景明片区-->
      <bm-polygon :path="area3" @click="active!==3&&showC()" :fillColor="active===3?'':'#fce38a'">
      </bm-polygon>

      <bm-label content="挑李片区" @click="showC" :position="C"
                :labelStyle="{color: 'red',border:'none',background:'none',  fontSize : '18px'}" title="点击查看"/>
      <!--    海苑区-->
      <bm-polygon :path="area4" @click="active!==4&&showD()" :fillColor="active===4?'':'#3490de'">
      </bm-polygon>
      <bm-label content="海苑片区" @click="showD" :position="D"
                :labelStyle="{color: 'red',border:'none',background:'none',  fontSize : '18px'}" title="点击查看"/>
      // 点
      <bm-label :key="item.name" v-if="item.type===active&&mtype===2" v-for="item in list" :content="item.name"
                :position="item.position"
                :labelStyle="{color: '#00000',border:'none',background:'#fffff', fontSize : '16px'}"
                :offset="{width: -35, height: 30}"/>
    </baidu-map>
  </div>

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
    A: {lng: 114.04715176569117, lat: 32.136322960249466},
    B: {lng: 114.050312, lat: 32.14267},
    C: {lng: 114.048035, lat: 32.14212},
    D: {lng: 114.049363, lat: 32.139597},
    // 南门区
    area1: [
      {lng: 114.04760990150125, lat: 32.13696504435769},
      {lng: 114.04727303693501, lat: 32.13638411131355},
      {lng: 114.04675651126678, lat: 32.13630385053346},
      {lng: 114.04680142654227, lat: 32.13599045061395},
      {lng: 114.04788837620934, lat: 32.13600191648382},
      {lng: 114.048699, lat: 32.137235},
      {lng: 114.049112, lat: 32.137108},
      {lng: 114.049332, lat: 32.137353},
      {lng: 114.04821, lat: 32.137823},
    ],
    // 景明
    are2: [
      {lng: 114.049526, lat: 32.14147},
      {lng: 114.049885, lat: 32.141439},
      {lng: 114.049993, lat: 32.141649},
      {lng: 114.050173, lat: 32.141726},
      {lng: 114.050316, lat: 32.141997},
      {lng: 114.051354, lat: 32.141932},
      {lng: 114.051448, lat: 32.142188},
      {lng: 114.05152, lat: 32.142571},
      {lng: 114.051906, lat: 32.142601},
      {lng: 114.051933, lat: 32.142849},
      {lng: 114.051251, lat: 32.142884},
      {lng: 114.051228, lat: 32.143216},
      {lng: 114.050415, lat: 32.143251},
      {lng: 114.050447, lat: 32.143537},
      {lng: 114.04958, lat: 32.143629},
      {lng: 114.049414, lat: 32.143514},
      {lng: 114.049337, lat: 32.14176},
      {lng: 114.049472, lat: 32.14147},

    ],
    // 桃李
    area3: [
      {lng: 114.04909210559272, lat: 32.14088624467942},
      {lng: 114.04860702061733, lat: 32.14104293628163},
      {lng: 114.04750210484005, lat: 32.14117669719039},
      {lng: 114.0475604946982, lat: 32.14180345995241},
      {lng: 114.0478389694063, lat: 32.14180728166323},
      {lng: 114.04785244398894, lat: 32.143026399159254},
      {lng: 114.04931219044266, lat: 32.143053150769305},
      {lng: 114.04926278363962, lat: 32.14172320398792},
      {lng: 114.04946041085181, lat: 32.14142893150787},

    ],
    //  海苑片区
    area4: [
      {lng: 114.050685, lat: 32.140973},
      {lng: 114.050855, lat: 32.140858},
      {lng: 114.050496, lat: 32.14027},
      {lng: 114.050586, lat: 32.139559},
      {lng: 114.050685, lat: 32.139295},
      {lng: 114.05073, lat: 32.138691},
      {lng: 114.050523, lat: 32.138569},
      {lng: 114.050042, lat: 32.138539},
      {lng: 114.049989, lat: 32.13928},
      {lng: 114.049423, lat: 32.139184},
      {lng: 114.049476, lat: 32.13837},
      {lng: 114.049185, lat: 32.138347},
      {lng: 114.049104, lat: 32.138374},
      {lng: 114.048879, lat: 32.1386},
      {lng: 114.048794, lat: 32.138756},
      {lng: 114.048241, lat: 32.138963},
      {lng: 114.048502, lat: 32.139418},
      {lng: 114.048933, lat: 32.140067},
      {lng: 114.049418, lat: 32.140602},
      {lng: 114.05011, lat: 32.140327},
    ],
    // 类型
    mtype: 1,
    active: 0,// 0为全校 1 2 3 4区
    list: [
      {
        name: "1#",
        type: 3,
        position: {lng: 114.047902, lat: 32.141508},

      }, {
        name: "2#",
        type: 3,
        position: {lng: 114.048096, lat: 32.141787},

      }, {
        name: "3#",
        type: 3,
        position: {lng: 114.048208, lat: 32.142035},
      },
      {
        name: "4#",
        type: 3,
        position: {lng: 114.0489, lat: 32.141978},
      }, {
        name: "5#",
        type: 3,
        position: {lng: 114.048904, lat: 32.142295},
      }, {
        name: "6#",
        type: 3,
        position: {lng: 114.048181, lat: 32.142337},
      }, {
        name: "7#",
        type: 3,
        position: {lng: 114.048936, lat: 32.14257},
      }, {
        name: "8#",
        type: 3,
        position: {lng: 114.048203, lat: 32.14265},
      }, {
        name: "9#",
        type: 3,
        position: {lng: 114.048985, lat: 32.142964},
      }, {
        name: "28#",
        type: 3,
        position: {lng: 114.048199, lat: 32.142983},
      }, {
        name: "1舍",
        type: 1,
        position: {lng: 114.047235, lat: 32.136168},
      }, {
        name: "2舍",
        type: 1,
        position: {lng: 114.048632, lat: 32.137567},
      }]
  }),
  methods: {
    handler({BMap, map}) {
      let me = this;
      // 点击事件获取经纬度
      map.addEventListener('click', function (e) {
        console.log("{lng:" + e.point.lng + ", lat: " + e.point.lat + "},")
      })
    },
    showA() {
      this.map.center = this.A
      this.mtype = 2
      this.active = 1
      this.map.zoom = 20
    },
    showB() {
      this.map.center = this.B
      this.mtype = 2
      this.active = 2
      this.map.zoom = 20
    },
    showC() {
      this.map.center = {lng: 114.048035, lat: 32.14212}
      this.mtype = 2
      this.active = 3
      this.map.zoom = 20
    },
    showD() {
      this.map.center = this.D
      this.mtype = 2
      this.active = 4
      this.map.zoom = 20
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
