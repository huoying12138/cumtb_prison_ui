<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible"
    :modal='false'

  >
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="识别编号" prop="identifyNumber">
      <el-input v-model="dataForm.identifyNumber" placeholder="识别编号"></el-input>
    </el-form-item>
    <el-form-item label="识别时间" prop="identifyTime">
      <el-input v-model="dataForm.identifyTime" placeholder="识别时间"></el-input>
    </el-form-item>
    <el-form-item label="事件类别" prop="typeNumber">
      <el-input v-model="dataForm.typeNumber" placeholder="事件类别编号"></el-input>
    </el-form-item>
    <el-form-item label="事件编号" prop="eventNumber">
      <el-input v-model="dataForm.eventNumber" placeholder="事件编号"></el-input>
    </el-form-item>
    <el-form-item label="事件状态" prop="eventState">
      <el-input v-model="dataForm.eventState" placeholder="事件状态1处置完成0未完成"></el-input>
    </el-form-item>
    <el-form-item label="处置时间" prop="handleTime">
      <el-input v-model="dataForm.handleTime" placeholder="事件处置时间（开始时间）"></el-input>
    </el-form-item>
    <el-form-item label="报警编号" prop="warnNumber">
      <el-input v-model="dataForm.warnNumber" placeholder="报警通知的编号"></el-input>
    </el-form-item>
    <el-form-item label="评估编号" prop="evalNumber">
      <el-input v-model="dataForm.evalNumber" placeholder="评估记录的编号"></el-input>
    </el-form-item>
    <el-form-item label="图片路径" prop="otherInfo">
      <el-input v-model="dataForm.otherInfo" placeholder="图片存储路径"></el-input>
    </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          id: 0,
          identifyNumber: '',
          identifyTime: '',
          typeNumber: '',
          eventNumber: '',
          eventState: '',
          handleTime: '',
          warnNumber: '',
          evalNumber: '',
          otherInfo: ''
        },
        dataRule: {
          identifyNumber: [
            { required: true, message: '识别编号不能为空', trigger: 'blur' }
          ],
          identifyTime: [
            { required: true, message: '识别时间不能为空', trigger: 'blur' }
          ],
          typeNumber: [
            { required: true, message: '事件类别编号不能为空', trigger: 'blur' }
          ],
          eventNumber: [
            { required: true, message: '事件编号不能为空', trigger: 'blur' }
          ],
          eventState: [
            { required: true, message: '事件状态1处置完成0未完成不能为空', trigger: 'blur' }
          ],
          handleTime: [
            { required: true, message: '事件处置时间（开始时间）不能为空', trigger: 'blur' }
          ],
          warnNumber: [
            { required: true, message: '报警通知的编号不能为空', trigger: 'blur' }
          ],
          evalNumber: [
            { required: true, message: '评估记录的编号不能为空', trigger: 'blur' }
          ],
          otherInfo: [
            { required: true, message: '图片存储路径不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.id) {
            this.$http({
              url: this.$http.adornUrl(`/identify2handlerecord/info/${this.dataForm.id}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.identifyNumber = data.identify2handleRecord.identifyNumber
                this.dataForm.identifyTime = data.identify2handleRecord.identifyTime
                this.dataForm.typeNumber = data.identify2handleRecord.typeNumber
                this.dataForm.eventNumber = data.identify2handleRecord.eventNumber
                this.dataForm.eventState = data.identify2handleRecord.eventState
                this.dataForm.handleTime = data.identify2handleRecord.handleTime
                this.dataForm.warnNumber = data.identify2handleRecord.warnNumber
                this.dataForm.evalNumber = data.identify2handleRecord.evalNumber
                this.dataForm.otherInfo = data.identify2handleRecord.otherInfo
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/identify2handlerecord/${!this.dataForm.id ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'id': this.dataForm.id || undefined,
                'identifyNumber': this.dataForm.identifyNumber,
                'identifyTime': this.dataForm.identifyTime,
                'typeNumber': this.dataForm.typeNumber,
                'eventNumber': this.dataForm.eventNumber,
                'eventState': this.dataForm.eventState,
                'handleTime': this.dataForm.handleTime,
                'warnNumber': this.dataForm.warnNumber,
                'evalNumber': this.dataForm.evalNumber,
                'otherInfo': this.dataForm.otherInfo
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
