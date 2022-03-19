<template>
  <div class="content" ref="cont">
    <div class="header">
      <div class="nav" style="float: right;">
        <el-button-group>
          <el-button @click="$router.push({path: '/main'})" icon="el-icon-s-home" style="font-size: 0.3rem;">首页</el-button>
          <el-button @click="$router.push({path: '/emergency'})" icon="el-icon-folder-opened" style="font-size: 0.3rem;">应急档案管理</el-button>
          <el-button @click="$router.push({path: '/event'})" icon="el-icon-document" style="font-size: 0.3rem;">事件记录管理</el-button>
        </el-button-group>
      </div>
      <div class="user">

      </div>
    </div>
    <div class="event-first-row">
      <div class="f-left">
        <h2>
        <i class="el-icon-document">事件识别记录管理</i>
        </h2>
      </div>
      <div class="f-right">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="时间">
            <el-select v-model="formInline.time" placeholder="时间" @change="setTime">
              <el-option label="2016-05-03" value="2016-05-03"></el-option>
              <el-option label="2016-05-03" value="2016-05-03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="formInline.id" placeholder="民警编号" @change="setNumber">
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
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item>
<!--            <el-button type="primary" @click="onReset">重置</el-button>-->
            <el-button  type="danger" @click="deleteHandle()" :disabled="len">批量删除</el-button>
            <el-button type="primary" @click="newEvent">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="second-row">
      <event-table1/>
    </div>
  </div>
</template>

<script>
import eventTable from '@/components/eventTable'
import {useIndex} from "@/utils/useDraw";
import eventTable1 from "@/components/eventTable1";
import {globalBus} from "@/main";
// import 'element-ui/lib/theme-chalk/index.css';
// import '../../assets/global.css'

export default {
  name: "index",
  props: {},
  components: {eventTable,eventTable1},
  mounted() {
    //适配屏幕
    const {calcRate, windowDraw } = useIndex(this.$refs.cont)
    // todo 屏幕适应
    windowDraw()
    calcRate()
  },
  data() {
    return {
      len: true,
      formInline: {
        time: '',
        id: ''
      }
    }
  },
  created() {
    //监听eventTable1的全选事件
    globalBus.$on('len', (len)=>{
      this.len = len
    })
  },
  computed:{
    //设置初始页面放缩比例
    scaleFun:function () {
      return `transform:translate(-50%, -50%) scale(1.2)`
    }
  },
  methods: {
    //下拉框值选中发生改变to eventTable1
    setNumber(val){
      this.formInline.id = val;
      //同时开始请求fileList数据，触发emergencyTable刷新查询结果
      globalBus.$emit('setNumber', this.formInline.id)
    },
    setTime(){
      //todo
    },
    onSubmit() {
      //触发eventTable1的查询列表时间
      globalBus.$emit('getEventList', )
    },
    newEvent() {
      //触发eventTable1的查询列表时间
      globalBus.$emit('newEvent', )
    },
    deleteHandle(){
      globalBus.$emit('deleteHandle')
    },
    onReset() {
      let msg = "请确认！";
      if (confirm(msg)==true){
        return  true;
      }else{
        return false;
      }
    },

  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 10.8rem;
  width: 19.2rem;
  /*height: 1080px;*/
  /*width: 1920px;*/
  background-image: url("../../assets/background.png");
  background-size: cover;
  font-size: 0.3rem;
  position: absolute;
  /*top: 50%;*/
  /*left: 50%;*/
  /*transform-origin: center center;*/

  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
}
.header{
  height: 1rem;
  line-height: 1rem;
}
.event-first-row {
  width: 95%;
  margin: 0 2.5%;
}
.f-left {
  margin-top: 2%;
  float: left;
  color: white;
}
.f-right {
  margin-top: 2.5%;
  float: right;
}
.second-row {
  width: 95%;
  background-color: white;
  margin: 0 auto;
  text-align: center;
}
</style>
<style lang="scss">
.event-first-row{
  .el-form-item__label,.el-select-dropdown__item,.el-input__inner,.el-button {
    font-size: 0.3rem;
    height: 0.5rem;
  }

  .el-form-item__label {
    color: white;
  }
}


</style>
