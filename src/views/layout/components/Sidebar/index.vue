<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <svg-icon v-if="!isCollapse" :icon-class="adminLogo" style="width: 150px;height: 100px"/>
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>

</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  
  components: { SidebarItem },
  mounted() {
    console.log(this.adminLogo)
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar',
      'adminLogo'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
