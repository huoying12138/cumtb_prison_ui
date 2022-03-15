<template>
  <div class="e-container">
    <div class="tableContent">
      <el-table
          :data="fileList"
          style="font-size: 0.3rem;width: 100%;"
          :header-cell-style="{
        'background-color': 'rgb(160,193,243)',
        'color': 'black',
      }"
          stripe
          max-height="800"
      >
        <el-table-column
            prop="id"
            label="id"
            witdh="250"
        >
        </el-table-column>
        <el-table-column
            prop="fileNumber"
            label="档案编号"
            witdh="350"
        >
        </el-table-column>
        <el-table-column
            prop="fileName"
            label="档案名称"
            width="300"
        >
        </el-table-column>
        <el-table-column
            prop="fileTypeNumber"
            label="档案类别"
            width="200"
        >
        </el-table-column>
        <el-table-column
            prop="fileLeverNumber"
            label="档案等级"
            width="200">
        </el-table-column>
        <el-table-column
            prop="fileTypePerson"
            label="提交人员"
            width="200">
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
                @click="centerDialogVisible=true;sendCurrentId(scope.$index, scope.row);"
            >编辑</el-button>
            <!--        @click="handleEdit(scope.$index, scope.row)"-->

            <el-button
                style="font-size: 0.2rem"
                @click.native.prevent="deleteRow(scope.$index, fileList)"
                type="danger"
                icon="el-icon-delete"
            >
              删除
            </el-button>

          </template>
        </el-table-column>

      </el-table>

    </div>
    <div class="dialogContent">
      <el-dialog
          title="请编辑档案信息"
          :visible.sync="centerDialogVisible"
          width="40%"
          :modal='false'
          center
      >
        <editDocument :ruleForm.sync="ruleData" :parentCenterDialogVisible.sync="centerDialogVisible" :getFileList.sync="getFileList" />
      </el-dialog>
    </div>
  </div>
</template>

<script>

import {
  delete_file_list,
  get_file_list,
  get_file_list_by_id,
  get_file_list_by_type_lever
} from "@/api/emergencyPage/fileList";
import editDocument from "@/components/editDocument";
import {globalBus} from "@/main";

export default {
  name: 'emergencyTable',
  components: {
    editDocument,
  },
  data() {
    return {
      centerDialogVisible: false,
      ruleData: {
        id: 1,
        file_number: '020151111',
        file_name: '群体斗殴档案5',
        file_address: '/file/02',
        file_type_number: '02',
        file_lever_number: '01',
        file_type_person: 'admin01',
      },
      fileList:[{
        id: 1,
        fileNumber: '001',
        fileName: '档案01',
        fileTypeNumber: '火灾',
        fileLeverNumber: '一级严重',
        fileTypePerson: 'admin'
      }],
    }
  },
  created() {
    this.getFileList();

    //利用globalBus监听createDocument的getFileList方法
    globalBus.$on('getFileList', ()=>{
      this.getFileList();
    })

    //监听emergencyPage的档案类别的单个type查询，更新页面结果
    globalBus.$on('getFileType', (fileType)=>{
      get_file_list_by_type_lever({type: fileType}).then(res => {
        const list = res.data.page.list;
        this.fileList = list;
      }).catch(err =>{
        //todo
      })
    })


    //监听emergencyPage的档案类别的单个type查询，更新页面结果
    globalBus.$on('getFileLevel', (fileLevel)=>{
      get_file_list_by_type_lever({lever: fileLevel}).then(res => {
        const list = res.data.page.list;
        this.fileList = list;
      }).catch(err =>{
        //todo
      })
    })

    //监听emergencyPage的档案类别的type和Level的联合查询，更新页面结果
    globalBus.$on('queryTypeLevel', (fileTypeLevel) => {
      get_file_list_by_type_lever({type: fileTypeLevel.type, lever: fileTypeLevel.lever}).then(res => {
        const list = res.data.page.list;
        this.fileList = list;
      }).catch(err =>{
        //todo
      })
    })
  },

  methods: {
    getFileList(){
      //请求fileList数据
      get_file_list().then(res => {
        const list = res.data.page.list;
        this.fileList = list;
      }).catch(err =>{
        //todo
      })
    },
    //编辑事件
    sendCurrentId(index, row){
      get_file_list_by_id(this.fileList[index].id).then(res => {
        if(res.status === 200){
          //请求id文件
          let fileList = res.data.fileList;
          this.ruleData ={
            id: fileList.id,
            file_number: fileList.fileNumber,
            file_name: fileList.fileName,
            file_address: fileList.fileAddress,
            file_type_number: fileList.fileTypeNumber,
            file_lever_number: fileList.fileLeverNumber,
            file_type_person: fileList.fileTypePerson,
          };
        }
      }).catch(err =>{
        //todo
      })
    },
    //删除事件记录
    deleteRow(index, rows) {
      let msg = "您真的确定要删除吗？\n\n请确认！";
      if (confirm(msg)==true){
        delete_file_list(this.fileList[index].id).then(res => {
          if(res.status === 200){
            alert("删除成功");
            return  rows.splice(index, 1);
          }
        })
      }else{
        alert("删除失败");
        return false;
      }

    }
  },
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