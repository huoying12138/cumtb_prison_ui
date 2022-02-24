<template>
  <div class="content">
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
    <div class="emergency-first-row">
      <div class="f-left">
        <h2>
          <i class="el-icon-folder-opened">应急处置档案管理</i>
        </h2>
      </div>
      <div class="f-right">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="档案类别">
            <el-select v-model="formInline.type" placeholder="档案类别">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="档案等级">
            <el-select v-model="formInline.level" placeholder="档案等级">
              <el-option label="001" value="001"></el-option>
              <el-option label="002" value="002"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onReset">重置</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="centerDialogVisible = true">新建档案</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="second-row">
      <emergencyTable/>
    </div>
    <div class="third-row">
      <el-dialog
          title="输入档案信息："
          :visible.sync="centerDialogVisible"
          width="40%"
          center>
        <create-document/>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import emergencyTable from '@/components/emergencyTable'
import createDocument from '@/components/createDocument'


export default {
  name: "index",
  props: {},
  components: {emergencyTable,createDocument},
  data() {
    return {
      centerDialogVisible: false,
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
    onCreate() {
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
.header{
  height: 1rem;
  line-height: 1rem;
}
.emergency-first-row {
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
<style lang="scss" >
.emergency-first-row {
  .el-form-item__label,.el-select-dropdown__item,.el-input__inner,.el-button {
    font-size: 0.3rem;
    height: 0.5rem;
  }
  .el-input__inner{
    width: 3rem;
  }
  .el-form-item__label {
    color: white;
  }

}


</style>