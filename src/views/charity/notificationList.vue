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

// ddd

export default {
  name: 'ArticleList',
  components: { patientList, doctorList, pharmaList, iqviaList, charityList },
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
        { label: 'Case', key: 'IQ' },
        { label: 'Doctor', key: 'DC' },
        { label: 'Patient', key: 'PT' },
        { label: 'Charity', key: 'CH' },
        { label: 'Pharma', key: 'PH' }
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
