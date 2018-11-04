<template>
  <div class="createPost-container">
    <el-form ref="form" :model="form" label-width="120px" >
      <el-row class="createPost-main-container">
        <el-col :span="12">
          <el-form-item label="Participant">
            <el-select v-model="isParticipantSelected" placeholder="please select Participant">
              <el-option label="IQVIA" value="0"/>
              <el-option label="Doctor" value="1"/>
              <el-option label="Charity" value="2"/>
              <el-option label="Patient" value="3"/>
              <el-option label="Pharma" value="4"/>
            </el-select>
          </el-form-item>
          <div v-if="isParticipantSelected" >
            <el-form-item label="First Name">
              <el-input v-model="form.firstName"/>
            </el-form-item>

            <el-form-item label="Last Name">
              <el-input v-model="form.lastName"/>
            </el-form-item>

            <el-form-item label="Email">
              <el-input v-model="form.email"/>
            </el-form-item>

            <el-form-item label="Password">
              <el-input v-model="form.password" type="password"/>
            </el-form-item>

            <el-form-item label="Addresse">
              <el-input v-model="form.address.address" type="textarea"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
// import Tinymce from '@/components/Tinymce'
// import Upload from '@/components/Upload/singleImage3'
// import MDinput from '@/components/MDinput'
// import Sticky from '@/components/Sticky' // 粘性header组件
// import { validateURL } from '@/utils/validate'
// import { fetchArticle } from '@/api/article'
// import { userSearch } from '@/api/remoteSearch'
// import Warning from './Warning'
// import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'
import { participantData as participantDataList } from '../core/form-data.js'
import axios from 'axios'
import store from '@/store'
const base_url = store.state.app.bcBaseUrl
// const defaultForm = {
//   status: 'draft',
//   title: '', // 文章题目
//   content: '', // 文章内容
//   content_short: '', // 文章摘要
//   source_uri: '', // 文章外链
//   image_uri: '', // 文章图片
//   display_time: undefined, // 前台展示时间
//   id: undefined,
//   platforms: ['a-platform'],
//   comment_disabled: false,
//   importance: 0
// }

export default {
  data() {
    return {
      // form: participantDataList[0],
      isParticipantSelected: ''
    }
  },
  computed: {
    form() {
      if (this.isParticipantSelected) {
        return participantDataList[this.isParticipantSelected]
      } else {
        return participantDataList[0]
      }
    },
    participant() {
      if (this.isParticipantSelected) {
        const list = participantDataList[this.isParticipantSelected].$class.split('.')
        return list[list.length - 1]
      }
    }
  },
  mounted() {
    // console.log(participantDataList)
  },
  methods: {
    onSubmit() {
      axios.post(base_url + '/api/' + this.participant, this.form)
        .then(e => {
          console.log(e)
          this.$notify({
            title: 'Success',
            message: 'Successfully Participant created',
            type: 'success'
          })
        })
        .catch(e => {
          console.log(e)
          this.$notify.error({
            title: 'Error',
            dangerouslyUseHTMLString: true,
            message: '<strong>' + JSON.stringify(e.message) + '</strong>'
          })
        })
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
