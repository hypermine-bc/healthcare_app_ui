<template>
  <div class="createPost-container">
    <el-form ref="form" :model="form" label-width="120px" >
      <el-row class="createPost-main-container">
        <el-col :span="12">
          <el-form-item label="Activity name">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="form.region" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai"/>
              <el-option label="Zone two" value="beijing"/>
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;"/>
            </el-col>
            <el-col :span="2" class="line">-</el-col>
            <el-col :span="11">
              <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery"/>
          </el-form-item>
          <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Online activities" name="type"/>
              <el-checkbox label="Promotion activities" name="type"/>
              <el-checkbox label="Offline activities" name="type"/>
              <el-checkbox label="Simple brand exposure" name="type"/>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
              <el-radio label="Sponsor"/>
              <el-radio label="Venue"/>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
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
      userData: {
        '$class': 'org.example.iqvia.IQVIA',
        'email': '2044',
        'firstName': '',
        'lastName': '',
        'password': '',
        'address': {
          '$class': 'org.example.iqvia.Address',
          'country': '',
          'city': '',
          'address': '',
          'mobile': '',
          'zip': ''
        }
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
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
