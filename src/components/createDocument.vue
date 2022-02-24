<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="事件名字" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="事件位置" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择事件位置">
          <el-option label="位置一" value="shanghai"></el-option>
          <el-option label="位置二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="事件时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="识别设备" prop="device">
        <el-input v-model="ruleForm.device"></el-input>
      </el-form-item>
      <el-form-item label="事件类型" prop="event">
        <el-input v-model="ruleForm.event"></el-input>
      </el-form-item>
      <el-form-item label="类别号" prop="type">
        <el-input v-model="ruleForm.type"></el-input>
      </el-form-item>
      <el-form-item label="报警状态" prop="alarm">
      <el-input v-model="ruleForm.alarm"></el-input>
      </el-form-item>
      <el-form-item label="其他" prop="desc">
        <el-input v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">创建档案</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        device: '',
        event: [],
        type: '',
        alarm: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入事件名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择发生位置', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        device: [
          { type: 'array', required: true, message: '请至少选择一个识别设备', trigger: 'change' }
        ],
        alarm: [
          { type: 'array', required: true, message: '请选择一个报警类别', trigger: 'change' }
        ],
        event: [
          { required: true, message: '请选择事件类别', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写描述', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
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