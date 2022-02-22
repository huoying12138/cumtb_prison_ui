<template>
  <el-table
      :data="tableData"
      style="font-size: 0.3rem; width: 100%;"
      :row-style="{height:'0.6rem'}"
      :header-cell-style="{
        'background-color': '#1989fa',
        'color': '#fff'
        }"
      border
      fit
  >
    <el-table-column
        prop="date"
        label="日期"
        width="300">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="120">
    </el-table-column>
    <el-table-column
        prop="province"
        label="省份"
        width="120">
    </el-table-column>
    <el-table-column
        prop="city"
        label="市区"
        width="120">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址"
        width="600">
    </el-table-column>
    <el-table-column
        prop="zip"
        label="邮编"
        width="120">
    </el-table-column>
    <el-table-column
        label="操作"
        >
      <template slot-scope="scope">
        <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="primary"
            icon="el-icon-delete"
            plain
            style="font-size: 0.3rem">
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
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  }
}


</script>

<style>
.el-table tr:hover {
  background: #a4a1a1;
}

.el-table tr {
  background-color: #eaf2ff;
}

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