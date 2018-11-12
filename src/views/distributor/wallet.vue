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
          prop="distributerId"
          label="Transaction Id"
          width="180"/>
        <el-table-column
          prop="patient"
          label="Patient Id"
          width="180"/>
        <el-table-column type="expand" label="Medicine Id" width="180">
          <template slot-scope="props">
            <p v-for="(med,i) in props.row.medUsed" :key="i">Med: {{ med }}</p>
          </template>
        </el-table-column>
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
            <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">Recieve</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" title="Upload Reciept">
      <el-upload
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        class="avatar-uploader"
        action=""
        style="border: #999 1px dotted !important;">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"/>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="transferToken">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchAsset } from '@/api/pharma'
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
      imagecropperKey: 0,
      dialogFormVisible: false,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      imageUrl: '',
      list: [
        {
          distributerId: 'Dummy_ID_123',
          patient: 'meaaow@gmail.com',
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
    handleUpdate(row) {
      this.formData = Object.assign({}, row) // copy obj
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    getList() {
      this.loading = true
      fetchAsset(this.listQuery, 'DistributorNotification').then(response => {
        this.list = response.data
        this.total = response.data.total
        this.loading = false
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
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
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload{
        border: #999 1px dotted !important;
  }
</style>

