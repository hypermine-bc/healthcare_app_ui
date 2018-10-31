\<template>
  <div class="createPost-container">
    <el-form ref="form" :model="form" label-width="120px" >
      <el-row class="createPost-main-container" style="height: 200px;">
        <el-col :span="6">
          <el-steps :active="active" :space="100" direction="vertical" finish-status="success">
            <el-step title="Patient Info"/>
            <el-step title="Prescription"/>
            <el-step title="Attachments"/>
            <el-step title="Notes"/>
          </el-steps>
          <el-button style="margin-top: 12px;" @click="next">{{ buttonName }}</el-button>
        </el-col>
        <el-col v-if="active==0" :span="18">
          <el-form-item required>
            <el-col :span="12">
              <el-form-item label="Select Patient">
                <el-select
                  v-model="patientDetail"
                  :remote-method="remoteMethodPatient"
                  :loading="patientloading"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="Please enter a keyword">
                  <el-option
                    v-for="item in options4p"
                    :key="item.email"
                    :label="item.firstName"
                    :value="item.email"/>
                </el-select>
              </el-form-item>
              <el-form-item label="patientDetail" >{{ patientDetail }}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Select Doctor">
                <el-select
                  v-model="doctorDetail"
                  :remote-method="remoteMethodDoctor"
                  :loading="doctorloading"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="Please enter a keyword">
                  <el-option
                    v-for="item in options4d"
                    :key="item.email"
                    :label="item.firstName"
                    :value="item.email"/>
                </el-select>
              </el-form-item>
              <el-form-item label="doctorDetail" >{{ doctorDetail }}</el-form-item>
            </el-col>
          </el-form-item>

        </el-col>
        <el-col v-if="active==1" :span="18">
          <Prescription />
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>

// import { participantData as participantDataList } from '../core/form-data.js'
import Prescription from './steps/prescription'
import { fetchPatient, fetchDoctor } from '@/api/userlist'
// import axios from 'axios'

export default {
  components: { Prescription },
  data() {
    return {
      form: {},
      isParticipantSelected: '',
      buttonName: 'Next Step',
      active: 0,
      patientDetail: '',
      doctorDetail: '',
      patientlist: null,
      doctorlist: null,
      doctorloading: false,
      patientloading: false,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      options4p: [],
      options4d: []
    }
  },
  computed: {

  },
  mounted() {
    // console.log(participantDataList)
    this.getPatient()
    this.getDoctor()
  },
  methods: {
    getPatient() {
      fetchPatient(this.listQuery).then(e => {
        this.patientlist = e.data
      })
        .catch(e => {
          console.log(e)
          this.$notify.error({
            title: 'Error',
            dangerouslyUseHTMLString: true,
            message: '<strong>' + JSON.stringify(e.message) + '</strong>'
          })
        })
    },
    getDoctor() {
      fetchDoctor(this.listQuery).then(e => {
        this.doctorlist = e.data
      })
        .catch(e => {
          console.log(e)
          this.$notify.error({
            title: 'Error',
            dangerouslyUseHTMLString: true,
            message: '<strong>' + JSON.stringify(e.message) + '</strong>'
          })
        })
    },
    next() {
      if (this.active++ > 2) {
        this.active = 0
        this.buttonName = 'Next Step'
      }
      if (this.active === 3) {
        this.buttonName = 'Save'
      }
    },
    onSubmit() {
    },
    remoteMethodPatient(query) {
      if (query !== '') {
        this.patientloading = true
        setTimeout(() => {
          this.patientloading = false
          this.options4p = this.patientlist.filter(item => {
            return item.email.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4p = []
      }
    },
    remoteMethodDoctor(query) {
      if (query !== '') {
        this.doctorloading = true
        setTimeout(() => {
          this.doctorloading = false
          this.options4d = this.doctorlist.filter(item => {
            return item.email.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4d = []
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
