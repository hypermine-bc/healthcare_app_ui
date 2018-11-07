<template>
  <div>
    <el-table v-loading="loading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="Email" >
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Name" >
        <template slot-scope="scope">
          <span>{{ scope.row.firstName }} {{ scope.row.lastName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Addresse" >
        <template slot-scope="scope">
          <span>{{ scope.row.address.address }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button>
        </template>
      </el-table-column>

      <!-- <el-table-column align="center" label="Actions" >
        <template slot-scope="scope">
          <router-link :to="'/example/edit/'+scope.row.email">
            <el-button type="primary" size="small" icon="el-icon-edit">Edit</el-button>
          </router-link>
        </template>
      </el-table-column> -->

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
    <el-dialog :visible.sync="dialogFormVisible" title="Update User Details">
      <el-form ref="dataForm" :model="formData" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-row class="createPost-main-container">
          <el-col :span="24">

            <div v-if="dialogFormVisible" >
              <el-form-item label="First Name">
                <el-input v-model="formData.firstName"/>
              </el-form-item>

              <el-form-item label="Last Name">
                <el-input v-model="formData.lastName"/>
              </el-form-item>

              <el-form-item label="Email">
                <el-input v-model="formData.email" :disabled="true" />
              </el-form-item>

              <el-form-item label="Password">
                <el-input v-model="formData.password" type="text"/>
              </el-form-item>

              <el-form-item label="Addresse">
                <el-input v-model="formData.address.address" type="textarea"/>
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
import { fetchDoctor, updateUser } from '@/api/userlist'
export default {
  components: { },
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
      total: 0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      fetchDoctor(this.listQuery).then(response => {
        console.log(response)
        this.list = response.data
        this.total = response.data.length
        this.loading = false
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
      updateUser(tempData, 'Doctor').then(() => {
        this.dialogFormVisible = false
        this.$notify({
          title: 'Status',
          message: 'Updated Sucessfully',
          type: 'success',
          duration: 2000
        })
      })
    }
  }
}
</script>
