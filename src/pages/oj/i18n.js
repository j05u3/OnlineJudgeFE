import Vue from 'vue'
import VueI18n from 'vue-i18n'
// importing library translations
import en from 'iview/src/locale/lang/en-US'
import es from 'iview/src/locale/lang/es-ES'
import zh from 'iview/src/locale/lang/zh-CN'
// importing project translations
import translationEs from './translation_es'
import translationEn from './translation_en'

Vue.use(VueI18n)

const messages = {
  en: Object.assign(translationEn, en),
  es: Object.assign(translationEs, es),
  zh: Object.assign({
    message: '你好',
    userhome: {
      label: {
        solved: '已解决',
        submissions: '已提交',
        score: '总得分',
        listofsolvedproblem: '已解决问题列表'
      },
      message: {
        regenerate: '尝试点击重新生成来刷新题目列表'
      },
      button: {
        regenerate: '重新生成'
      }
    },
    userprofile: {
      menu: {
        profile: '概况',
        account: '账号',
        security: '安全'
      },
      page: {
        profile: {
          label: {
            avatarsetting: '头像设置',
            profilesetting: '个人资料',
            realname: '真实姓名',
            mood: '签名',
            school: '学校',
            blog: '博客',
            major: '专业',
            github: 'Github'
          },
          button: {
            saveall: '保存',
            selectavatar: '拖拽至此，或点击手动选择'
          }
        },
        account: {
          label: {
            changepassword: '修改密码',
            oldpassword: '旧密码',
            newpassword: '新密码',
            confirmnewpassword: '确认新密码',
            changeemail: '修改邮箱',
            currentpassword: '当前密码',
            oldemail: '旧邮箱',
            newemail: '新邮箱'
          },
          button: {
            updatepassword: '更新密码',
            changeemail: '更新邮箱'
          }
        }
      }
    },
    usemenu: {
      home: '主页',
      submissions: '提交',
      settings: '设置',
      management: '管理',
      logout: '退出'
    },
    navbar: {
      home: '首页',
      problems: '题库',
      contests: '竞赛',
      status: '状态',
      rank: '排名',
      about: '关于',
      user: {
        login: '登录',
        register: '注册'
      }
    },
    navbarlist: {
      rank: {
        rank_acm: 'ACM 排名',
        rank_oi: 'OI 排名'
      }
    },
    account: {
      button: {
        login: '登录',
        register: '注册',
        already_register: '已经注册？马上登录',
        no_account: '没有账号？马上注册',
        forget_password: '忘记密码'
      },
      message: {
        empty_username: '请设置用户名',
        empty_email: '请设置邮箱',
        invalid_email: '无效的邮箱地址',
        empty_password: '请设置密码',
        invalid_password_length: '密码长度 6 - 20',
        notmatch_password: '两次输入密码不一致',
        empty_captcha: '请输入验证码'
      }
    },
    page: {
      home: {
        contest_title: '竞赛公告',
        title: '公告',
        button: {
          refresh: '刷新',
          back: '返回'
        },
        message: {
          no_announcement: '暂无公告'
        }
      },
      problem: {
        title: '题目列表',
        button: {
          refresh: '刷新',
          pickone: '抽一道题',
          submit: '提交',
          submitting: '提交中',
          details: '详情',
          close: '关闭'
        },
        message: {
          submitsuccess: '提交成功',
          havesolvedproblem: '你已经解决了该问题',
          havesubmitsolution: '你已经提交了解决方案',
          contesthasended: '比赛已结束'
        },
        switch: {
          tags: '标签'
        },
        taglist: {
          title: '标签列表'
        },
        difficulty: {
          title: '难度',
          all: '全部',
          low: '简单',
          mid: '普通',
          high: '困难'
        },
        table: {
          title: '标题',
          level: '难度',
          total: '统计',
          ac_rate: '通过率',
          tags: '标签'
        },
        label: {
          description: '描述',
          input: '输入',
          output: '输出',
          sample_input: '样例输入',
          sample_output: '样例输出'
        },
        infolabel: {
          information: '题目信息',
          timelimit: '时间限制',
          memorylimit: '内存限制',
          createdby: '创建者',
          level: '难度',
          score: '分数',
          tags: '标签'
        },
        statisticlabel: {
          statistic: '统计图'
        },
        code: {
          language: '语言',
          theme: '主题'
        },
        menu: {
          submissions: '所有提交'
        }
      },
      contests: {
        type: {
          all: '所有'
        },
        title: '竞赛',
        message: {
          no_contest: '暂无竞赛'
        },
        table: {
          startat: '开始时间',
          endat: '结束时间',
          contest_type: '比赛类型',
          rule: '规则',
          creator: '创建者'
        },
        rule: {
          title: '规则',
          all: '全部',
          oi: 'OI',
          acm: 'ACM'
        },
        status: {
          title: '状态',
          all: '全部',
          underway: '进行中',
          not_started: '未开始',
          ended: '已结束'
        },
        menu: {
          problems: '题目',
          announcements: '公告',
          submissions: '提交',
          rankings: '排名',
          overview: '概览'
        }
      },
      status: {
        title: '状态',
        button: {
          refresh: '刷新',
          rejudge: '重判',
          share: '分享',
          unshare: '取消分享'
        },
        table: {
          when: '时间',
          id: '编号',
          status: '状态',
          problem: '题目',
          time: '耗时',
          memory: '内存',
          language: '语言',
          author: '作者',
          option: '选项'
        },
        status: {
          title: '状态'
        },
        switch: {
          all: '全部',
          mine: '我的'
        },
        search: {
          placeholder: '查询作者'
        }
      },
      rank: {
        title_acm: 'ACM 排名列表',
        title_oi: 'OI 排名列表',
        table_acm: {
          user: '用户',
          mood: '签名',
          ac: 'AC',
          total: '统计',
          rating: 'Rating'
        },
        table_oi: {
          user: '用户',
          mood: '签名',
          score: '分数',
          ac: 'AC',
          total: '统计',
          rating: 'Rating'
        }
      }
    }
  }, zh)
}

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'es',
  messages
})
