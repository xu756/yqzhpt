<template>
  <div class="map">
    <div class="textcontent">
      <div v-if="mtype === 1">
        <h2 style="text-align: center; color: #0c8918">信阳师范学院谭山校区</h2>
        <el-row class="line">
          <el-col :span="5" class="l">总指挥:</el-col>
          <el-col :span="15" :push="2">校长</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="5" class="l">联系方式:</el-col>
          <el-col :span="15" :push="2">电话</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="5" class="l">学生人数:</el-col>
          <el-col :span="15" :push="2">24000</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="5" class="l">教师人数:</el-col>
          <el-col :span="15" :push="2">1162</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="5" class="l">宿舍楼:</el-col>
          <el-col :span="15" :push="2">31栋</el-col>
        </el-row>
      </div>
      <div v-if="mtype === 2">
        <h2 style="text-align: center; color: #e29c45">{{ mt2.Name }}</h2>
        <el-row class="line">
          <el-col :span="6" class="l">总指挥:</el-col>
          <el-col :span="15" :push="2">{{ mt2.Leader1 }}</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="6" class="l">联系方式:</el-col>
          <el-col :span="15" :push="2">{{ mt2.Tel }}</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="6" class="l">宿舍楼:</el-col>
          <el-col :span="15" :push="2">{{ mt2.Floors }}栋</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="6" class="l">学生人数:</el-col>
          <el-col :span="15" :push="2">{{ mt2.Students }}人</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="6" class="l">教师人数:</el-col>
          <el-col :span="15" :push="2">{{ mt2.Teachers }}人</el-col>
        </el-row>
        <el-table stripe :data="mt2.Floor" height="450" style="width: 100%">
          <el-table-column width="30" type="expand">
            <template slot-scope="props">
              <el-form
                v-for="item in props.row.Emargency"
                class="f"
                :key="item.Tel"
                label-position="left"
                inlin
              >
                <el-form-item label="楼长：">
                  <span>{{ item.Name }}</span>
                </el-form-item>
                <el-form-item label="联系方式：">
                  <span>{{ item.Tel }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <el-table-column prop="Name" align="center" label="楼栋" width="80">
          </el-table-column>
          <el-table-column
            prop="XY"
            width="130"
            align="center"
            label="负责学院"
          >
          </el-table-column>
          <el-table-column
            prop="Students"
            width="80"
            align="center"
            label="学生人数"
          >
          </el-table-column>
          <el-table-column
            prop="Teachers"
            align="center"
            label="教师人数"
            width="80"
          >
          </el-table-column>
        </el-table>
      </div>
      <div v-if="mtype === 3">
        <h2 style="text-align: center; color: #003472">{{ mt3.Name }}</h2>
        <el-row class="line">
          <el-col :span="5" class="l">负责学院:</el-col>
          <el-col :span="8" :push="2">{{ mt3.XY }}</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="5" class="l">学生人数:</el-col>
          <el-col :span="15" :push="2">{{ mt3.Students }}人</el-col>
        </el-row>
        <el-row class="line">
          <el-col :span="5" class="l">教师人数:</el-col>
          <el-col :span="15" :push="2">{{ mt3.Teachers }}人</el-col>
        </el-row>

        <el-tabs stretch type="border-card">
          <el-tab-pane icon="el-icon-search">
            <span slot="label"
              ><i class="iconfont icon-yingjizhihui"></i> 应急协调组</span
            >
            <el-table :data="mt3.Emargency" style="width: 100%">
              <el-table-column
                type="index"
                align="center"
                label="序号"
                width="50"
              >
              </el-table-column>
              <el-table-column
                prop="Name"
                label="姓名"
                align="center"
                width="80"
              >
              </el-table-column>
              <el-table-column
                prop="Work"
                label="岗位明细"
                align="center"
                width="100"
              >
              </el-table-column>
              <el-table-column
                prop="Tel"
                label="联系方式"
                align="center"
                width="130"
              >
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"
              ><i class="iconfont icon-shenghuoyongpin"></i> 生活保障组</span
            >
            <el-table :data="mt3.Life" style="width: 100%">
              <el-table-column
                type="index"
                align="center"
                label="序号"
                width="50"
              >
              </el-table-column>
              <el-table-column
                prop="Name"
                label="姓名"
                align="center"
                width="65"
              >
              </el-table-column>
              <el-table-column
                prop="Work"
                label="岗位明细"
                align="center"
                width="100"
              >
              </el-table-column>
              <el-table-column
                prop="Tel"
                label="联系方式"
                align="center"
                width="130"
              >
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"
              ><i class="iconfont icon-fenshiguankong"></i> 楼层管控组</span
            >
            <el-table :data="mt3.Control" style="width: 100%">
              <el-table-column
                type="index"
                align="center"
                label="序号"
                width="40"
              >
              </el-table-column>
              <el-table-column
                prop="Name"
                label="姓名"
                align="center"
                width="65"
              >
              </el-table-column>
              <el-table-column
                prop="Work"
                label="岗位明细"
                align="center"
                width="130"
              >
              </el-table-column>
              <el-table-column
                prop="Tel"
                label="联系方式"
                align="center"
                width="130"
              >
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"
              ><i class="iconfont icon-a-shiguanhesuan"></i> 核酸采集组</span
            >
            <el-table :data="mt3.Hs" style="width: 100%">
              <el-table-column
                type="index"
                align="center"
                label="序号"
                width="50"
              >
              </el-table-column>
              <el-table-column
                prop="Name"
                label="姓名"
                align="center"
                width="65"
              >
              </el-table-column>
              <el-table-column
                prop="Work"
                label="岗位明细"
                align="center"
                width="100"
              >
              </el-table-column>
              <el-table-column
                prop="Tel"
                label="联系方式"
                align="center"
                width="130"
              >
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="title">信阳师范学院网格化管理体系可视地图</div>
    <div class="header">
      <el-button type="primary" @click="showall" v-show="mtype !== 1"
        >查看全校</el-button
      >
      <el-button type="success" @click="showA" v-show="active !== 1"
        >南门片区</el-button
      >
      <el-button type="primary" @click="showB" v-show="active !== 2"
        >景明片区</el-button
      >
      <el-button type="info" @click="showC" v-show="active !== 3"
        >浉源片区</el-button
      >
      <el-button type="success" @click="showD" v-show="active !== 4"
        >海苑片区</el-button
      >
    </div>
    <div class="lb">
      <template v-for="item in list">
        <el-button
          type="warning"
          @click="get3(item.id, item.position)"
          :key="item.name"
          v-if="item.type === active && mtype >= 2"
        >
          {{ item.name }}
        </el-button>
      </template>
    </div>
    <baidu-map
      :dragging="true"
      :inertial-dragging="true"
      style="width: 100%; height: 100%"
      :continuous-zoom="true"
      :center="map.center"
      map-type="BMAP_HYBRID_MAP"
      :scroll-wheel-zoom="true"
      :zoom="map.zoom"
      @ready="handler"
    >
      <bm-polygon
        :path="area1"
        @click="active !== 1 && showA()"
        strokeColor="#95e1d3"
        :fillColor="active === 1 ? '' : '#95e1d3'"
      >
      </bm-polygon>
      <bm-label
        content="南门片区"
        @click="showA"
        :position="A"
        :labelStyle="{
          color: '#f8f3d4',
          border: 'none',
          background: 'none',
          fontSize: '15px',
        }"
        title="点击查看"
      />
      <bm-polygon
        :path="are2"
        @click="active !== 2 && showB()"
        strokeColor="#eaffd0"
        :fillColor="active === 2 ? '' : '#eaffd0'"
      >
      </bm-polygon>
      <!--景明片区-->
      <bm-label
        content="景明片区"
        @click="showB"
        :position="B"
        :labelStyle="{
          color: '#00adb5',
          border: 'none',
          background: 'none',
          fontSize: '18px',
        }"
        title="点击查看"
      />
      <!--  景明片区-->
      <bm-polygon
        :path="area3"
        @click="active !== 3 && showC()"
        strokeColor="#88ada6"
        :fillColor="active === 3 ? '' : '#88ada6'"
      >
      </bm-polygon>

      <bm-label
        content="浉源片区"
        @click="showC"
        :position="C"
        :labelStyle="{
          color: '#eeeeee',
          border: 'none',
          background: 'none',
          fontSize: '18px',
        }"
        title="点击查看"
      />
      <!--    海苑区-->
      <bm-polygon
        :path="area4"
        @click="active !== 4 && showD()"
        strokeColor="#3490de"
        :fillColor="active === 4 ? '' : '#3490de'"
      >
      </bm-polygon>
      <bm-label
        content="海苑片区"
        @click="showD"
        :position="D"
        :labelStyle="{
          color: 'red',
          border: 'none',
          background: 'none',
          fontSize: '18px',
        }"
        title="点击查看"
      />
      <template v-for="item in list">
        <bm-label
          :key="item.name"
          v-if="item.type === active && mtype >= 2"
          :content="item.name"
          :position="item.position"
          @click="get3(item.id, item.position)"
          :labelStyle="{
            color: '#00000',
            border: 'none',
            borderRadius: '5px',
            background: '#fffff',
            fontSize: '16px',
          }"
          :offset="{ width: -35, height: 30 }"
        >
        </bm-label>
      </template>

      <template v-for="item in ct">
        <bm-label
          :key="item.name"
          v-if="item.type === active && mtype >= 2"
          :content="item.name"
          :position="item.position"
          :labelStyle="{
            color: '#00000',
            border: 'none',
            borderRadius: '5px',
            background: '#16a951',
            fontSize: '16px',
          }"
          :offset="{ width: -35, height: 30 }"
        >
        </bm-label>
      </template>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data: () => ({
    map: {
      center: { lng: 114.048924, lat: 32.140866 },
      zoom: 17,
      show: true,
      dragging: true,
    },
    ispc: true,
    A: { lng: 114.04715176569117, lat: 32.136322960249466 },
    B: { lng: 114.050312, lat: 32.14267 },
    C: { lng: 114.048035, lat: 32.14212 },
    D: { lng: 114.049363, lat: 32.139597 },
    // 南门区
    area1: [
      { lng: 114.04760990150125, lat: 32.13696504435769 },
      { lng: 114.04727303693501, lat: 32.13638411131355 },
      { lng: 114.04675651126678, lat: 32.13630385053346 },
      { lng: 114.04680142654227, lat: 32.13599045061395 },
      { lng: 114.04788837620934, lat: 32.13600191648382 },
      { lng: 114.048699, lat: 32.137235 },
      { lng: 114.049112, lat: 32.137108 },
      { lng: 114.049332, lat: 32.137353 },
      { lng: 114.04821, lat: 32.137823 },
    ],
    // 浉源片区
    are2: [
      { lng: 114.050316, lat: 32.141997 },
      { lng: 114.051354, lat: 32.141932 },
      { lng: 114.051448, lat: 32.142188 },
      { lng: 114.05152, lat: 32.142571 },
      { lng: 114.051906, lat: 32.142601 },
      { lng: 114.051933, lat: 32.142849 },
      { lng: 114.051251, lat: 32.142884 },
      { lng: 114.051228, lat: 32.143216 },
      { lng: 114.050415, lat: 32.143251 },
      { lng: 114.050447, lat: 32.143537 },
      { lng: 114.04958, lat: 32.143629 },
      { lng: 114.049414, lat: 32.143514 },
      { lng: 114.04938, lat: 32.143004 },
      { lng: 114.047853, lat: 32.143088 },
      { lng: 114.047786, lat: 32.142787 },
      { lng: 114.049362, lat: 32.142653 },
      { lng: 114.04938, lat: 32.14208 },
    ],
    //
    area3: [
      { lng: 114.04909210559272, lat: 32.14088624467942 },
      { lng: 114.04860702061733, lat: 32.14104293628163 },
      { lng: 114.04750210484005, lat: 32.14117669719039 },
      { lng: 114.0475604946982, lat: 32.14180345995241 },
      { lng: 114.0478389694063, lat: 32.14180728166323 },
      { lng: 114.047849, lat: 32.142764 },
      { lng: 114.049304, lat: 32.142653 },
      { lng: 114.049331, lat: 32.142057 },
      { lng: 114.050296, lat: 32.14198 },
      { lng: 114.050215, lat: 32.141743 },
      { lng: 114.050013, lat: 32.141625 },
      { lng: 114.049879, lat: 32.141445 },
      { lng: 114.049488, lat: 32.141434 },
    ],
    //  海苑片区
    area4: [
      { lng: 114.050685, lat: 32.140973 },
      { lng: 114.050855, lat: 32.140858 },
      { lng: 114.050496, lat: 32.14027 },
      { lng: 114.050586, lat: 32.139559 },
      { lng: 114.050685, lat: 32.139295 },
      { lng: 114.05073, lat: 32.138691 },
      { lng: 114.050523, lat: 32.138569 },
      { lng: 114.050042, lat: 32.138539 },
      { lng: 114.049989, lat: 32.13928 },
      { lng: 114.049423, lat: 32.139184 },
      { lng: 114.049476, lat: 32.13837 },
      { lng: 114.049185, lat: 32.138347 },
      { lng: 114.049104, lat: 32.138374 },
      { lng: 114.048879, lat: 32.1386 },
      { lng: 114.048794, lat: 32.138756 },
      { lng: 114.048241, lat: 32.138963 },
      { lng: 114.048502, lat: 32.139418 },
      { lng: 114.048933, lat: 32.140067 },
      { lng: 114.049418, lat: 32.140602 },
      { lng: 114.05011, lat: 32.140327 },
    ],
    // 类型
    mtype: 1,
    active: 0, // 0为全校 1 2 3 4区
    list: [
      // 南门
      {
        name: "1舍",
        type: 1,
        id: 30,
        position: { lng: 114.04728, lat: 32.13626 },
      },
      {
        name: "2舍",
        type: 1,
        id: 31,
        position: { lng: 114.048632, lat: 32.137567 },
      },
      {
        name: "1号楼",
        type: 3,
        id: 1,
        position: { lng: 114.047902, lat: 32.141508 },
      },
      {
        name: "2号楼",
        type: 3,
        id: 2,
        position: { lng: 114.048096, lat: 32.141787 },
      },
      {
        name: "3号楼",
        type: 3,
        id: 3,
        position: { lng: 114.048208, lat: 32.142035 },
      },
      {
        name: "4号楼",
        type: 3,
        id: 4,
        position: { lng: 114.0489, lat: 32.141978 },
      },
      {
        name: "5号楼",
        type: 3,
        id: 5,
        position: { lng: 114.048904, lat: 32.142295 },
      },
      {
        name: "6号楼",
        type: 3,
        id: 6,
        position: { lng: 114.048181, lat: 32.142337 },
      },
      {
        name: "7号楼",
        type: 3,
        id: 7,
        position: { lng: 114.048936, lat: 32.14257 },
      },
      {
        name: "8号楼",
        type: 3,
        id: 8,
        position: { lng: 114.048203, lat: 32.14265 },
      },
      {
        name: "17号楼",
        type: 3,
        id: 17,
        position: { lng: 114.049668, lat: 32.141981 },
      },
      {
        name: "18号楼",
        type: 3,
        id: 18,
        position: { lng: 114.049726, lat: 32.141659 },
      },

      {
        name: "9号楼",
        type: 2,
        id: 9,
        position: { lng: 114.048985, lat: 32.142964 },
      },
      {
        name: "28号楼",
        type: 2,
        id: 28,
        position: { lng: 114.048199, lat: 32.142983 },
      },
      {
        name: "16号楼",
        type: 2,
        id: 16,
        position: { lng: 114.049782, lat: 32.142314 },
      },
      {
        name: "15号楼",
        type: 2,
        id: 15,
        position: { lng: 114.050564, lat: 32.142284 },
      },
      {
        name: "14号楼",
        type: 2,
        id: 14,
        position: { lng: 114.051053, lat: 32.142624 },
      },
      {
        name: "13号楼",
        type: 2,
        id: 13,
        position: { lng: 114.050748, lat: 32.142922 },
      },
      {
        name: "12号楼",
        type: 2,
        id: 12,
        position: { lng: 114.051525, lat: 32.142926 },
      },
      {
        name: "11号楼",
        type: 2,
        id: 11,
        position: { lng: 114.050717, lat: 32.14327 },
      },
      {
        name: "10号楼",
        type: 2,
        id: 10,
        position: { lng: 114.049881, lat: 32.143618 },
      },
      {
        name: "19号楼",
        type: 4,
        id: 19,
        position: { lng: 114.049635, lat: 32.140417 },
      },
      {
        name: "26号楼",
        type: 4,
        id: 26,
        position: { lng: 114.050547, lat: 32.140688 },
      },
      {
        name: "27号楼",
        type: 4,
        id: 27,
        position: { lng: 114.050403, lat: 32.140123 },
      },
      {
        name: "20号楼",
        type: 4,
        id: 20,
        position: { lng: 114.049114, lat: 32.140176 },
      },
      {
        name: "29号楼",
        type: 4,
        id: 29,
        position: { lng: 114.048966, lat: 32.139901 },
      },
      {
        name: "21号楼",
        type: 4,
        id: 21,
        position: { lng: 114.048804, lat: 32.139458 },
      },
      {
        name: "22号楼",
        type: 4,
        id: 22,
        position: { lng: 114.048593, lat: 32.139125 },
      },
      {
        name: "23号楼",
        type: 4,
        id: 23,
        position: { lng: 114.049608, lat: 32.139526 },
      },
      {
        name: "24号楼",
        type: 4,
        id: 24,
        position: { lng: 114.04919, lat: 32.139003 },
      },
      {
        name: "25号楼",
        type: 4,
        id: 25,
        position: { lng: 114.049217, lat: 32.138651 },
      },
    ],
    ct: [
      {
        name: "谭山餐厅",
        type: 1,
        position: { lng: 114.047726, lat: 32.136881 },
      },
      {
        name: "景明餐厅",
        type: 2,
        position: { lng: 114.049854, lat: 32.142884 },
      },
      {
        name: "浉源餐厅",
        type: 3,
        position: { lng: 114.048994, lat: 32.141423 },
      },
      {
        name: "海苑餐厅",
        type: 4,
        position: { lng: 114.050286, lat: 32.139412 },
      },
    ],
    mt1: {},
    mt2: {},
    mt3: {},
  }),
  mounted() {
    if (this._isMobile()) {
      this.ispc = false;
    }
  },
  methods: {
    handler({ BMap, map }) {
      let me = this;
      // // 点击事件获取经纬度
      // map.addEventListener('click', function (e) {
      //   console.log("{lng:" + e.point.lng + ", lat: " + e.point.lat + "},")
      // })
    },
    showall() {
      this.map.center = { lng: 114.048924, lat: 32.140866 };
      this.map.zoom = 17;
      this.mtype = 1;
      this.active = 0;
    },
    showA() {
      this.map.center = { lng: 114.047868, lat: 32.13678 };
      this.mtype = 2;
      this.active = 1;
      this.map.zoom = 20;
      this.$http.post("getarea/A").then(({ data }) => {
        this.mt2 = data.data;
      });
    },
    showB() {
      (this.map.center = { lng: 114.04956, lat: 32.142771 }), (this.mtype = 2);
      this.active = 2;
      this.map.zoom = 20;
      this.$http.post("getarea/B").then(({ data }) => {
        this.mt2 = data.data;
      });
    },
    showC() {
      this.map.center = { lng: 114.048035, lat: 32.14212 };
      this.mtype = 2;
      this.active = 3;
      this.map.zoom = 20;
      this.$http.post("getarea/C").then(({ data }) => {
        this.mt2 = data.data;
      });
    },
    showD() {
      this.map.center = this.D;
      this.mtype = 2;
      this.active = 4;
      this.map.zoom = 20;
      this.$http.post("getarea/D").then(({ data }) => {
        this.mt2 = data.data;
      });
    },
    get3(id, position) {
      this.mtype = 3;
      this.map.center = position;
      this.$http.post("getfloor/" + id).then(({ data }) => {
        this.mt3 = data.data;
      });
    },
    _isMobile() {
      return navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
    },
  },
};
</script>


