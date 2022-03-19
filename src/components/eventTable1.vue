<template>
  <div class="mod-config">
<!--    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">-->
<!--      <el-form-item>-->
<!--        <el-input v-model="dataForm.key" placeholder="参数名" clearable></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button @click="getDataList()">查询</el-button>-->
<!--        <el-button type="primary" @click="addOrUpdateHandle()">新增</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
    <el-table
      :data="dataList"
      v-loading="dataListLoading"
      @selection-change="selectionChangeHandle"
      style="font-size: 0.3rem;width: 100%;"
      :header-cell-style="{
        'background-color': 'rgb(160,193,243)',
        'color': 'black',
      }"
      stripe
      max-height="800"
    >
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column
        prop="id"
        header-align="center"
        align="center"
        width="100"
        label="主键">
      </el-table-column>
      <el-table-column
        prop="identifyNumber"
        header-align="center"
        align="center"
        label="识别编号">
      </el-table-column>
      <el-table-column
        prop="identifyTime"
        header-align="center"
        align="center"
        label="识别时间"
        :formatter="identifyTimeFormat"
      >
      </el-table-column>
      <el-table-column
        prop="typeNumber"
        header-align="center"
        align="center"
        label="事件类别">
      </el-table-column>
      <el-table-column
        prop="eventNumber"
        header-align="center"
        align="center"
        label="事件编号">
      </el-table-column>
      <el-table-column
        prop="eventState"
        header-align="center"
        align="center"
        label="事件状态">
      </el-table-column>
      <el-table-column
        prop="handleTime"
        header-align="center"
        align="center"
        label="处置时间"
        :formatter="handleTimeFormat"
      >
      </el-table-column>
      <el-table-column
        prop="warnNumber"
        header-align="center"
        align="center"
        label="报警编号">
      </el-table-column>
      <el-table-column
        prop="evalNumber"
        header-align="center"
        align="center"
        label="评估编号">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="otherInfo"-->
<!--        header-align="center"-->
<!--        align="center"-->
<!--        label="图片路径">-->
<!--      </el-table-column>-->
      <el-table-column
        width="250"
        align="center"
        label="操作">
        <template slot-scope="scope">
          <el-button
              style="font-size: 0.2rem"
              type="primary"
              icon="el-icon-edit"
              @click="addOrUpdateHandle(scope.row.id)">编辑</el-button>

          <el-button
              style="font-size: 0.2rem"
              @click.native.prevent="deleteHandle(scope.row.id)"
              type="danger"
              icon="el-icon-delete"
          >
            删除
          </el-button>
<!--          <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.id)">修改</el-button>-->
<!--          <el-button type="text" size="small" @click="deleteHandle(scope.row.id)">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <eventTableDialog v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></eventTableDialog>
  </div>
</template>

<script>
  import eventTableDialog from './eventTableDialog'
  import moment from "moment";
  import {globalBus} from "@/main";
  import $store from "@/store/modules/eventPageTable";
  export default {
    name:'eventTable1',
    components: {eventTableDialog},
    created() {
      this.getDataList()
      globalBus.$on('getEventList', ()=> {
        this.getDataList();
      })
      globalBus.$on('deleteHandle', ()=>{
        this.deleteHandle()
      })
      globalBus.$on('newEvent', ()=>{
        this.addOrUpdateHandle(1)
      })
      globalBus.$on('setNumber', (id )=>{
        this.dataForm.id = id;
        this.getDataList()
      })

    },
    data () {
      return {
        dataForm: {
          time: '',
          id: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        // dataListSelections:[],
        dataListLoading: false,
        addOrUpdateVisible: false
      }
    },
    activated () {
      this.getDataList()
    },
    computed:{
      // dataListSelections: state => state.dataListSelections,
    },
    methods: {
      //格式化时间
      identifyTimeFormat(row,){
        return moment(row.identifyTime).format('YYYY/MM/DD HH:mm');
      },
      //格式化时间
      handleTimeFormat(row,){
        return moment(row.handleTime).format('YYYY/MM/DD HH:mm');
      },
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/identify2handlerecord/list'),
          method: 'get',
          params: {
            'page': this.pageIndex,
            'limit': this.pageSize,
            'type': this.dataForm.id
          }
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 多选
      selectionChangeHandle (val) {
        // this.dataListSelections = val
        this.$store.commit({
          type: 'setDataListSelections',
          val: val
        });
        //触发eventPage的批量删除事件len
        globalBus.$emit('len', $store.state.dataListSelections.length !== undefined && $store.state.dataListSelections.length <= 0 )

      },
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
      },
      // 删除
      deleteHandle (id) {
        console.log($store.state.dataListSelections);
        var ids = id ? [id] : $store.state.dataListSelections.map(item => {
          return item.id
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
            url: this.$http.adornUrl('/identify2handlerecord/delete'),
            method: 'post',
            data: this.$http.adornData(ids, false)
          }).then(({data}) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                }
              })
            } else {
              this.$message.error(data.msg)
            }
          })
        })
      }
    }
  }
</script>
<style lang="scss">
//.mod-config{
//  .el-form-item__label,.el-select-dropdown__item,.el-input__inner,.el-button {
//    font-size: 0.3rem;
//    height: 0.5rem;
//  }
//  .el-form-item__label {
//    color: white;
//  }
//}


</style>
