<template>
  <div>
    <el-table v-loading="loading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="Code" >
        <template slot-scope="scope">
          <span>{{ scope.row.MedId }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Name" >
        <template slot-scope="scope">
          <span>{{ scope.row.MedName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Pharma" >
        <template slot-scope="scope">
          <span>{{ scope.row.pharma}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Price/Dhr" >
        <template slot-scope="scope">
          <span>{{ scope.row.MedPrice}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Description" >
        <template slot-scope="scope">
          <span>{{ scope.row.MedDescription}}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button>
        </template>
      </el-table-column>

    </el-table>

    <div class="pagination-container">
      <el-pagination
        :current-page="listQuery.page"
        :page-sizes="[10,20,30, 50]"
        :page-size="listQuery.limit"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
     <el-dialog title="Update Medicine Details" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm"  :model="formData" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-row class="createPost-main-container">
	        <el-col :span="24"> 
	          <div v-if="dialogFormVisible" >
	            <el-form-item label="Drug Name">
                <el-input v-model="formData.MedName" placeholder="Please enter a keyword">
                </el-input>
              </el-form-item>
              <el-form-item label="Drug Code">
                <el-input v-model="formData.MedId" placeholder="Example iqv_drg_001"/>
              </el-form-item>
              <el-form-item label="Pharma Name">
                <el-input v-model="formData.pharma" placeholder="Example resource:org.example.iqvia.Pharma#glx@email.com"/>
              </el-form-item>
              <el-form-item label="Drug Price">
                <el-input v-model="formData.MedPrice" placeholder="per box in DHR"/>
              </el-form-item>
              <el-form-item label="Description">
                <el-input v-model="formData.MedDescription" type="textarea" placeholder="Drug's description"/>
              </el-form-item>
	          </div>
	        </el-col>
	      </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button type="primary" @click="updateData()">{{ $t('table.confirm') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { fetchAsset , updateAsset} from '@/api/pharma'
export default {
  
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
    formData: {},
      isParticipantSelected: true,
      dialogFormVisible: false,
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      loading: false,
      total:0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      fetchAsset(this.listQuery,'Medicine').then(response => {
        console.log(response)
        this.list = response.data
        this.total = response.data.total
        this.loading = false
      })
      .catch(err=>{
        this.$notify({
          title: 'Error',
          message: 'Erro in loading',
          type: 'error'
        })
      })
    },
    handleUpdate(row) {
      this.formData = Object.assign({}, row) // copy obj
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    updateData() {
          const tempData = Object.assign({}, this.formData)
          updateUser(tempData,'Charity').then(() => {
            this.dialogFormVisible = false
            this.$notify({
              title: 'Status',
              message: 'Updated Sucessfully',
              type: 'success',
              duration: 2000
            })
          })
    },
  }
}
</script>