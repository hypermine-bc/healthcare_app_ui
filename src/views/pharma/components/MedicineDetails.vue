<template>
  <div class="createPost-container">
    <el-form ref="form" :model="form" label-width="120px" >
      <el-row class="createPost-main-container">
        <el-col :span="12">
          <el-form-item label="Drug Name">
            <el-select
              v-model="form.MedName"
              :remote-method="remoteMethod"
              :loading="loading"
              filterable
              remote
              reserve-keyword
              placeholder="Please enter a keyword">
              <el-option
                v-for="item in options4"
                :key="item.term"
                :label="item.term"
                :value="item.term"/>
            </el-select>
          </el-form-item>
          <el-form-item label="Drug Code">
            <el-input v-model="form.MedId" placeholder="Example iqv_drg_001"/>
          </el-form-item>
          <el-form-item label="Pharma Name">
            <el-input v-model="form.pharma" placeholder="Example resource:org.example.iqvia.Pharma#glx@email.com"/>
          </el-form-item>
          <el-form-item label="Drug Price">
            <el-input v-model="form.MedPrice" placeholder="per box in DHR"/>
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="form.MedDescription" type="textarea" placeholder="Drug's description"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button @click="clearForm">Cancel</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>

import { medicineData } from '../../admin/core/form-data.js'
import medList from '../core/medicinelist.js'
import { createAsset } from '@/api/pharma.js'

// import axios from 'axios'gg
export default {
  data() {
    return {
      // form: participantDataList[0],
      isParticipantSelected: '',
      medicineData,
      options4: [],
      loading: false,
      value9: [],
      list: medList
    }
  },
  computed: {
    form() {
      return medicineData
    }
  },
  mounted() {
    console.log(medList)
  },
  methods: {
    clearForm() {
      Object.keys(this.form).forEach(key => {
        this.form[key] = ''
      })
    },
    onSubmit() {
      createAsset(this.form, 'Medicine')
        .then(e => {
          this.$notify({
            title: 'Status',
            message: 'Created Sucessfully',
            type: 'success',
            duration: 2000
          })
        })
        .catch(err => {
          this.$notify.error({
            title: 'Error',
            dangerouslyUseHTMLString: true,
            message: '<strong>' + JSON.stringify(err.message) + '</strong>'
          })
        })
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.term.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4 = []
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
    .editor-container {
      min-height: 500px;
      margin: 0 0 30px;
      .editor-upload-btn-container {
        text-align: right;
        margin-right: 10px;
        .editor-upload-btn {
          display: inline-block;
        }
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
}
</style>
