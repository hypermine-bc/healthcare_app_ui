<template>
  <div>
    <el-row>
      <el-col v-for="(o) in payerNotificationList" :span="8" :key="o" style="padding:5px">
        <el-card :body-style="{ padding: '0px' }">
          <img src="src/assets/HI.png" class="image">
          <div style="padding: 14px;">
            <!-- <span>{{ o.notificationId }}</span> -->
            <div class="bottom clearfix">
              <el-row>
                <el-col :span="11" style="font-size:13px"> {{ o.userId }}</el-col>
                <el-col :span="8" class="time"> $ {{ o.reqMoney }} | <i :style="{ color: o.statusColor }" class="el-icon-circle-check" style="color:green"/> | {{ o.donate.totalPer }}%</el-col>
                <el-col :span="3"> <el-button type="primary" size="mini" @click="handleUpdate(o)">View</el-button></el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="dialogFormVisible" title="Details" width="90%" height="80%">
      <div
        v-if="dialogFormVisible"
        class="components-container"
        style="
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    ">
        <el-row>
          <el-col :span="14">
            <div class="left-container" style="float:left;">
              <fieldset>
                <legend> General:</legend>
                <el-row style="">
                  <el-col :span="10"><label>Case Id</label></el-col>
                  <el-col :span="6"><label> Patient Id  </label></el-col>
                  <el-col :span="8"><label> Notification Id</label></el-col>
                </el-row>
                <el-row>
                  <el-col :span="10"> {{ formData.docPrescriptionId }} </el-col>
                  <el-col :span="6"> {{ formData.userId }}</el-col>
                  <el-col :span="8"> {{ formData.notificationId }}</el-col>
                </el-row>
              </fieldset>
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
                  <el-col :span="10"><label>Address</label></el-col>
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
                <legend> Funds Raised:</legend>
                <el-row style="">
                  <el-col :span="10"><label>Amount to be covered</label></el-col>
                  <el-col :span="6"><label>Total Raised </label></el-col>
                  <el-col :span="6"><label>Total Raised in $</label></el-col>
                </el-row>
                <el-row>
                  <el-col :span="10"> $ {{ formData.reqMoney }}</el-col>
                  <el-col :span="6"> {{ formData.donate.totalPer }} %</el-col>
                  <el-col :span="6"> $ {{ formData.donate.totalAmount }} </el-col>
                </el-row>
                <el-row style="">
                  <el-col :span="10"><label>Insurance Donation</label></el-col>
                  <el-col :span="6"><label>Pharma Donation</label></el-col>
                  <el-col :span="6"><label>Charity Donation</label></el-col>
                </el-row>
                <el-row>
                  <el-col :span="10"> $ {{ formData.donate.insurance }} %</el-col>
                  <el-col :span="6"> {{ formData.donate.pharma }} %</el-col>
                  <el-col :span="6"> $ {{ formData.donate.charity }} % </el-col>
                </el-row>

              </fieldset>
            </div>
          </el-col>
          <el-col :span="10">
            <div style="width:60%; height:60%; padding:5px">
              <Chart :data="[20,30,50]"/>
            </div>
          </el-col>
        </el-row>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="danger" icon="el-icon-delete" @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button type="success" icon="el-icon-check" @click="updateData()" >Donate</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Chart from '../chart'
import splitPane from 'vue-splitpane'
import { fetchAsset, createAsset } from '@/api/pharma'
import { donateMoneyFromInsurance } from '../../core/form-data'
const CryptoJS = require('crypto-js')
export default {
  components: { splitPane, Chart },
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
    payerNotificationList() {
      const caseL = []
      this.list.forEach((element) => {
        const notificationId = element.notificationId
        if (notificationId && notificationId.split('-') && notificationId.split('-').length > 0) {
          const docPrescriptionId = notificationId.split('-')[1]
          if (docPrescriptionId) {
            try {
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
              const percentDonate = {
                insurance: 0,
                pharma: 0,
                charity: 0,
                totalPer: 0,
                totalAmount: 0
              }
              if (element.donateDetail && element.donateDetail.length > 0) {
                element.donateDetail.forEach(element => {
                  if (element.hasOwnProperty('donatedPharma')) {
                    percentDonate.pharma += parseInt(element.percentageCovered)
                  }
                  if (element.hasOwnProperty('donatedCharity')) {
                    percentDonate.charity += parseInt(element.percentageCovered)
                  }
                  if (element.hasOwnProperty('donateInsurance')) {
                    percentDonate.insurance += parseInt(element.percentageCovered)
                  }
                })
              }
              percentDonate.totalPer = percentDonate.insurance + percentDonate.pharma + percentDonate.charity
              percentDonate.totalAmount = (parseInt(element.reqMoney) * parseInt(percentDonate.totalPer)) / 100
              caseL.push({
                notificationId: notificationId,
                reqMoney: element.reqMoney,
                percentageCoverd: element.percentageCoverd,
                transferStatus: element.TransferStatus,
                userId: userId,
                data: element.comments,
                statusColor: statusColor,
                docPrescriptionId: docPrescriptionId,
                donate: percentDonate
              })
            } catch (e) {
              console.log(`ERROR : ${e}`)
            }
          } else {
            console.log('ERROR : docPrescriptionId not found.')
          }
        } else {
          console.log('ERROR : notificationId not found.')
        }
      })
      console.log(`Computed Object ${JSON.stringify(caseL)}`)
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
      fetchAsset(this.listQuery, 'IQVIAPayerNotification').then(response => {
        console.log(response)
        this.list = response.data
        this.total = response.data.length
        this.loading = false
      })
    },
    async handleUpdate(row) {
      this.formData = Object.assign({}, row) // copy obj

      const docPresID = this.formData.docPrescriptionId
      if (docPresID) {
        let userDetails = await fetchAsset(this.listQuery, 'DoctorPrescription', docPresID)
        userDetails = userDetails.data
        if (userDetails) {
          const cypherBytes = CryptoJS.AES.decrypt(userDetails.comments, 'secret key 123')
          const caseObj = JSON.parse(cypherBytes.toString(CryptoJS.enc.Utf8))
          this.formData.caseObj = caseObj
          // this.formData.patientName = caseObj.patientDetail.email,
        }
      }

      this.dialogFormVisible = true
    //   this.$nextTick(() => {
    //     this.$refs['dataForm'].clearValidate()
    //   })
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
      donateMoneyFromInsurance.insuranceNoti = donateMoneyFromInsurance.insuranceNoti + this.formData.notificationId
      donateMoneyFromInsurance.percentage = this.value7
      // bas yha  pe tumko theek karna hai ...phir donation ho jayega..
      // tempData.insuranceCompany = tempData.insuranceCompany +
      createAsset(donateMoneyFromInsurance, 'DonateMoneyFromInsurance').then(() => {
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
