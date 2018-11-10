<template>
  <div>
    <el-row>
      <el-col v-for="(o) in insuranceNotificationList" :span="8" :key="o" style="padding:5px">
        <el-card :body-style="{ padding: '0px' }">
          <img src="src/assets/HI.png" class="image">
          <div style="padding: 14px;">
            <!-- <span>{{ o.notificationId }}</span> -->
            <div class="bottom clearfix">
              <el-row>
                <el-col :span="11" style="font-size:13px"> {{ o.userId }}</el-col>
                <el-col :span="8" class="time"> $ {{ o.reqMoney }} | <i :style="{ color: o.statusColor }" class="el-icon-circle-check" style="color:green"/> | {{ o.percentageCoverd }}%</el-col>
                <el-col :span="3"> <el-button type="primary" size="mini" @click="handleUpdate(o)">View</el-button></el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="dialogFormVisible" title="Case Details" width="90%" height="80%">
      <div
        v-if="dialogFormVisible"
        class="components-container"
        style="
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    ">
        <div class="left-container">
          <fieldset v-if="hasInsurance">
            <legend> Insurance:</legend>
            <el-row style="">
              <el-col :span="10"><label>Inurance Name</label></el-col>
              <el-col :span="6"><label> Inurance </label></el-col>
              <el-col :span="8"><label> File</label></el-col>
            </el-row>
            <el-row>
              <el-col :span="10"> {{ formData.caseObj.patientDetail.patientInsurance.InsuranceCompanyName }}</el-col>
              <el-col :span="6"> {{ formData.caseObj.patientDetail.patientInsurance.InsuranceClaimPercentage }}  %</el-col>
              <el-col :span="8"> {{ formData.caseObj.patientDetail.patientInsurance.InsuranceFile }}</el-col>
            </el-row>
          </fieldset>

          <fieldset>
            <legend> Patient:</legend>
            <el-row style="">
              <el-col :span="10"><label>Name</label></el-col>
              <el-col :span="6"><label> Dob  </label></el-col>
              <el-col :span="8"><label> Email</label></el-col>
            </el-row>
            <el-row>
              <el-col :span="10"> {{ formData.caseObj.patientDetail.firstName }} {{ formData.caseObj.patientDetail.lastName }}</el-col>
              <el-col :span="6"> {{ formData.caseObj.patientDetail.dob }}</el-col>
              <el-col :span="8"> {{ formData.caseObj.patientDetail.email }}</el-col>
            </el-row>
            <el-row style="">
              <el-col :span="10"><label>Addresse</label></el-col>
              <el-col :span="6"><label> Marital Status % </label></el-col>
              <el-col :span="8"><label> Sex</label></el-col>
            </el-row>
            <el-row>
              <el-col :span="10">{{ formData.caseObj.patientDetail.address.address }}</el-col>
              <el-col :span="6"> {{ formData.caseObj.patientDetail.maritalStatus }}</el-col>
              <el-col :span="8"> {{ formData.caseObj.patientDetail.sex }}</el-col>
            </el-row>
          </fieldset>

          <fieldset>
            <legend> Case Details :</legend>
            <el-row style="">
              <el-col :span="10"><label>Doctor Name</label></el-col>
              <el-col :span="6"><label> Case ID </label></el-col>
              <el-col :span="8"><label>Notificatiion Id  </label></el-col>
            </el-row>
            <el-row>
              <el-col :span="10"> {{ formData.doctorName }} null</el-col>
              <el-col :span="6"> {{ formData.userId }}</el-col>
              <el-col :span="8"> {{ formData.notificationId }}</el-col>
            </el-row>
            <el-row style="">
              <el-col :span="10"><label>Comment</label></el-col>

            </el-row>
            <el-row>
              <el-col :span="10"> {{ formData.comment }}</el-col>
            </el-row>
          </fieldset>
          <fieldset>
            <legend> Others :</legend>
            <el-row style="">
              <el-col :span="8"><label>Amount to be covered</label></el-col>
              <el-col :span="8"><label> Raised </label></el-col>
              <el-col :span="6"><label> Raised in $</label></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"> $ {{ formData.reqMoney }}</el-col>
              <el-col :span="8"> {{ formData.percentageCoverd }} %</el-col>
              <el-col :span="6"> $ {{ calculateAmount(formData.percentageCoverd,formData.reqMoney) }} </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"> <label>Amount covering ?</label></el-col>
              <el-col :span="8">
                <div class="block">
                  <span class="demonstration"/>
                  <el-slider
                    v-model="value7"
                    :step="5"
                    :key="value7"
                    :disabled="isSliderDisable"
                    show-stops/>
                </div>
              </el-col>
              <el-col :span="8">
                <label>{{ value7 }} % </label>
              </el-col>
            </el-row>
            <el-form-item label="Amount covering ?"/>
            <el-form-item label="%">
              {{ value7 }}
            </el-form-item>

          </fieldset>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" icon="el-icon-delete" @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button type="success" icon="el-icon-check" @click="updateData()" >Donate</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import splitPane from 'vue-splitpane'
import { fetchAsset, createAsset } from '@/api/pharma'
import { donateMoneyFromCharity } from '../../core/form-data'
const CryptoJS = require('crypto-js')
export default {
  components: { splitPane },
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
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
      formData: {},
      value7: 0,
      userInsuranceData: {},
      isParticipantSelected: true,
      dialogFormVisible: false,
      list: [],
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      loading: false,
      total: 0
    }
  },

  computed: {
    isSliderDisable() {
      const l = 100 - this.formData.percentageCoverd

      if (this.value7 < l) { return false } else { return true }
    },
    hasInsurance() {
      if (this.dialogFormVisible === true) {
        if (this.formData.caseObj.patientDetail.patientInsurance.hasOwnProperty('InsuranceStatus')) {
          return this.formData.caseObj.patientDetail.patientInsurance.InsuranceStatus
        } else { return false }
      } else { return false }
    },
    insuranceNotificationList() {
      const caseL = []
      this.list.forEach(element => {
        const cypherBytes = CryptoJS.AES.decrypt(element.comments, 'secret key 123')
        try {
          const caseObj = JSON.parse(cypherBytes.toString(CryptoJS.enc.Utf8))
          const userIdBuff = element.userDetail.split('#')
          const userId = userIdBuff[1]
          let statusColor = 'grey'
          switch (element.TransferStatus) {
            case 'INIT' : statusColor = 'grey'
              break
            case 'IN_PROGRESS' : statusColor = 'orange'
              break
            default : statusColor = 'green'
          }
          caseL.push({
            notificationId: element.notificationId,
            reqMoney: element.reqMoney,
            percentageCoverd: element.percentageCoverd,
            patientName: caseObj.patientDetail.email,
            transferStatus: element.TransferStatus,
            doctorName: caseObj.doctorDetail.email,
            comment: caseObj.comment,
            userId: userId,
            drugs: this.getCommaSepMeds(caseObj.rxList).trim(),
            data: element.comments,
            caseObj,
            statusColor: statusColor
          })
        } catch (e) {
          console.log(`ERROR : ${e}`)
        }
      })
      return caseL
    }
  },
  created() {
    this.getList()
  },
  methods: {
    calculateAmount(a, b) {
      let c = 0
      c = (a * b) / 100
      return c
    },
    resize() {
      console.log('resize')
    },
    getList() {
      this.loading = true
      fetchAsset(this.listQuery, 'CharityNotification').then(response => {
        console.log(response)
        this.list = response.data
        this.total = response.data.length
        this.loading = false
      })
    },
    handleUpdate(row) {
      this.formData = Object.assign({}, row) // copy obj
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    updateData() {
      donateMoneyFromCharity.charityNoti = donateMoneyFromCharity.charityNoti + this.formData.notificationId
      donateMoneyFromCharity.percentage = this.value7
      // bas yha  pe tumko theek karna hai ...phir donation ho jayega..
      // tempData.insuranceCompany = tempData.insuranceCompany +
      createAsset(donateMoneyFromCharity, 'DonateMoneyFromCharity').then(() => {
        this.dialogFormVisible = false
        this.$notify({
          title: 'Status',
          message: 'Updated Sucessfully',
          type: 'success',
          duration: 2000
        })
        location.reload()
      })
    },
    getCommaSepMeds(medsList) {
      let commaSepMeds = ''
      if (medsList && medsList.length > 0) {
        medsList.forEach((elm) => {
          commaSepMeds = commaSepMeds + elm.data.MedName + ','
        })
      } else {
        console.log(`ERROR : No meds prescribed.`)
      }
      return commaSepMeds
    }
  }
}
</script>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

  .components-container {
    position: relative;
    height: 50vh;
  }

  .el-dialog__body {
    background-color:#e9eef3;
  }

  .right-container {
    background-color: #FCE38A;
    height: 200px;
  }

  .top-container {
    background-color: #FCE38A;
    width: 100%;
    height: 100%;
  }

  .bottom-container {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
  }
</style>
