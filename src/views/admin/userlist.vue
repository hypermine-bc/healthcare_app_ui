<template>
  <div class="app-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key="item.key" :name="item.key">
        <keep-alive>
          <iqviaList v-if="item.key=='IQ'"/>
          <patientList v-if="item.key=='PT'"/>
          <doctorList v-if="item.key=='DC'"/>
          <pharmaList v-if="item.key=='PH'"/>
          <charityList v-if="item.key=='CH'"/>
          <insuranceList v-if="item.key=='IS'"/>
          <distributorList v-if="item.key=='DL'" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
// import { fetchList } from '@/api/article'

import patientList from './components/tab-panes/userpatientlist'
import doctorList from './components/tab-panes/userdoctorlist'
import pharmaList from './components/tab-panes/userpharmalist'
import iqviaList from './components/tab-panes/useriqvialist'
import charityList from './components/tab-panes/usercharitylist'
import insuranceList from './components/tab-panes/insuranceList'
import distributorList from './components/tab-panes/distributorlist'

// ddd

export default {
  name: 'ArticleList',
  components: { patientList, doctorList, pharmaList, iqviaList, charityList, insuranceList, distributorList },
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
  data() {
    return {
      tabMapOptions: [
        { label: 'Iqvia', key: 'IQ' },
        { label: 'Doctor', key: 'DC' },
        { label: 'Patient', key: 'PT' },
        { label: 'Charity', key: 'CH' },
        { label: 'Pharma', key: 'PH' },
        { label: 'Insurance', key: 'IS' },
        { label: 'Distributor', key: 'DL' }
      ],
      activeName: 'IQ',
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    getList() {
      // this.listLoading = true
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total
      //   this.listLoading = false
      // })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
