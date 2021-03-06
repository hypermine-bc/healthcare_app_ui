import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/Prescription',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Prescription',
  //       meta: { title: 'Prescription', icon: 'tab' }
  //     }
  //   ]
  // },
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/svg-icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  /** When your routing table is too long, you can split it into small modules**/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,
  {
    path: '/doctor',
    component: Layout,
    redirect: '/doctor/list',
    name: 'Doctor',
    meta: {
      title: 'Doctor',
      icon: 'doctor-bold'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/doctor/create'),
        name: 'CreateCase',
        meta: { title: 'Create Case', icon: 'edit' }
      },
      {
        path: 'list',
        component: () => import('@/views/doctor/case/list'),
        name: 'Notifications',
        meta: { title: 'Notifications', icon: 'list' }
      }
    ]
  },

  {
    path: '/register',
    component: Layout,
    redirect: '/register/list',
    name: 'Admin',
    meta: {
      title: 'Admin',
      icon: 'peoples'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/admin/create'),
        name: 'CreateUser',
        meta: { title: 'Create User', icon: 'edit' }
      },
      {
        path: 'list',
        component: () => import('@/views/admin/userlist'),
        name: 'UserList',
        meta: { title: 'User List', icon: 'list' }
      }, {
        path: 'notification',
        component: () => import('@/views/admin/case/list'),
        name: 'AdminNotification',
        meta: { title: 'Notifications', icon: 'list' }
      }
    ]
  },
  {
    path: '/patient',
    component: Layout,
    redirect: '/patient/notification',
    name: 'Patient',
    alwaysShow: true,
    meta: {
      title: 'Patient',
      icon: 'people'
    },
    children: [
      {
        path: 'notification',
        component: () => import('@/views/patient/notificationList'),
        name: 'Notifications',
        meta: { title: 'Notifications', icon: 'list' }
      }
    ]
  },
  {
    path: '/charity',
    component: Layout,
    redirect: '/charity/notification',
    name: 'Charity',
    alwaysShow: true,
    meta: {
      title: 'Charity',
      icon: 'charity-bold'
    },
    children: [
      {
        path: 'notification',
        component: () => import('@/views/charity/notificationList'),
        name: 'Notifications',
        meta: { title: 'Notifications', icon: 'list' }
      }
    ]
  },
  {
    path: '/insurance',
    component: Layout,
    redirect: '/insurance/notification',
    name: 'Insurance',
    alwaysShow: true,
    meta: {
      title: 'Insurance',
      icon: 'health'
    },
    children: [
      {
        path: 'notification',
        component: () => import('@/views/insurance/notificationList'),
        name: 'Notifications',
        meta: { title: 'Notifications', icon: 'list' }
      }
    ]
  },
  {
    path: '/distributor',
    component: Layout,
    redirect: '/distributor/notification',
    name: 'Distributor',
    alwaysShow: true,
    meta: {
      title: 'Distributor',
      icon: 'guide'
    },
    children: [
      {
        path: 'wallet',
        component: () => import('@/views/distributor/wallet'),
        name: 'Wallet',
        meta: { title: 'Wallet', icon: 'wallet' }
      }
    ]
  },
  {
    path: '/pharma',
    component: Layout,
    redirect: '/pharma/medicine',
    name: 'Pharma',
    meta: {
      title: 'Pharma',
      icon: 'documentation'
    },
    children: [
      {
        path: '/drug/add',
        component: () => import('@/views/pharma/medicine/create'),
        name: 'AddDrugs',
        meta: { title: 'Add Drugs', icon: 'edit' }
      },
      {
        path: '/drug/list',
        component: () => import('@/views/pharma/medicine/list'),
        name: 'DrugList',
        meta: { title: 'Drug List', icon: 'list' }
      },
      {
        path: 'notification',
        component: () => import('@/views/pharma/notificationList'),
        name: 'Notifications',
        meta: { title: 'Notifications', icon: 'list' }
      }, {
        path: 'wallet',
        component: () => import('@/views/pharma/wallet'),
        name: 'Wallet',
        meta: { title: 'Wallet', icon: 'wallet' }
      }
    ]
  },
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/errorLog/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/exportExcel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/selectExcel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/uploadExcel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },

  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },

  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', icon: 'clipboard' }
  //     }
  //   ]
  // },

  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n-demo/index'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]
