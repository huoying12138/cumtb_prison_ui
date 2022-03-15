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
    <div class="emergency-first-row">
      <div class="f-left">
        <h2>
          <i class="el-icon-folder-opened">应急处置档案管理</i>
        </h2>
      </div>
      <div class="f-right">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="formInline">
          <el-form-item label="档案类别" prop="type">
            <el-select v-model="formInline.type" placeholder="档案类别" :loading="loading" @blur="blurType" @focus="requestType" @change="setType">
              <el-option
                  v-for="item in fileType"
                  :key="item.fileTypeNumber"
                  :label="item.fileTypeNumber + item.fileTypeName"
                  :value="item.fileTypeNumber"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="档案等级" prop="lever">
            <el-select v-model="formInline.lever" placeholder="档案等级" :loading="loading" @blur="blurLevel" @focus="requestLevel" @change="setLevel">
              <el-option
                  v-for="item in fileLevel"
                  :key="item.fileLeverNumber"
                  :label="item.fileLeverNumber +item.fileLevelName"
                  :value="item.fileLeverNumber"
                  ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="queryTypeLevel">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onResetForm('formInline')">重置</el-button>
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
          title="请输入档案信息"
          :visible.sync="centerDialogVisible"
          width="40%"
          :modal='false'
          center
      >
        <create-document :parentCenterDialogVisible.sync="centerDialogVisible"/>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import emergencyTable from '@/components/emergencyTable'
import createDocument from '@/components/createDocument'
import {useIndex} from "@/utils/useDraw";
import {get_file_level, get_file_type} from "@/api/emergencyPage/fileTypeLevel";
import {globalBus} from "@/main";


export default {
  name: "index",
  props: {},
  components: {emergencyTable,createDocument,},
  mounted() {
    //适配屏幕
    const {calcRate, windowDraw } = useIndex(this.$refs.cont)
    // todo 屏幕适应
    windowDraw()
    calcRate()
  },
  computed:{
    //设置初始页面放缩比例
    scaleFun:function () {
      return `transform:translate(-50%, -50%) scale(1.2)`
    }
  },
  data() {
    return {
      loading: false,
      //两个档案类别，档案等级初始一条数据
      fileType: [
        {
          fileTypeNumber: '01',
          fileTypeName: '火灾'
        }
      ],
      fileLevel: [
        {
          fileLeverNumber: '01',
          fileLevelName: '一级',
        }
      ],
      centerDialogVisible: false,
      formInline: {
        type: '',
        lever: ''
      }
    }
  },
  methods: {
    //重置两个下拉框，并触发emergencyTable重新请求所有档案数据，刷新页面
    onResetForm(formInline){
      this.$refs[formInline].resetFields();
      globalBus.$emit('getFileList');
    },
    //点击查询，进行type和level档案联合查询，并触发emergencyTable刷新列表结果
    queryTypeLevel(){
      //同时开始请求fileList数据，触发emergencyTable刷新查询结果
      globalBus.$emit('queryTypeLevel', this.formInline)
    },
    //下拉框选中值设置表单中的formInline.type
    blurType(){
      // console.log('blur' + this.formInline.type)
    },
    blurLevel(){
      // console.log('blur' + this.formInline.type)
    },
    //下拉框值选中发生改变
    setType(val){
      this.formInline.type = val;
      //同时开始请求fileList数据，触发emergencyTable刷新查询结果
      globalBus.$emit('getFileType', this.formInline.type)
    },
    //下拉框一旦聚焦，开始请求后端
    requestLevel(){
      this.loading=true;
      get_file_level().then(res =>{
        if(res.status === 200){
          this.fileLevel = res.data.page.list.map(item =>{
            return {
              fileLeverNumber: item.fileLeverNumber,
              fileLevelName: item.fileLevelName
            }
          })
          this.loading=false;
        }
      }).catch(err => {
        //todo
      })
    },

    setLevel(val){
      this.formInline.lever = val;
      //同时开始请求fileList数据，触发emergencyTable刷新查询结果
      globalBus.$emit('getFileLevel', this.formInline.lever)
    },
    //下拉框一旦聚焦，开始请求后端
    requestType(){
      this.loading=true;
      get_file_type().then(res =>{
        if(res.status === 200){
          this.fileType = res.data.page.list.map(item =>{
            return {
              fileTypeNumber: item.fileTypeNumber,
              fileTypeName: item.fileTypeName
            }
          })
          this.loading=false;
        }
      }).catch(err => {
        //todo
      })
    },
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