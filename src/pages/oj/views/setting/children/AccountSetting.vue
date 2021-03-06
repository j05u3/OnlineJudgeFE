<template>
  <div class="setting-main">
    <div class="flex-container">
      <div class="left">
        <p class="section-title">{{ $t('userprofile.page.account.label.changepassword') }}</p>
        <Form class="setting-content" ref="formPassword" :model="formPassword" :rules="rulePassword">
          <FormItem prop="old_password">{{ $t('userprofile.page.account.label.oldpassword') }}
            <Input v-model="formPassword.old_password" type="password"/>
          </FormItem>
          <FormItem prop="new_password">{{ $t('userprofile.page.account.label.newpassword') }}
            <Input v-model="formPassword.new_password" type="password"/>
          </FormItem>
          <FormItem prop="again_password">{{ $t('userprofile.page.account.label.confirmnewpassword') }}
            <Input v-model="formPassword.again_password" type="password"/>
          </FormItem>
          <FormItem v-if="visible.tfaRequired" label="Two Factor Auth" prop="tfa_code">
            <Input v-model="formPassword.tfa_code"/>
          </FormItem>
          <FormItem v-if="visible.passwordAlert">
            <Alert type="success">You will need to login again after 5 seconds..</Alert>
          </FormItem>
          <Button type="primary" @click="changePassword">{{ $t('userprofile.page.account.button.updatepassword') }}</Button>
        </Form>
      </div>

      <div class="middle separator"></div>

      <div class="right">
        <p class="section-title">{{ $t('userprofile.page.account.label.changeemail') }}</p>
        <Form class="setting-content" ref="formEmail" :model="formEmail" :rules="ruleEmail">
          <FormItem prop="password">{{ $t('userprofile.page.account.label.currentpassword') }}
            <Input v-model="formEmail.password" type="password"/>
          </FormItem>
          <FormItem>{{ $t('userprofile.page.account.label.oldemail') }}
            <Input v-model="formEmail.old_email" disabled/>
          </FormItem>
          <FormItem prop="new_email">{{ $t('userprofile.page.account.label.newemail') }}
            <Input v-model="formEmail.new_email"/>
          </FormItem>
          <FormItem v-if="visible.tfaRequired" label="Two Factor Auth" prop="tfa_code">
            <Input v-model="formEmail.tfa_code"/>
          </FormItem>
          <Button type="primary" @click="changeEmail">{{ $t('userprofile.page.account.button.changeemail') }}</Button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@oj/api'
  import { FormMixin } from '@oj/components/mixins'

  export default {
    mixins: [FormMixin],
    data () {
      const oldPasswordCheck = [{required: true, trigger: 'blur', min: 6, max: 20}]
      const tfaCheck = [{required: true, trigger: 'change'}]
      const CheckAgainPassword = (rule, value, callback) => {
        if (value !== this.formPassword.new_password) {
          callback(new Error('password does not match'))
        }
        callback()
      }
      const CheckNewPassword = (rule, value, callback) => {
        if (this.formPassword.old_password !== '') {
          if (this.formPassword.old_password === this.formPassword.new_password) {
            callback(new Error('The new password doesn\'t change'))
          } else {
            // 对第二个密码框再次验证
            this.$refs.formPassword.validateField('again_password')
          }
        }
        callback()
      }
      return {
        loading: {
          btnPassword: false,
          btnEmail: false
        },
        visible: {
          passwordAlert: false,
          emailAlert: false,
          tfaRequired: false
        },
        formPassword: {
          tfa_code: '',
          old_password: '',
          new_password: '',
          again_password: ''
        },
        formEmail: {
          tfa_code: '',
          password: '',
          old_email: '',
          new_email: ''
        },
        rulePassword: {
          old_password: oldPasswordCheck,
          new_password: [
            {required: true, trigger: 'blur', min: 6, max: 20},
            {validator: CheckNewPassword, trigger: 'blur'}
          ],
          again_password: [
            {required: true, validator: CheckAgainPassword, trigger: 'change'}
          ],
          tfa_code: tfaCheck
        },
        ruleEmail: {
          password: oldPasswordCheck,
          new_email: [{required: true, type: 'email', trigger: 'change'}],
          tfa_code: tfaCheck
        }
      }
    },
    mounted () {
      this.formEmail.old_email = this.$store.getters.user.email || ''
    },
    methods: {
      changePassword () {
        this.validateForm('formPassword').then(valid => {
          this.loading.btnPassword = true
          let data = Object.assign({}, this.formPassword)
          delete data.again_password
          if (!this.visible.tfaRequired) {
            delete data.tfa_code
          }
          api.changePassword(data).then(res => {
            this.loading.btnPassword = false
            this.visible.passwordAlert = true
            this.$success('Update password successfully')
            setTimeout(() => {
              this.visible.passwordAlert = false
              this.$router.push({name: 'logout'})
            }, 5000)
          }, res => {
            if (res.data.data === 'tfa_required') {
              this.visible.tfaRequired = true
            }
            this.loading.btnPassword = false
          })
        })
      },
      changeEmail () {
        this.validateForm('formEmail').then(valid => {
          this.loading.btnEmail = true
          let data = Object.assign({}, this.formEmail)
          if (!this.visible.tfaRequired) {
            delete data.tfa_code
          }
          api.changeEmail(data).then(res => {
            this.loading.btnEmail = false
            this.visible.emailAlert = true
            this.$success('Change email successfully')
            this.$refs.formEmail.resetFields()
          }, res => {
            if (res.data.data === 'tfa_required') {
              this.visible.tfaRequired = true
            }
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  .flex-container {
    justify-content: flex-start;
    .left {
      flex: 1 0;
      width: 250px;
      padding-right: 5%;
    }
    > .middle {
      flex: none;
    }
    .right {
      flex: 1 0;
      width: 250px;
    }
  }
</style>

