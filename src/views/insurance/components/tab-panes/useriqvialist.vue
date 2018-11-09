<template>
  <div>
    <el-row>
      <el-col v-for="(o, index) in insuranceNotificationList" :span="8" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://finapp.co.in/wp-content/uploads/2016/12/best-life-insurance-company-india-best-life-insurance-policy.jpg" class="image">
          <div style="padding: 14px;">
            <!-- <span>{{ o.notificationId }}</span> -->
            <div class="bottom clearfix">
              <el-row>
                <el-col :span="11"> {{ o.userId }}</el-col>
                <el-col :span="8" class="time"> ${{ o.reqMoney }} | <i :style="{ color: o.statusColor }" class="el-icon-circle-check" style="color:green"/> | {{ o.percentageCoverd }}%</el-col>
                <el-col :span="3"> <el-button type="primary" size="mini" @click="handleUpdate(o)">View</el-button></el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div class="pagination-container">
      <el-pagination
        :current-page="listQuery.page"
        :page-sizes="[10,20,30, 50]"
        :page-size="listQuery.limit"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" title="Update Case Details">
      <el-form ref="dataForm" :model="formData" label-position="left" label-width="70px" style="width:; margin-left:50px;">
        <el-row class="createPost-main-container">
          <el-col :span="12">
            <div v-if="dialogFormVisible" >
              <el-form-item label="NotificationId" >
                <el-input v-model="formData.notificationId" disabled="disabled"/>
              </el-form-item>
              <el-form-item label="User Id" >
                <el-input v-model="formData.userId" disabled="disabled"/>
              </el-form-item>
              <el-form-item label="transferStatus" >
                <el-input v-model="formData.transferStatus" disabled="disabled"/>
              </el-form-item>
              <el-form-item label="Drugs">
                <el-input v-model="formData.drugs" placeholder="Comma separated drug ids" disabled="disabled"/>
              </el-form-item>
              <el-form-item label="Comment">
                <el-input v-model="formData.comment" type="textarea" placeholder="Case's comment" disabled="disabled"/>
              </el-form-item>
              <el-form-item label="Amount Requested">
                <el-input v-model="formData.reqMoney" disabled="disabled"/>
              </el-form-item>
              <el-form-item label="% Covered">
                <el-slider v-model="formData.percentageCoverd"/>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div v-if="dialogFormVisible" >
              <el-card :body-style="{'background-color':'#fce38a'}" shadow="never">
                If you are Okay with the details please click on the Sign/update button bellow.
                Other wise reject the prescriptiondisabled="disabled"
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" icon="el-icon-delete" @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button type="success" icon="el-icon-check" @click="signPrescription()" >Donate</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { fetchAsset, updateAsset } from '@/api/pharma'
import { donateMoneyFromInsurance } from '../../core/form-data'
const CryptoJS = require('crypto-js')
export default {
  components: { },
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
            case 'IN_PROGRESS' : statusColor = 'yellow'
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
    getList() {
      this.loading = true
      fetchAsset(this.listQuery, 'InsuranceNotification').then(response => {
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
      donateMoneyFromInsurance.insuranceNoti = donateMoneyFromInsurance.insuranceNoti + this.formData.notificationId
      donateMoneyFromInsurance.percentage = this.formData.percentageCoverd
      // bas yha  pe tumko theek karna hai ...phir donation ho jayega..
      // tempData.insuranceCompany = tempData.insuranceCompany +
      updateAsset(donateMoneyFromInsurance, 'DonateMoneyFromInsurance').then(() => {
        this.dialogFormVisible = false
        this.$notify({
          title: 'Status',
          message: 'Updated Sucessfully',
          type: 'success',
          duration: 2000
        })
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
</style>
