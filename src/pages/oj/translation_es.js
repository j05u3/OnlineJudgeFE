module.exports = {
  message: 'hola',
  userhome: {
    label: {
      solved: 'Resuelto',
      submissions: 'Envíos',
      score: 'Puntaje',
      listofsolvedproblem: 'Lista de problemas resueltos'
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
      profile: 'Perfil',
      account: 'Cuenta',
      security: 'Seguridad'
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
          saveall: 'Guardar todo',
          selectavatar: 'Drop here, or click to select manually'
        }
      },
      account: {
        label: {
          changepassword: 'Cambiar contraseña',
          oldpassword: 'Contraseña anterior',
          newpassword: 'Nueva contraseña',
          confirmnewpassword: 'Confirmar nueva contraseña',
          changeemail: 'Cambiar correo',
          currentpassword: 'Contraseña actual',
          oldemail: 'Correo anterior',
          newemail: 'Nuevo correo'
        },
        button: {
          updatepassword: 'Actualizar contraseña',
          changeemail: 'Cambiar correo'
        }
      }
    }
  },
  usemenu: {
    home: 'Inicio',
    submissions: 'Envíos',
    settings: 'Configuración',
    management: 'Administración',
    logout: 'Cerrar sesión'
  },
  navbar: {
    home: 'Inicio',
    problems: 'Problemas',
    contests: 'Rondas',
    status: 'Envíos',
    rank: 'Rankings',
    about: 'Acerca de',
    user: {
      login: 'Iniciar sesión',
      register: 'Registrarse'
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
      login: 'Iniciar sesión',
      register: 'Registrarse',
      already_register: 'Ya estás registrado? Inicia sesión ahora!',
      no_account: 'No tienes cuenta? Regístrate ahora!',
      forget_password: 'Olvidé mi contraseña'
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
      contest_title: 'Anuncios de la ronda',
      title: 'Anuncios',
      button: {
        refresh: 'Actualizar',
        back: 'Regresar'
      },
      message: {
        no_announcement: 'No hay anuncios'
      }
    },
    problem: {
      title: 'Lista de problemas',
      button: {
        refresh: 'Actualizar',
        pickone: 'Escoger uno al azar',
        submit: 'Enviar',
        submitting: 'Enviando',
        details: 'Detalles',
        close: 'Cerrar'
      },
      message: {
        submitsuccess: 'Enviado exitosamente',
        havesolvedproblem: 'Has resuelto el problema!! 🙂',
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
        title: 'Dificultad',
        all: 'Todo',
        low: 'Baja',
        mid: 'Media',
        high: 'Alta'
      },
      table: {
        title: 'Title',
        level: 'Level',
        total: 'Total',
        ac_rate: 'AC Rate',
        tags: 'Tags',
        good_luck: 'Buena suerte!'
      },
      label: {
        description: 'Descripción',
        input: 'Entrada',
        output: 'Salida',
        sample_input: 'Entrada de ejemplo',
        sample_output: 'Salida de ejemplo'
      },
      infolabel: {
        information: 'Información',
        timelimit: 'Límite de tiempo',
        memorylimit: 'Límite de memoria',
        createdby: 'Creado por',
        level: 'Nivel',
        score: 'Puntaje',
        tags: 'Etiquetas'
      },
      statisticlabel: {
        statistic: 'Statistic'
      },
      code: {
        language: 'Lenguaje',
        theme: 'Theme'
      },
      menu: {
        submissions: 'Envíos'
      }
    },
    contests: {
      type: {
        all: 'Todas las '
      },
      title: 'Rondas',
      message: {
        no_contest: 'No hay rondas'
      },
      table: {
        startat: 'StartAt',
        endat: 'EndAt',
        contest_type: 'ContestType',
        rule: 'Rule',
        creator: 'Creator'
      },
      rule: {
        title: 'Estilo (reglas)',
        all: 'Todos',
        oi: 'OI',
        acm: 'ACM'
      },
      status: {
        title: 'Estado',
        all: 'Todas',
        underway: 'Sucediendo ahora',
        not_started: 'Aún no iniciadas',
        ended: 'Terminadas'
      },
      menu: {
        problems: 'Problemas',
        announcements: 'Anuncios',
        submissions: 'Envíos',
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
        when: 'Cuándo',
        id: 'ID',
        status: 'Estado',
        problem: 'Problema',
        time: 'Tiempo',
        memory: 'Memoria',
        language: 'Lenguaje',
        author: 'Autor',
        option: 'Opción'
      },
      status: {
        title: 'Estado'
      },
      switch: {
        all: 'Todo',
        mine: 'Míos'
      },
      search: {
        placeholder: 'Buscar autor'
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
      title: 'Compilador y Juez',
      result_explanation: 'Sobre el resultado'
    }
  }
}
