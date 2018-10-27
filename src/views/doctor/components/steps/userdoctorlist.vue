<template>
  <div>
    <el-form-item  required>
    </el-form-item>
  </div>
</template>
<script>
import { fetchDoctor , updateUser } from '@/api/userlist'
export default {
  components: {  },
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
      // this.$emit('create') // for test
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
          updateUser(tempData,'Doctor').then(() => {
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