<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="档案id" prop="id">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="档案编号" prop="file_number">
        <el-input v-model="ruleForm.file_number"></el-input>
      </el-form-item>
      <el-form-item label="档案名称" prop="file_name">
        <el-input v-model="ruleForm.file_name"></el-input>
      </el-form-item>
      <el-form-item label="档案地址" prop="file_address">
        <el-input v-model="ruleForm.file_address"></el-input>
      </el-form-item>
      <el-form-item label="档案类别" prop="file_type_number">
        <el-input v-model="ruleForm.file_type_number"></el-input>
      </el-form-item>
      <el-form-item label="档案等级" prop="file_lever_number">
        <el-input v-model="ruleForm.file_lever_number"></el-input>
      </el-form-item>
      <el-form-item label="提交人员" prop="file_type_person">
        <el-input v-model="ruleForm.file_type_person"></el-input>
      </el-form-item>
      <!--      <el-form-item label="档案编号" prop="file_number">-->
      <!--        <el-select v-model="ruleForm.file_number" placeholder="请选择事件位置">-->
      <!--          <el-option label="位置一" value="shanghai"></el-option>-->
      <!--          <el-option label="位置二" value="beijing"></el-option>-->
      <!--        </el-select>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item label="事件时间" required>-->
      <!--        <el-col :span="11">-->
      <!--          <el-form-item prop="date1">-->
      <!--            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
      <!--          </el-form-item>-->
      <!--        </el-col>-->
      <!--        <el-col class="line" :span="2">-</el-col>-->
      <!--        <el-col :span="11">-->
      <!--          <el-form-item prop="date2">-->
      <!--            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>-->
      <!--          </el-form-item>-->
      <!--        </el-col>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item label="识别设备" prop="device">-->
      <!--        <el-input v-model="ruleForm.device"></el-input>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item label="事件类型" prop="event">-->
      <!--        <el-input v-model="ruleForm.event"></el-input>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item label="类别号" prop="type">-->
      <!--        <el-input v-model="ruleForm.type"></el-input>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item label="报警状态" prop="alarm">-->
      <!--      <el-input v-model="ruleForm.alarm"></el-input>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item label="其他" prop="desc">-->
      <!--        <el-input v-model="ruleForm.desc"></el-input>-->
      <!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交新档案</el-button>
        <el-button @click="resetForm('ruleForm')">恢复</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { update_file_list_by_id} from "@/api/emergencyPage/fileList";

export default {
  props: ['parentCenterDialogVisible','ruleForm', 'getFileList'],
  data() {
    return {
      isCloseDialog: this.parentCenterDialogVisible,
      rules: {
        id: [
          { required: true, message: '请输入档案id', trigger: 'blur' },
        ],
        file_number: [
          { required: true, message: '请输入档案编号', trigger: 'blur' },
          { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }

        ],
        file_name: [
          { required: true, message: '请输入档案名称', trigger: 'blur' },
          { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }

        ],
        file_address: [
          { required: true, message: '请输入档案地址', trigger: 'blur' },
          { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }

        ],
        file_type_number: [
          {  required: true, message: '请输入档案类别', trigger: 'blur' },
          { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }

        ],
        file_lever_number: [
          { required: true, message: '请输入档案等级', trigger: 'change' },
          { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }
        ],
        file_type_person: [
          {  required: true, message: '请输入提交人员', trigger: 'blur' },
          { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  watch: {
    ruleForm:{
      handler (newVal, oldVal) {
        //todo
      },
      deep: true
    }
  },
  created() {
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let fileList = {
            fileAddress: this.ruleForm.file_address,
            fileLeverNumber: this.ruleForm.file_lever_number,
            fileName:  this.ruleForm.file_name,
            fileNumber:this.ruleForm.file_number ,
            fileTypeNumber:  this.ruleForm.file_type_number,
            fileTypePerson: this.ruleForm.file_type_person,
            id:  this.ruleForm.id
          }
          //提交id修改
          update_file_list_by_id(fileList).then(res => {
            if(res.status === 200)
              alert("编辑成功！")
            //设置false关闭父组件的dialog
            this.$emit('update:parentCenterDialogVisible', false)
            //调用父组件刷新表格
            this.getFileList();
          })
        }
        else {
          alert("创建失败，请重新输入！")
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>