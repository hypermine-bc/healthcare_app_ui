<template>
      <el-form-item >
        <el-col :span="24">
         <el-upload
              class="upload-demo"
              drag
              action=""
              :on-preview="handlePreview"
              :auto-upload="false"
              :on-remove="deleteAttachment"
              :file-list="fileList"
              :on-change="addAttachment"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
              <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
            </el-upload>
        </el-col>
      </el-form-item>
</template>
<script>
import { fetchAsset } from '@/api/pharma'

  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        fileList: []
      };
    },
    methods: {
    addAttachment ( file, fileList ) {
          this.fileList.push( file );
    },
    deleteAttachment () {
          // removes from array
    },
    handlePreview (){
      //
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
    }
  }
</script>