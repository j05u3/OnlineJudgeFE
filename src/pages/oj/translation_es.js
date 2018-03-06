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
          avatarsetting: 'Ajuste de Avatar',
          profilesetting: 'Ajuste de Perfil',
          realname: 'Nombres',
          mood: 'Estado',
          school: 'Escuela',
          blog: 'Blog',
          major: 'Grado',
          github: 'Github'
        },
        button: {
          saveall: 'Guardar todo',
          selectavatar: 'Arrastre aquí, o click para seleccionar manualmente'
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
    contests: 'Concursos',
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
      rank_acm: 'Ranking ACM',
      rank_oi: 'Ranking IOI'
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
      contest_title: 'Anuncio de concursos',
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
        havesubmitsolution: 'Has enviado una solución',
        contesthasended: 'El concurso ha terminado'
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
        title: 'Título',
        level: 'Dificultad',
        total: 'Total de envíos',
        ac_rate: 'Porcentaje de AC',
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
        level: 'Dificultad',
        score: 'Puntaje',
        tags: 'Etiquetas'
      },
      statisticlabel: {
        statistic: 'Estadísticas'
      },
      code: {
        language: 'Lenguaje',
        theme: 'Tema'
      },
      menu: {
        submissions: 'Envíos'
      }
    },
    contests: {
      type: {
        all: 'Todos los '
      },
      title: 'Concursos',
      message: {
        no_contest: 'No hay concursos'
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
        oi: 'IOI',
        acm: 'ACM'
      },
      status: {
        title: 'Estado',
        all: 'Todas',
        underway: 'Sucediendo ahora',
        not_started: 'Aún no iniciados',
        ended: 'Terminados'
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
      title_acm: 'Ranking ACM',
      title_oi: 'Ranking IOI',
      table_acm: {
        user: 'Usuario',
        mood: 'Estado',
        ac: 'AC',
        total: 'Total',
        rating: 'Rating'
      },
      table_oi: {
        user: 'Usuario',
        mood: 'Estado',
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
