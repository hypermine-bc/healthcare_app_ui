<template>
  <div class="createPost-container">
      <el-row class="createPost-main-container" style="height: 200px;">
        <el-col :span="4">
          <el-steps direction="vertical" :active="active" finish-status="success" :space="100">
            <el-step title="Patient Info">
            </el-step>
            <el-step title="Prescription">
            </el-step>
            <el-step title="Attachments">
            </el-step>
            <el-step title="Notes">
            </el-step>
          </el-steps>
          <el-button style="margin-top: 12px;" @click="prev">Prev</el-button>
          <el-button style="margin-top: 12px;" v-if="active< 3" @click="next">{{buttonName}}</el-button>
          <el-button style="margin-top: 12px;" v-if="active== 3" @click="onSubmit">Save</el-button>
        </el-col>
        <el-col :span="20" >
          <el-form ref="form" :model="form" label-width="120px" >
            <el-form-item   v-if="active==0" >
              <el-col :span="12">
                <el-form-item label="Select Patient" required>
                  <el-select
                    v-model="caseData.patientDetail"
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
                      :value="item"/>
                  </el-select>
                </el-form-item>
                <div v-if="caseData.patientDetail !=''">
                  <el-form-item label="Email" >{{caseData.patientDetail.email}}</el-form-item>
                <el-form-item label="Addresse" >{{caseData.patientDetail.address.address}}</el-form-item>
                </div>
                
              </el-col>
              <el-col :span="12">
                <el-form-item label="Select Doctor" required>
                  <el-select
                    v-model="caseData.doctorDetail"
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
                      :value="item"/>
                  </el-select>
                </el-form-item>
                <div v-if="caseData.doctorDetail !=''">
                  <el-form-item label="doctor Detail" >{{caseData.doctorDetail.email}}</el-form-item>
                  <el-form-item label="Addresse" >{{caseData.doctorDetail.address.address}}</el-form-item>
                </div>
              </el-col>
            </el-form-item>
            <Prescription v-if="active==1" />
            <Attachments v-if="active==2" />
            <el-form-item   v-if="active==3" >
              <el-col :span="24">
                <el-form-item label="Add notes" required>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 4}"
                    placeholder="Please input"
                    v-model="caseData.comment">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { prescriptionData } from '../core/form-data.js'
import Prescription from './steps/prescription'
import Attachments from './steps/Attachments'
import { fetchPatient , fetchDoctor} from '@/api/userlist'
import { createAsset } from '@/api/userlist'
let CryptoJS = require("crypto-js");
export default {
  components: {Prescription,Attachments},
  data() {
    return {
      form: {},
      isParticipantSelected: '',
      buttonName: 'Next Step',
      active: 0,
      // patientDetail: '',
      // doctorDetail: '',
      patientlist: null,
      doctorlist: null,
      doctorloading: false,
      patientloading: false,
      comments: "",
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
   ...mapGetters([
      'caseData'
    ]),
  },
  mounted() {
    // console.log(participantDataList)
    this.getPatient()
    this.getDoctor()

    // if(isEmpty(this.caseData))
      // this.$store.dispatch('setCaseData',prescriptionData)
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
  methods: {
    getPatient() {
      fetchPatient(this.listQuery).then(e => {
        this.patientlist = e.data
      }).catch(e => {
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
    prev() {
      this.buttonName='Next Step'
        if (this.active == 0) {
        }
         else
          this.active--
    },
    onSubmit() {
      let erro = []
      let caseData = this.caseData
      if(caseData.patientDetail =='')
          erro.push('Patient Details')
      if(caseData.patientDetail =='')
          erro.push('Doctor Details')
      if(caseData.rxList.length<=0)
          erro.push('No medicine Prescribed')

      if(erro.length>0){
        this.$notify.error({
            title: 'Error',
            dangerouslyUseHTMLString: true,
            message: 'Erro in '+JSON.stringify(erro)+' Please update'
          })
      }
      else{

        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(this.caseData), 'secret key 123');
         console.log(ciphertext.toString())

         console.log(prescriptionData)
         createAsset(prescriptionData,'')
        // // Decrypt
        // var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
        // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
         
        // console.log(decryptedData);
      }

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
      } else 
        this.options4p = []
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
      } else 
        this.options4d = []
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
