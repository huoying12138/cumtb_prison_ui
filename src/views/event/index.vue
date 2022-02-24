<template>
  <div class="content">
    <div class="first-row">
      <div class="f-left">
        <h2>
        <i class="el-icon-folder-opened">事件识别记录管理</i>
        </h2>
      </div>
      <div class="f-right">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="时间">
            <el-select v-model="formInline.time" placeholder="时间">
              <el-option label="2016-05-03" value="2016-05-03"></el-option>
              <el-option label="2016-05-03" value="2016-05-03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="民警编号">
            <el-select v-model="formInline.id" placeholder="民警编号">
              <el-option label="007" value="007"></el-option>
              <el-option label="007" value="007"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onReset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="second-row">
      <event-table/>
    </div>
  </div>
</template>

<script>
import eventTable from '@/components/eventTable'
// import 'element-ui/lib/theme-chalk/index.css';
// import '../../assets/global.css'

export default {
  name: "index",
  props: {},
  components: {eventTable,},
  data() {
    return {
      formInline: {
        time: '',
        id: ''
      }
    }
  },
  methods: {
    onSubmit() {
      let msg = "请确认！";
      if (confirm(msg)==true){
        return  true;
      }else{
        return false;
      }
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
}
.first-row {
  width: 95%;
  margin: 5% 2.5% 0 2.5%;
}
.f-left {
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
.first-row{
  .el-form-item__label,.el-select-dropdown__item,.el-input__inner,.el-button {
    font-size: 0.3rem;
    height: 0.5rem;
  }
  .el-form-item__label {
    color: white;
  }
}


</style>