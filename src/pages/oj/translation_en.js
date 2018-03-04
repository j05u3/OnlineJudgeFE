module.exports = {
  message: 'hello',
  userhome: {
    label: {
      solved: 'Solved',
      submissions: 'Submissions',
      score: 'Score',
      listofsolvedproblem: 'List of solved problems'
    },
    message: {
      regenerate: 'If you find the following problem id does not exist, try to click the button.'
    },
    button: {
      regenerate: 'regenerate'
    }
  },
  userprofile: {
    menu: {
      profile: 'Profile',
      account: 'Account',
      security: 'Security'
    },
    page: {
      profile: {
        label: {
          avatarsetting: 'Avatar Setting',
          profilesetting: 'Profile Setting',
          realname: 'Real Name',
          mood: 'Mood',
          school: 'School',
          blog: 'Blog',
          major: 'Major',
          github: 'Github'
        },
        button: {
          saveall: 'Save All',
          selectavatar: 'Drop here, or click to select manually'
        }
      },
      account: {
        label: {
          changepassword: 'Change Password',
          oldpassword: 'Old Password',
          newpassword: 'New Password',
          confirmnewpassword: 'Confirm New Password',
          changeemail: 'Change Email',
          currentpassword: 'Current Password',
          oldemail: 'Old Email',
          newemail: 'New Email'
        },
        button: {
          updatepassword: 'Update Password',
          changeemail: 'Change Email'
        }
      }
    }
  },
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
  account: {
    button: {
      login: 'Login',
      register: 'Register',
      already_register: 'Already registed? Login now!',
      no_account: 'No account? Register now!',
      forget_password: 'Forget Password'
    },
    message: {
      empty_username: 'username is required',
      empty_email: 'email is required',
      invalid_email: 'email is not a valid email',
      empty_password: 'password is required',
      invalid_password_length: 'password must be between 6 and 20 characters',
      notmatch_password: 'password does not match',
      empty_captcha: 'captcha is required'
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
      message: {
        submitsuccess: 'Submitted successfully',
        havesolvedproblem: 'You have solved the problem',
        havesubmitsolution: 'You have submitted a solution.',
        contesthasended: 'Contest has ended'
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
        language: 'Lenguaje',
        theme: 'Theme'
      },
      menu: {
        submissions: 'Submissions'
      }
    },
    contests: {
      type: {
        all: 'All'
      },
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
  },
  about: {
    judger: {
      title: 'Compiler & Judger',
      result_explanation: 'Sobre el resultado'
    }
  }
}
