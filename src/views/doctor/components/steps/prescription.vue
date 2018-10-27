<template>
  <div>
    <el-form-item label="Select Medicines">
      <el-select
        v-model="patientDetail"
        :remote-method="remoteMethodPatient"
        :loading="patientloading"
        filterable
        remote
        multiple
        reserve-keyword
        placeholder="Please enter a keyword" >
        <el-option
          v-for="item in options4p"
          :key="item.email"
          :label="item.firstName"
          :value="item.email"/>
      </el-select>
    </el-form-item>
  </div>
</template>
<script>
import { fetchAsset } from '@/api/pharma'
export default {
  components: { },
  data() {
    return {
      formData: {},
      list: null,
      loading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchAsset(this.listQuery,'Medicine').then(response => {
        console.log(response)
        this.list = response.data
        // this.total = response.data.total
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

  }
}
</script>