<template>
  <div class="alarm">
    <div class="first-row">
      <div class="first-left"><span style="font-size: 0.2rem; color: white;">报警分析</span></div>
      <div class="first-right"><el-button type="text" icon="el-icon-arrow-right" style="font-size: 0.2rem;"
                                          @click="goto()"
      >更多事件</el-button></div>
    </div>
    <div class="second-row">
      <el-form :inline="true" :model="form" >
        <el-form-item>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date"></el-date-picker>
        </el-form-item>
        <el-form-item>s
<!--          <el-select v-model="form.position" placeholder="类型">-->
<!--            <el-option label="类型1" value="1"></el-option>-->
<!--            <el-option label="类型2" value="2"></el-option>-->
<!--          </el-select>-->
          <el-select v-model="form.num" placeholder="民警编号" @change="setNumber">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
            <el-option label="6" value="6"></el-option>
            <el-option label="7" value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.state" placeholder="状态" @change="setState">
            <el-option label="已处置" value="1"></el-option>
            <el-option label="未处置" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>

    <div class="third-row">
      <ul class="ul1">
        <li
            class="item"
            v-for="(item, index) in eventList"
            :key="index"
            @click="centerDialogVisible=true"

        >
          <ul class="ul2" @click="addOrUpdateHandle(item.id)">
<!--            <li>序号：{{ item.number }}</li>-->
<!--            <li>事件编号：{{ item.event }}</li>-->
<!--            <li>发生位置：{{ item.position }}</li>-->
<!--            <li>识别时间：{{ item.recTime }}</li>-->
<!--            <li>预警时间：{{ item.warningTime }}</li>-->
<!--            <li>处理状态：{{ item.handleState }}</li>-->
<!--            <li>处理记录：{{ item.handleHistory }}</li>-->
<!--            <hr>-->
            <li>识别编号：{{ item.identifyNumber }}</li>
            <li>识别时间：{{ item.identifyTime }}</li>
            <li>事件类别：{{ item.typeNumber }}</li>
            <li>事件编号：{{ item.eventNumber }}</li>
            <li>事件状态：{{ item.eventState }}</li>
            <li>处置事件：{{ item.handleTime }}</li>
            <li>报警编号：{{ item.warnNumber }}</li>
            <li>评估记录：{{ item.evalNumber }}</li>
            <hr>
          </ul>

        </li>
      </ul>
    </div>
    <div class="third-table">
        <event-table-dialog  v-if='centerDialogVisible' ref="addOrUpdate" @refreshDataList="getEventList"/>
    </div>
  </div>
</template>

<script>

import createDocument from '@/components/createDocument'
import eventTableDialog from "@/components/eventTableDialog";
import {globalBus} from "@/main";

export default {
  name: "alarm",
  props: {},
  components: {createDocument,eventTableDialog},
  created() {
    this.getEventList()
  },
  data() {
    return {
        centerDialogVisible: false,
        form: {
          date: '',
          num: '',
          state: '',
        },
        dataListLoading: false,
        eventList: [],
        pageSize: 100,
        pageIndex: 1,
        tableData: [{
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2017-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        },  {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }, {
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        },{
          number: '007',
          event: '火灾',
          position: '休息1区',
          recTime: '2016-05-03-10:11',
          warningTime: '2016-05-03-11:11',
          handleState: '已处理',
          handleHistory: '--'
        }]
    }
  },
  methods: {
    //下拉框值选中发生改变to eventTable1
    setNumber(val){
      this.form.num = val;
      //同时开始请求fileList数据，触发emergencyTable刷新查询结果
      this.getEventList()
    },
    setState(val){
      this.form.state = val;
      //同时开始请求fileList数据，触发emergencyTable刷新查询结果
      this.getEventList()
    },
    // 新增 / 修改
    addOrUpdateHandle (id) {
      this.centerDialogVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id)
      })
    },
    // 获取数据列表
    getEventList () {
      this.dataListLoading = true
      this.$http({
        url: this.$http.adornUrl('/identify2handlerecord/list'),
        method: 'get',
        params: {
          'page': this.pageIndex,
          'limit': this.pageSize,
          'type': this.form.num,
          'state': this.form.state
        }
      }).then(({data}) => {
        if (data && data.code === 0) {
          this.eventList = data.page.list
        } else {
          this.dataList = []
        }
        this.dataListLoading = false
      })
    },
    //跳转至事件记录管理页面
    goto(){
      this.$router.push({
        path: '/event',
      })
    },
  },
}
</script>

<style lang="scss">
.alarm {
  display: flex;
  flex-direction: column;
  /*background-image: url("../../assets/alarm.png");*/
  /*background-size: auto;*/
  /*width: 7.09rem;*/
  /*height: 5.20rem;*/
  .first-left {
    margin-left: 40%;
    float: left;
  }
  .first-right {
    float: right;
    margin-right: 5%;
  }
  .second-row {
    width: 95%;
    margin: 0% 2.5% 0 2.5%;
    height: 0.5rem;
    .el-input {
      width: 1.5rem;
    }
  }

  .third-row{
    margin:0 7%;
    overflow-y: scroll;
    height: 4rem;
    ul,li {
      cursor: pointer;
      position: relative;
      list-style: none;
      padding: 0px;
      margin: 0px;
      font-size: 0.2rem;
      color: white;
      text-align: left;
    }

  }

}

</style>
