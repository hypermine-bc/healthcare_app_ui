<template>
      <el-form-item >
        <el-col :span="24">
          <el-form-item label="Rx" >
            <el-select
              v-model="caseData.rxList"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="Please enter a keyword"
              size="large"
              autosize
              :remote-method="remoteMethodList"
              :loading="loading" style="width: 100%">
              <el-option
                v-for="(item, id) in options4p"
                :key="item.MedId"
                :label="item.value"
                :value-key="id"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-table
            :data="caseData.rxList"
            border            
             show-summary
             style="width: 100%">
            <el-table-column
              prop="value"
              label="Name"
              width="180">
            </el-table-column>
            <el-table-column
              prop="data.MedId"
              sortable
              label="Rx Id">
            </el-table-column>
            <el-table-column
              prop="data.MedDescription"
              label="Rx Description">
            </el-table-column>
            <el-table-column
              prop="label"
              label="Price"
              sortable
              width="180">
            </el-table-column>
            
          </el-table>
        </el-col>
      </el-form-item>
</template>
<script>
import { fetchAsset } from '@/api/pharma'
import { mapGetters } from 'vuex'
export default {
  components: { },
  data() {
    return {
      formData: [],
      list: null,
      loading: false,
      options4p: []
    }
  },
  created() {
    this.getList()
  },

  methods: {
    getList() {
      fetchAsset(this.listQuery,'Medicine').then(response => {
        //this.list = response.data
        console.log("response.data", response.data)

        this.list = response.data.map(item => {
          return { value: item.MedName, label: item.MedPrice, data: item};
        });
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
    remoteMethodList(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4p = this.list.filter(item => {
            return item.value.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4p = []
      }
    }
  },
   watch: {
    caseData: {
       handler: function(newValue) {
                let CASEDATA = this.caseData
                 this.$store.dispatch('setCaseData',CASEDATA)
            },
            deep: true
    }
  },
  computed : {
   ...mapGetters([
      'caseData'
    ])
  }
}
</script>