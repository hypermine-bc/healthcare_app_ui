<template>
  <div class="app-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key="item.key" :name="item.key">
        <keep-alive>
          <medicineList v-if="item.key=='ML'"/>
          <usercaseList v-if="item.key=='NL'"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
// import { fetchList } from '@/api/article'

import medicineList from '../components/tab-panes/caselist'
import usercaseList from '../components/tab-panes/usercaselist'

// ddd

export default {
  name: 'MedicineList',
  components: { medicineList, usercaseList },
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
        { label: 'Case List', key: 'ML' },
        { label: 'User Notification List', key: 'NL' }
      ],
      activeName: 'ML',
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
