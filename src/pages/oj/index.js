import 'babel-polyfill'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from '@/store'
import VueClipboard from 'vue-clipboard2'
import en from 'iview/src/locale/lang/en-US'
import zh from 'iview/src/locale/lang/zh-CN'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import Panel from '@oj/components/Panel.vue'
import VerticalMenu from '@oj/components/verticalMenu/verticalMenu.vue'
import VerticalMenuItem from '@oj/components/verticalMenu/verticalMenu-item.vue'
import '@/styles/index.less'

import filters from '@/utils/filters.js'

import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint'

import hljs from 'highlight.js/lib/highlight'
import cpp from 'highlight.js/lib/languages/cpp'
import python from 'highlight.js/lib/languages/python'
import java from 'highlight.js/lib/languages/java'
import 'highlight.js/styles/atom-one-light.css'

hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('java', java)
hljs.registerLanguage('python', python)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// highlight.js
Vue.directive('highlight', {
  deep: true,
  bind: function (el, binding) {
    // on first bind, highlight all targets
    Array.from(el.querySelectorAll('code')).forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function (el, binding) {
    // after an update, re-fill the content and then highlight
    Array.from(el.querySelectorAll('code')).forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  }
})

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(iView)
Vue.use(VueClipboard)

Vue.component('ECharts', ECharts)
Vue.component(VerticalMenu.name, VerticalMenu)
Vue.component(VerticalMenuItem.name, VerticalMenuItem)
Vue.component(Panel.name, Panel)

const messages = {
  en: Object.assign({
    message: 'hello',
    usemenu: {
      home: 'Home',
      submissions: 'Submissions',
      settings: 'Settings',
      management: 'Management',
      logout: 'Logout'
    },
    navbar: {
      home: 'Home',
      problems: 'Problems',
      contests: 'Contest',
      status: 'Status',
      rank: 'Rank',
      about: 'About',
      user: {
        login: 'Login',
        register: 'Register'
      }
    },
    navbarlist: {
      rank: {
        rank_acm: 'ACM Rank',
        rank_oi: 'OI Rank'
      }
    },
    page: {
      home: {
        contest_title: 'Contest Announcements',
        title: 'Announcements',
        button: {
          refresh: 'Refresh',
          back: 'Back'
        },
        message: {
          no_announcement: 'No announcements'
        }
      },
      problem: {
        title: 'Problem List',
        button: {
          refresh: 'Reset',
          pickone: 'Pick one',
          submit: 'Submit',
          submitting: 'Submitting',
          details: 'Details',
          close: 'Close'
        },
        switch: {
          tags: 'Tags'
        },
        taglist: {
          title: 'Tags'
        },
        difficulty: {
          title: 'Difficulty',
          all: 'All',
          low: 'Low',
          mid: 'Mid',
          high: 'High'
        },
        table: {
          title: 'Title',
          level: 'Level',
          total: 'Total',
          ac_rate: 'AC Rate',
          tags: 'Tags'
        },
        label: {
          description: 'Description',
          input: 'Input',
          output: 'Output',
          sample_input: 'Sample Input',
          sample_output: 'Sample Output'
        },
        infolabel: {
          information: 'Information',
          timelimit: 'Time Limit',
          memorylimit: 'Memory Limit',
          createdby: 'Created By',
          level: 'Level',
          score: 'Score',
          tags: 'Tags'
        },
        statisticlabel: {
          statistic: 'Statistic'
        },
        code: {
          language: 'Language',
          theme: 'Theme'
        },
        menu: {
          submissions: 'Submissions'
        }
      },
      contests: {
        title: 'Contests',
        message: {
          no_contest: 'No contest'
        },
        table: {
          startat: 'StartAt',
          endat: 'EndAt',
          contest_type: 'ContestType',
          rule: 'Rule',
          creator: 'Creator'
        },
        rule: {
          title: 'Rule',
          all: 'All',
          oi: 'OI',
          acm: 'ACM'
        },
        status: {
          all: 'All',
          underway: 'Underway',
          not_started: 'Not Started',
          ended: 'Ended'
        },
        menu: {
          problems: 'Problems',
          announcements: 'Announcements',
          submissions: 'Submissions',
          rankings: 'Rankings',
          overview: 'Overview'
        }
      },
      status: {
        title: 'Status',
        button: {
          refresh: 'Refresh',
          rejudge: 'Rejudge',
          share: 'Share',
          unshare: 'UnShare'
        },
        table: {
          when: 'When',
          id: 'ID',
          status: 'Status',
          problem: 'Problem',
          time: 'Time',
          memory: 'Memory',
          language: 'Language',
          author: 'Author',
          option: 'Option'
        },
        status: {
          title: 'Status'
        },
        switch: {
          all: 'All',
          mine: 'Mine'
        },
        search: {
          placeholder: 'Search Author'
        }
      },
      rank: {
        title_acm: 'ACM Ranklist',
        title_oi: 'OI Ranklist',
        table_acm: {
          user: 'User',
          mood: 'Mood',
          ac: 'AC',
          total: 'Total',
          rating: 'Rating'
        },
        table_oi: {
          user: 'User',
          mood: 'Mood',
          score: 'Score',
          ac: 'AC',
          total: 'Total',
          rating: 'Rating'
        }
      }
    }
  }, en),
  zh: Object.assign({
    message: '你好',
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
          mood: 'Mood',
          ac: 'AC',
          total: '统计',
          rating: 'Rating'
        },
        table_oi: {
          user: '用户',
          mood: 'Mood',
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
const i18n = new VueI18n({
  locale: 'zh',
  messages
})

// 注册全局消息提示
Vue.prototype.$Message.config({
  duration: 2
})
Vue.prototype.$error = (s) => Vue.prototype.$Message.error(s)
Vue.prototype.$info = (s) => Vue.prototype.$Message.info(s)
Vue.prototype.$success = (s) => Vue.prototype.$Message.success(s)

new Vue(Vue.util.extend({i18n, router, store}, App)).$mount('#app')
