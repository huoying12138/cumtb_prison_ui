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
        prop="documentName"
        label="档案名称"
        width="300"
    >
    </el-table-column>
    <el-table-column
        prop="documentType"
        label="档案类别"
        width="300"
    >
    </el-table-column>
    <el-table-column
        prop="documentLevel"
        label="档案等级"
        width="400">
    </el-table-column>

    <el-table-column
        label="操作"
        width="500"
    >
      <template slot-scope="scope">
        <el-button
            style="font-size: 0.2rem"
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

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
  name: 'emergencyTable',
  methods: {
    //编辑事件
    handleEdit(index, row) {
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
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },{
        number: '001',
        documentName: '档案01',
        documentType: '火灾',
        documentLevel: '一级严重',
      },]
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