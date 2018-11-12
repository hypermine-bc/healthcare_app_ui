<template>
  <div class="components-container">
    <div :shadow="true" class="wallet-header">
      <el-row>
        <el-col :span="6">
          <ul style="">
            <li>
              <svg-icon icon-class="wallet" style="width: 50px;height: 50px"/>
            </li>
            <li>
              <div class="wallet-amount">$ {{ accountBalance }}</div>
              <div style="padding: 5px">Your Wallet Balance</div>
            </li>
          </ul>
        </el-col>
        <el-col :span="18">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="">
              <el-input placeholder="Enter Amount to your Wallet"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" >Add Money to wallet</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

    </div>
    <div class="wallet-transaction-container">
      <el-table
        :data="list"
        border
        show-summary
        style="width: 100%">
        <el-table-column
          prop="tokenId"
          label="Token Id"
          width="180"/>
        <el-table-column
          prop="userDetail"
          label="Sender Id"
          width="180"/>
        <el-table-column
          prop="pharma"
          label="Pharma Id"
          width="180"/>
        <el-table-column
          prop="TransferStatus"
          label="Status"
          width="180"/>
        <el-table-column
          prop="tokenBalance"
          label="Amount Recieved "
          width="100"/>
        <el-table-column :label="$t('table.actions')" align="center" width="100" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">Transfer</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" title="Release Token">
      <el-form :model="formData">
        <el-form-item label="Amount %" />
        <div class="block">
          <el-slider
            v-model="value8"
            :step="10"
            show-input/>
        </div>
        <el-form-item label="Distributor Id" >
          <el-input v-model="distributorId" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="transferToken">Confirm</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { fetchAsset, createAsset } from '@/api/pharma'
function tokenBalance(item) {
  return item.tokenBalance
}
function sum(prev, next) {
  return prev + next
}

export default {
  name: 'AvatarUploadDemo',
  components: { },
  data() {
    return {
      imagecropperShow: false,
      dialogFormVisible: false,
      formData: {},
      value8: 0,
      distributorId: 'distributor_1@gmail.com',
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      list: [
        {
          tokenId: 'Dummy_ID_123',
          userDetail: 'meaaow@gmail.com',
          pharma: 'MeothPharma',
          tokenBalance: 3000,
          TransferStatus: 'INIT'
        }
      ]
    }
  },
  computed: {
    accountBalance() {
      return this.list.map(tokenBalance).reduce(sum)
    }
  },
  created() {
    this.getList()
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    },
    close() {
      this.imagecropperShow = false
    },
    transferToken() {
      const format = {
        '$class': 'org.example.iqvia.ReleaseTokenToDistributor',
        'pharmaNoti': 'resource:org.example.iqvia.PharmaTokenReleaseNotification#' + this.formData.tokenId,
        'percentage': this.value8,
        'distributor': 'resource:org.example.iqvia.Distributor#' + this.distributorId
      }
      debugger
      createAsset(format, 'ReleaseTokenToDistributor').then((e) => {
        this.dialogFormVisible = false
        this.$notify({
          title: 'Status',
          message: 'Signed Sucessfully',
          type: 'success',
          duration: 2000
        })
      })
    },
    handleUpdate(row) {
      this.formData = Object.assign({}, row) // copy obj
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    getList() {
      this.loading = true
      fetchAsset(this.listQuery, 'PharmaTokenReleaseNotification').then(response => {
        this.list = response.data
        this.total = response.data.total
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
  .wallet-header{
    background: #eef1f6;
    padding:10px;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
 .wallet-transaction-container{
    margin-top: 35px;
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .wallet-amount{
    font-size: 18px;
    padding: 5px;
    font-weight: 600;
    display: block;
  }

  .avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: left;
    padding-left: 5px;
    font-size: 12px;
    font-weight: 400;
}

li a {
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
}
</style>

