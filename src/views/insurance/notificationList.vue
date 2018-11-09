<template>
  <div class="app-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key="item.key" :name="item.key">
        <keep-alive>
          <insuranceNotificationList v-if="item.key=='IQ'"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
// import { fetchList } from '@/api/article'

// import patientList from './components/tab-panes/userpatientlist'
// import doctorList from './components/tab-panes/userdoctorlist'
// import pharmaList from './components/tab-panes/userpharmalist'
import insuranceNotificationList from './components/tab-panes/useriqvialist'
// import charityList from './components/tab-panes/usercharitylist'

// ddd

export default {
  name: 'InsuranceNotification',
  components: { insuranceNotificationList },
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
  },
  created() {
    // this.getList()
  },
  methods: {

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
