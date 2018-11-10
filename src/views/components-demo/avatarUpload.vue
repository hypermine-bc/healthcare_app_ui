<template>
  <div class="components-container">
    <div class="wallet-header" :shadow="true">
      <el-row>
        <el-col :span="6">
          <ul style="">
          <li>
            <svg-icon  icon-class="wallet" style="width: 50px;height: 50px"/>
          </li>
          <li>
            <div class="wallet-amount">$ 96</div>
            <div style="padding: 5px">Your Wallet Balance</div>
          </li>
        </ul>
        </el-col>
        <el-col :span="18">
          <el-form :inline="true"  class="demo-form-inline">
              <el-form-item label="">
                <el-input  placeholder="Enter Amount to your Wallet"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="">Add Money to wallet</el-button>
              </el-form-item>
            </el-form>
        </el-col>
      </el-row>
        
    </div>
    <div class="wallet-transaction-container">
      <el-table
        :data="tableData"
        border
        show-summary
        style="width: 100%">
        <el-table-column
          prop="tokenId"
          label="Token Id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="userDetail"
          label="Sender Email"
          width="180">
        </el-table-column>
        <el-table-column
          prop="TransferStatus"
          label="Status"
          width="180">
        </el-table-column>
        <el-table-column
          prop="tokenBalance"
          label="Amount Recieved ">
        </el-table-column>
      </el-table>
    </div>
    <!-- <pan-thumb :image="image"/> -->

   <!--  <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">Change Avatar
    </el-button> -->
<!-- 
    <image-cropper
      v-show="imagecropperShow"
      :width="300"
      :height="300"
      :key="imagecropperKey"
      url="https://httpbin.org/post"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"/> -->
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'


export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      tableData:[
        {
          tokenId: "Dummy_ID_123",
          userDetail: "meaaow@gmail.com",
          pharma: "MeothPharma",
          tokenBalance: 3000,
          TransferStatus: "INIT"
        }
      ]
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    },
    close() {
      this.imagecropperShow = false
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

