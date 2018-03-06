<template>
  <div id="header">
    <Menu theme="light" mode="horizontal" @on-select="handleRoute" :active-name="activeMenu" class="oj-menu">
      <!--<div class="logo"><span>{{website.website_name}}</span></div>-->
      <div class="logo">
        <img style="vertical-align:middle"
          alt="Universidad Nacional de Ingeniería"
          src="../../../assets/logoeck.png"
          height="60"
          />
      </div>
      <Menu-item name="/">
        <Icon type="home"></Icon>
        {{ $t("navbar.home") }}
      </Menu-item>
      <Menu-item name="/problems">
        <Icon type="ios-keypad"></Icon>
        {{ $t("navbar.problems") }}
      </Menu-item>
      <Menu-item name="/contests">
        <Icon type="trophy"></Icon>
        {{ $t("navbar.contests") }}
      </Menu-item>
      <Menu-item name="/status">
        <Icon type="ios-pulse-strong"></Icon>
        {{ $t("navbar.status") }}
      </Menu-item>
      <Submenu name="">
        <template slot="title">
          <Icon type="podium"></Icon>
          {{ $t("navbar.rank") }}
        </template>
        <Menu-item name="/acm-rank">
          {{ $t('navbarlist.rank.rank_acm') }}
        </Menu-item>
        <Menu-item name="/oi-rank">
          {{ $t('navbarlist.rank.rank_oi') }}
        </Menu-item>
      </Submenu>
      <Submenu name="">
        <template slot="title">
          <Icon type="information-circled"></Icon>
          {{ $t("navbar.about") }}
        </template>
        <Menu-item name="/about">
          Judger
        </Menu-item>
        <Menu-item name="/FAQ">
          FAQ
        </Menu-item>
      </Submenu>
      <template v-if="!isAuthenticated">
        <div class="btn-menu">
          <Button class="btn-language"
                  type="ghost"
                  shape="circle"
                  @click="changeLanguage()">{{ language }}
          </Button>
          <Button type="ghost"
                  ref="loginBtn"
                  shape="circle"
                  @click="handleBtnClick('login')">{{ $t("navbar.user.login") }}
          </Button>
          <Button v-if="website.allow_register"
                  type="ghost"
                  shape="circle"
                  @click="handleBtnClick('register')"
                  style="margin-left: 5px;">{{ $t("navbar.user.register") }}
          </Button>
        </div>
      </template>
      <template v-else>
        <div class="btn-menu">
          <Button class="btn-language"
                  type="ghost"
                  shape="circle"
                  @click="changeLanguage()">{{ language }}
          </Button>
          <Dropdown class="drop-menu" @on-click="handleRoute" placement="bottom" trigger="click">
          <Button type="text" class="drop-menu-title">{{ user.username }}
            <Icon type="arrow-down-b"></Icon>
          </Button>
          <Dropdown-menu slot="list">
            <Dropdown-item name="/user-home">{{ $t('usemenu.home') }}</Dropdown-item>
            <Dropdown-item name="/status?myself=1">{{ $t('usemenu.submissions') }}</Dropdown-item>
            <Dropdown-item name="/setting/profile">{{ $t('usemenu.settings') }}</Dropdown-item>
            <Dropdown-item v-if="isAdminRole" name="/admin">{{ $t('usemenu.management') }}</Dropdown-item>
            <Dropdown-item divided name="/logout">{{ $t('usemenu.logout') }}</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
        </div>
      </template>
    </Menu>
    <Modal v-model="modalVisible" :width="400">
      <div slot="header" class="modal-title">Welcome to {{website.website_name_shortcut}}</div>
      <component :is="modalStatus.mode" v-if="modalVisible"></component>
      <div slot="footer" style="display: none"></div>
    </Modal>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import login from '@oj/views/user/Login'
  import register from '@oj/views/user/Register'

  export default {
    components: {
      login,
      register
    },
    data () {
      return {
        language: 'es'
      }
    },
    mounted () {
      this.getProfile()
    },
    methods: {
      ...mapActions(['getProfile', 'changeModalStatus']),
      handleRoute (route) {
        if (route && route.indexOf('admin') < 0) {
          this.$router.push(route)
        } else {
          window.open('/admin/')
        }
      },
      handleBtnClick (mode) {
        this.changeModalStatus({
          visible: true,
          mode: mode
        })
      },
      changeLanguage () {
        if (this.language === 'es') {
          this.$i18n.locale = 'en'
          this.language = 'en'
        } else if (this.language === 'en') {
          this.$i18n.locale = 'es'
          this.language = 'es'
        }
      }
    },
    computed: {
      ...mapGetters(['website', 'modalStatus', 'user', 'isAuthenticated', 'isAdminRole']),
      // 跟随路由变化
      activeMenu () {
        return '/' + this.$route.path.split('/')[1]
      },
      modalVisible: {
        get () {
          return this.modalStatus.visible
        },
        set (value) {
          this.changeModalStatus({visible: value})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  #header {
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    .oj-menu {
      background: #fdfdfd;
    }

    .logo {
      margin-left: 2%;
      margin-right: 2%;
      font-size: 20px;
      float: left;
      line-height: 60px;
    }

    .drop-menu {
      float: right;
      margin-right: 40px;
      &-title {
        font-size: 18px;
      }
    }
    .btn-menu {
      font-size: 16px;
      float: right;
      margin-right: 10px;
    }
    .btn-language {
      margin-right: 10px;
    }
  }

  .modal {
    &-title {
      font-size: 18px;
      font-weight: 600;
    }
  }
</style>
