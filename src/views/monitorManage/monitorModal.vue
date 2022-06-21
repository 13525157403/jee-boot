<template>
  <a-modal
    title="重新设定密码"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
    cancelText="关闭"
    style="top: 20px"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item label="任务名称" :labelCol="labelCol" :wrapperCol="wrapperCol" prop="taskName">
          <a-input
            placeholder="请输入"
            v-decorator="['taskName', { rules: [{ required: true, message: '不能为空!' }] }]"
          />
        </a-form-item>

        <a-form-item label="所属项目" :labelCol="labelCol" :wrapperCol="wrapperCol" hasFeedback prop="project">
          <a-select
            v-decorator="['project', { rules: [{ required: true, message: '不能为空!' }] }]"
            placeholder="请选择性别"
            :getPopupContainer="
              (target) => {
                return target.parentNode
              }
            "
          >
            <a-select-option :value="1">男</a-select-option>
            <a-select-option :value="2">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="时间周期" :labelCol="labelCol" :wrapperCol="wrapperCol" hasFeedback prop="date">
          <a-range-picker
            style="width: 256px"
            v-decorator="['date', { rules: [{ required: true, message: '不能为空!' }] }]"
            :valueFormat="dateFormat"
            :getCalendarContainer="
              (node) => {
                return node.parentNode
              }
            "
          />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
export default {
  name: 'PasswordModal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    confirmLoading: {
      type: Boolean,
      default: false,
    },
    confirmDirty: {
      type: Boolean,
      default: false,
    },
    labelCol: {
      type: Object,
      default: () => {
        return {
          xs: { span: 24 },
          sm: { span: 5 },
        }
      },
    },
    wrapperCol: {
      type: Object,
      default: () => {
        return {
          xs: { span: 24 },
          sm: { span: 16 },
        }
      },
    },
  },
  data() {
    return {
      model: {},
      form: this.$form.createForm(this),
      dateFormat: 'YYYY-MM-DD',
    }
  },
  created() {},

  methods: {
    show(username) {
      this.form.resetFields()
      this.visible = true
      this.model.username = username
      this.$nextTick(() => {
        this.form.setFieldsValue({ username: username })
      })
    },
    close() {
      this.$emit('close')
      this.visible = false
      this.disableSubmit = false
      this.selectedRole = []
    },
    handleSubmit() {
      // 触发表单验证
      this.form.validateFields((err, values) => {
        if (!err) {
          this.confirmLoading = true
          let formData = Object.assign(this.model, values)
          changePassword(formData)
            .then((res) => {
              if (res.success) {
                this.$message.success(res.message)
                this.$emit('ok')
              } else {
                this.$message.warning(res.message)
              }
            })
            .finally(() => {
              this.confirmLoading = false
              this.close()
            })
        }
      })
    },
    handleCancel() {
      this.close()
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form
      const confirmpassword = form.getFieldValue('confirmpassword')
      console.log('confirmpassword==>', confirmpassword)
      if (value && confirmpassword && value !== confirmpassword) {
        callback('两次输入的密码不一样！')
      }
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        callback('两次输入的密码不一样！')
      } else {
        callback()
      }
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
  },
}
</script>