<template>
  <el-table
      :data="tableData"
      style="font-size: 0.3rem;width: 100%;"
      :header-cell-style="{
        'background-color': 'rgb(160,193,243)',
        'color': 'black',
      }"
      stripe
      max-height="800"
  >
    <el-table-column
        prop="number"
        label="序号"
        witdh="150"
      >
    </el-table-column>
    <el-table-column
        prop="event"
        label="事件名称"
        width="150"
       >
    </el-table-column>
    <el-table-column
        prop="position"
        label="位置"
        width="200"
       >
    </el-table-column>
    <el-table-column
        prop="recTime"
        label="识别时间"
        width="300">
    </el-table-column>
    <el-table-column
        prop="warningTime"
        label="预警时间"
        width="300"
        >
    </el-table-column>
    <el-table-column
        prop="handleState"
        label="处置状态"
        width="150"
    >
    </el-table-column>
    <el-table-column
        prop="handleHistory"
        label="处置记录"
    >
    </el-table-column>
    <el-table-column
        label="操作"
        width="400"
        >
      <template slot-scope="scope">
        <el-button
            style="font-size: 0.2rem"
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
            style="font-size: 0.2rem"
            type="warning"
            icon="el-icon-warning"
            @click="handleWarning(scope.$index, scope.row)">解除</el-button>
        <el-button
            style="font-size: 0.2rem"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="danger"
            icon="el-icon-delete"
            >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  name: 'eventTable',
  methods: {
    //编辑事件
    handleEdit(index, row) {
      confirm(index + " " + row);
    },
    //解除警告
    handleWarning(index, row) {
      confirm(index + " " + row);
    },
    //删除事件记录
    deleteRow(index, rows) {
      let msg = "您真的确定要删除吗？\n\n请确认！";
      if (confirm(msg)==true){
        return  rows.splice(index, 1);
      }else{
        return false;
      }

    }
  },
  data() {
    return {
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
  }
}


</script>

<style scoped>


/*.el-table tr:hover {*/
/*  background: #a4a1a1;*/
/*}*/

/*.el-table tr {*/
/*  background-color: #eaf2ff;*/
/*}*/
/*.el-table td,*/
/*.el-table th.is-leaf {*/
/*  border-bottom: 1px solid red;*/
/*}*/

/*.el-table--border th,*/
/*.el-table--border th.gutter:last-of-type {*/
/*  border-bottom: 1px solid red;*/
/*}*/


/*.el-table--border td,*/
/*.el-table--border th {*/
/*  border-right: 1px solid red;*/
/*}*/

</style>

<style lang="scss">

.el-table  .cell {
  line-height: 0.3rem;
}
.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
  border-bottom: 3px solid rgb(123,169,240);
}
</style>