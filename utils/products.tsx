//Apartado de Productos

export const products = [
  {
    id: "888437b38c44d52b9542e340",
    name: "Harry Potter y El Cáliz de Fuego",
    description: 
      "Harry Potter y la Orden del Fénix (título original en inglés: Harry Potter and the Order of the Phoenix), es el quinto libro de la serie Harry Potter, escrita por la autora británica J. K. Rowling en el 2003. Los sucesos comienzan pocas semanas después de lo ocurrido en Harry Potter y el cáliz de fuego, y narra la reacción del Ministerio de Magia frente al anuncio del retorno del peligroso brujo lord Voldemort. El ministro Cornelius Fudge emprende una celosa vigilancia sobre el colegio Hogwarts, ya que está convencido de que el director Albus Dumbledore ha inventado la historia sobre la resurrección de aquel mago tenebroso para causar inestabilidad y tomar el poder. Con esta reacción, Voldemort y sus mortífagos tienen luz verde para actuar en las sombras y preparar sus fuerzas para destruir el equilibrio de la comunidad mágica y adueñarse de la misma. Este libro marca el inicio definitivo de la Segunda Guerra Mágica, conflicto que prosigue hasta la última novela de la heptalogía: Harry Potter y las reliquias de la Muerte.",
    price: 24.99,
    brand: "J.k. Rowling",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Harry Potter y El Cáliz de Fuego.png",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "¡Me encanta Hogwarts!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Henry",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Slytherin hasta la muerte",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Alison",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "887437b38c44d52b9542e340",
    name: "Harry Potter y el Misterio del Príncipe",
    description: 
      "Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Elegido capitán del equipo de quidditch, los ensayos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco. A pesar de los férreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarían a muerte: El único con poder para vencer al Señor Tenebroso se acerca... Uno de los dos debe morir a manos del otro, pues ninguno de los dos podrá vivir mientras siga el otro con vida El anciano director solicitará la ayuda de Harry y juntos emprenderán peligrosos viajes para intentar debilitar al enemigo, para lo cual el joven mago contará con un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Príncipe Mestizo.",
    price: 24.99,
    brand: "J.k. Rowling",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Harry Potter y el Misterio del Príncipe.png",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "¡Me encanta Hogwarts!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Henry",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Griffindor siempre manda",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Nick",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Slytherin hasta la muerte",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Alison",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Slytherin tiene puros perdedores y animales",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Nick",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Nosotros al menos hemos ganado torneos",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Alison",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888437b33c44d52b9542e340",
    name: "Harry Potter y el Prisionero de Azkaban",
    description: 
      "Harry Potter y el prisionero de Azkaban es la  tercera novela de la ya clásica serie fantástica de la autora británica J.K. Rowling. Bienvenido al autobús noctámbulo, transporte de emergencia para el  brujo abandonado a su suerte. Levante la varita, suba a bordo y lo llevaremos a donde quiera. Cuando el autobús noctámbulo irrumpe en una calle oscura y frena con  fuertes chirridos delante de Harry, comienza para él un nuevo curso en  Hogwarts, lleno de acontecimientos extraordinarios. Sirius Black,  asesino y seguidor de lord Voldemort, se ha fugado, y dicen que va en  busca de Harry. En su primera clase de Adivinación, la profesora  Trelawney ve un augurio de muerte en las hojas de té de la taza de  Harry... Pero quizá lo más aterrador sean los dementores que patrullan  por los jardines del colegio, capaces de sorberte el alma con su beso...",
    price: 24.99,
    brand: "J.k. Rowling",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Harry Potter y el Prisionero de Azkaban.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "¡Me encanta Hogwarts!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Henry",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Griffindor siempre manda",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Nick",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888437l38c44d52b9542e340",
    name: "Harry Potter y la Piedra Filosofal",
    description: 
      "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de Quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente: ¡es un verdadero mago!",
    price: 24.99,
    brand: "J.k. Rowling",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Harry Potter y la Piedra Filosofal.png",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "¡Me encanta Hogwarts!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Henry",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Griffindor siempre manda",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Nick",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "808437b38c44d52b9542e340",
    name: "Harry Potter y la Orden del Fénix",
    description: 
      "Harry Potter y la Orden del Fénix (título original en inglés: Harry Potter and the Order of the Phoenix), es el quinto libro de la serie Harry Potter, escrita por la autora británica J. K. Rowling en el 2003. Los sucesos comienzan pocas semanas después de lo ocurrido en Harry Potter y el cáliz de fuego, y narra la reacción del Ministerio de Magia frente al anuncio del retorno del peligroso brujo lord Voldemort. El ministro Cornelius Fudge emprende una celosa vigilancia sobre el colegio Hogwarts, ya que está convencido de que el director Albus Dumbledore ha inventado la historia sobre la resurrección de aquel mago tenebroso para causar inestabilidad y tomar el poder. Con esta reacción, Voldemort y sus mortífagos tienen luz verde para actuar en las sombras y preparar sus fuerzas para destruir el equilibrio de la comunidad mágica y adueñarse de la misma. Este libro marca el inicio definitivo de la Segunda Guerra Mágica, conflicto que prosigue hasta la última novela de la heptalogía: Harry Potter y las reliquias de la Muerte.",
    price: 24.99,
    brand: "J.k. Rowling",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Harry Potter y la Orden del Fénix.png",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "¡Me encanta Hogwarts!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Henry",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Griffindor siempre manda",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Nick",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888437b38c44d52b9542g340",
    name: "Harry Potter y la Cámara Secreta",
    description: 
      "Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia. Sin embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador. Pero ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien había abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario.",
    price: 24.99,
    brand: "J.k. Rowling",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Harry Potter y la Camara Secreta.png",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "¡Me encanta Hogwarts!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Henry",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Griffindor siempre manda",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Nick",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888437b38c44d52z9542e340",
    name: "Harry Potter y las Reliquias de la Muerte",
    description: 
      "La fecha se acerca. Cuando cumpla diecisiete años, Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado duelo a muerte con lord Voldemort es inminente, y la casi imposible misión de encontrar y destruir los restantes Horrocruxes, más urgente que nunca. Ha llegado la hora final, el momento de tomar decisiones difíciles. Harry debe abandonar la calidez de La Madriguera para seguir sin miedo ni vacilaciones el inexorable sendero trazado para él. Consciente de lo mucho que está en juego, tendrá que buscar en su interior la fuerza necesaria que lo impulse en la vertiginosa carrera para enfrentarse a su destino.",
    price: 24.99,
    brand: "J.k. Rowling",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Harry Potter y las Reliquias de la Muerte.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "¡Me encanta Hogwarts!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Henry",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Griffindor siempre manda",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Nick",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "880437b38c44d52z9542e340",
    name: "Heartstopper",
    description: 
      "Dos chicos se conocen. Se hacen amigos. Se enamoran. ¿Por qué nos empeñamos en hacer complicadas las emociones más sencillas? Esta historia de amor entre dos chicos, uno de ellos declaradamente homosexual y el otro en vías de autodescubrimiento, nos recordará que hay primeros amores frágiles como el cristal y memorables como el diamante. Con los titubeos propios de cualquier amor adolescente, Heartstopper responde a la manera de sentir de los jóvenes reales, con una visión abierta, natural y sensible sobre el amor y la identidad sexual, sin perder nunca la delicadeza y la emoción.",
    price: 19.99,
    brand: "Alice Oseman",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Heartstopper.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "¡Hey, ese libro trata sobre mi!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Charlie Spring",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "¡Necesito un Nick Nelson en mi vida, dios tiene sus favoritos!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Andrés",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188437b38c44d52z9542e340",
    name: "Red, White and Blue Royale",
    description: 
      "Alex Claremont-Diaz es el hijo de la primera mujer presidenta de Estados Unidos. Durante una visita al Reino Unido, tiene un altercado con Henry, un príncipe británico. Alex y Henry tienen que fingir ser amigos para evitar una crisis diplomática, pero esa tregua desencadena algo más profundo.",
    price: 39.99,
    brand: "Casey McQuiston",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Red White and Blue Royal.png",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "¡La realeza suena complicado!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Charlie",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "¡Necesito un Henry en mi vida!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Andrés",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188437b34c44d52z9542e340",
    name: "Bendito WhatsApp",
    description: 
      "En las bulliciosas calles de Londres y los misteriosos paisajes de Escocia, Danny Owen y Jaden Phoenix se encuentran atrapados en una danza digital. Sus corazones laten al ritmo de los mensajes que cruzan a través de la pantalla de sus teléfonos, mientras la distancia física se convierte en un obstáculo insuperable. Danny, un joven soñador con una pasión por la poesía y una risa contagiosa, vive en la vibrante ciudad de Londres. Jaden, un artista enigmático con ojos del color del whisky escocés, reside en un pequeño pueblo al norte de Escocia, rodeado de colinas verdes y leyendas antiguas. Ambos se conocen a través de WhatsApp, ya que la hermana de Jaden, Zeina, es la mejor amiga de Danny. Y lo que comienza como una simple conversación se transforma en una conexión profunda. A medida que comparten sus pensamientos, sueños y secretos más oscuros, descubren que el amor no conoce fronteras ni límites geográficos. El destino los lleva a encontrarse cara a cara en un viaje a Escocia. ¿Podrán Danny y Jaden superar los obstáculos y construir un puente entre sus dos mundos? ¿Será su amor lo suficientemente fuerte como para resistir la prueba del tiempo y la distancia? Bendito WhatsApp es una historia de romance a distancia, donde las palabras se convierten en abrazos virtuales y los corazones se entrelazan a través de los emoticonos. Una oda al amor moderno y a la valentía de aquellos que se atreven a amar más allá de las fronteras físicas.",
    price: 19.99,
    brand: "Tsuki Arunji",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Bendito WhatsApp.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment:
          "Me gustaría tener alguien como Jaden en mi vida",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Andrés",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6299b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment:
          "El pobre Ethan siempre queda solo jajaja.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Fabian",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "¡Me encanta la relación que tienen Troy y Arien, es muy lindo!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Matthew",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "182437b38c44d52z9542e340",
    name: "Mi Nombre es Allen",
    description: 
      "Allen Roberts es un adolescente que tiene que lidiar con ciertos problemas ya que tiene dos padres que son famosos y por si fuera poco, ambos padres son del mismo sexo. No es nada fácil para él así que tiene que buscar respuestas y continuar su vida. ¿Tener dos padres del mismo sexo es fácil? Claro, tengo la vida más normal del mundo.",
    price: 19.99,
    brand: "Alexis Vargas",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Mi Nombre es Allen.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment:
          "¡Es una historia bastante bonita, la recomiendo!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Dylan",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Me siento identificado con la historia de Allen, es increíble.",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "182435b38c44d52z9542e340",
    name: "Sentimientos Adolescentes",
    description: 
      "A veces, es difícil comprender las emociones, en especial cuando se trata de los adolescentes, cuesta bastante ponerse en el lugar de la otra persona y poder ayudarla. Los padres estrictos suelen estar presentes en la mayoría de estos casos, al igual que la depresión, ansiedad y el temor o preocupación de la opinión de la sociedad. Vivir a diario con una lucha constante en tu interior que te detiene de hacer cosas que te hagan feliz, no poder tomar una decisión en una situación crucial y agobiarte por todo sin alguna razón y sentir que caes en un pozo del cual es imposible salir.",
    price: 19.99,
    brand: "Arcadiboy Blue",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Sentimientos Adolescentes.png",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment:
          "Me dolió bastante leer algunas partes del libro, Andrés sufre bastante...",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6099b184b0e9a8c8709821d3",
          name: "Daniel",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "Andrés me trae muchos recuerdos, es muy curioso todo lo que siente...",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6478af156bad4917456e6e1e",
          name: "Gabrielle",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "132437b38c44d52z9542e340",
    name: "Los Juegos de Moya",
    description: 
      "En los confines del reino de Eldoria, donde los bosques susurran secretos y las montañas ocultan tesoros olvidados, vive Moya, un intrépido aventurero cuya espada y escudo son extensiones de su alma. Su cabello oscuro ondea al viento mientras cabalga hacia la próxima hazaña, y su mirada está llena de la promesa de aventuras inexploradas. Moya no está solo en su búsqueda de gloria y descubrimientos. A su lado, dos compañeros leales lo acompañan en cada paso de su viaje: Gareth el Audaz, un guerrero de corazón noble y risueño. Bajo su fachada valiente, guarda secretos que podrían cambiar el destino de todo el reino. y Bran el Sabio, un erudito con una barba espesa y una mente afilada. Bran lleva pergaminos y mapas en su mochila, y su conocimiento de los antiguos textos y leyendas es inigualable. Siempre está un paso adelante, descifrando jeroglíficos y descubriendo pistas ocultas. Pero su sabiduría también lo atormenta, y su pasado lo persigue como una sombra. Juntos, Moya, Gareth y Bran se sumergen en los misterios de Eldoria. Desde las catacumbas embrujadas hasta las cimas nevadas de las Montañas del Olvido, enfrentan criaturas mitológicas, resuelven acertijos ancestrales y desentrañan conspiraciones que amenazan con desestabilizar el reino. Pero hay algo más en juego que la fama y la gloria. Una profecía antigua habla de un artefacto perdido, los legendarios Juegos de Moya, que otorgan poderes inimaginables a quien los complete. Moya y sus compañeros se embarcan en una carrera contra el tiempo, mientras fuerzas oscuras intentan detenerlos. ¿Lograrán desentrañar los secretos de los Juegos de Moya antes de que caigan en manos equivocadas? ¿Qué sacrificios estarán dispuestos a hacer por la verdad y la amistad? En esta épica aventura, la espada chocará contra la magia, y los corazones se forjarán en la fragua de la valentía. Nota del autor: A veces, los verdaderos tesoros no están hechos de oro, sino de lazos indestructibles.",
    price: 19.99,
    brand: "Arcadiboy Blue",
    category: "Aventura",
    inStock: true,
    images: [
      {
        image:
          "/img/Los Juegos de Moya.jpeg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment:
          "¡Me encantó la historia, Moya habilidades muy increíbles y complementa muy bien con sus compañeros!",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Rafael Pérez",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6099b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 3,
        comment:
          "Gareth es muy aburrido y Bran le quita acción a la trama. De resto todo bien.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Edgar Quiñones",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment: "¡El final es algo completamente inolvidable!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Juan De Ponte",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188437b38c44d52b9542e340",
    name: "A Cuerpo de Gato",
    description: 
      "Un gato es un gato, es un gato... diría una sabia mujer, pero Nana no es un gato cualquiera. Tiene el pelo blanco y la cola en forma de siete, le gustan los filetes de cerdo empanados y los platos a base de pollo y salmón; lleva las uñas afiladas y la mirada atenta, pero hay más: Nana entiende el lenguaje de los humanos y tiene opiniones muy suyas a propósito de casi todo. Nació en la calle y estaba acostumbrado a dormir encima del capó de una furgoneta plateada, hasta que un buen día un joven delgado y alto se le acercó sonriendo, y desde entonces fueron inseparables. Satoru y Nana vivieron juntos durante cinco años; sin embargo, ahora ha llegado el momento de separarse y de buscar un nuevo dueño para él. Empieza el viaje: Nana verá por primera vez el mar y los campos sembrados de hierba alta, vivirá las emociones más hondas de los hombres y mujeres que lo rodean, y al final este gato callejero será también un gato muy nuestro gracias a la ternura y al sentido del humor de Hiro Arikawa.",
    price: 29.99,
    brand: "Hiro Arikawa",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/A cuerpo de gato.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "288437b38c44d52b9542e340",
    name: "A través de la lluvia",
    description: 
      "Apolo Hidalgo está emocionado por enfrentarse a una nueva etapa de su vida: la universidad. Su sueño es estudiar psicología y ayudar a los demás. Sin embargo, esa ilusión se rompe cuando es atacado y golpeado en un callejón durante una noche lluviosa e, irónicamente, así es como la conoce a ella. A Rain. La chica del paraguas lo salva, y se le queda grabada en la memoria. Cuando finalmente se vuelven a encontrar, Apolo queda todavía más prendado de Rain y, a través de ella, conoce a Xan, el dueño de un café donde pasan el rato. A medida que los tres se conocen, Apolo se dará cuenta que Rain y Xan ocultan mucho más de lo que uno se puede imaginar. Apolo es un chico lleno de buenas intenciones, pero eso, en la vida, no es garantía de nada… especialmente en el amor.",
    price: 29.99,
    brand: "Ariana Godoy",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/A traves de la Lluvia.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "488437b38c44d52b9542e340",
    name: "A través de mi Ventana",
    description: 
      "¡Llega por fin la novela juvenil que está triunfando en Wattpad! Raquel lleva toda la vida loca por Ares, su atractivo y misterioso vecino. Lo observa sin ser vista desde su ventana y es que, muy a su pesar, no han intercambiado ni una triste palabra. Lo que Raquel no sabe es que eso está a punto de cambiar… Ares comenzará a cruzarse en su camino hasta en los lugares más inesperados y descubrirá que, en realidad, Raquel no es la niña inocente que creía. Ahora, Raquel tiene muy claro su objetivo: conseguir que Ares se enamore de ella. Por supuesto, no está dispuesta a perderlo todo por el camino, y mucho menos a sí misma… El éxito internacional de Ariana Godoy en Wattpad: un magnético juego de seducción que te tendrá atrapado en sus redes, ahora con nuevas escenas sobre los secretos de Ares.",
    price: 29.99,
    brand: "Ariana Godoy",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/A traves de mi ventana.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "588437b38c44d52b9542e340",
    name: "A través de Ti",
    description: 
      "¿Qué se siente vivir con tres chicos hermosos? Eres tan afortunada. Que envidia. Vivir con esas bellezas, que privilegio. ¿Cómo puedes vivir con ellos? ¿Te has tirado alguno? ¿Podrías conseguirme su número de celular? Eso es solo un poco de lo que he tenido que lidiar desde que los chicos Hidalgo crecieron y se convirtieron en el sueño húmedo de todas las chicas de este lugar. Artemis, Ares y Apolo Hidalgo son los responsables de muchos suspiros de chicas en las calles y con los que crecí, aunque no seamos familia. Muchas personas me creen afortunada, pero están tan equivocados sobre mi vida, no saben mi historia, no todo es color de rosa en la vida de una chica como yo. Nada es tan fácil y simple en la vida de alguien como yo.",
    price: 20.99,
    brand: "Ariana Godoy",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/A traves de ti.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "688437b38c44d52b9542e340",
    name: "Abyss",
    description: 
      "Un equipo de científicos de una instalación petrolífera es contratado por la marina norteamericana para llevar a cabo la operación de rescate de un submarino nuclear atrapado, en extrañas circunstancias, en el fondo del mar, justamente al borde de una grieta abisal de varios kilómetros de profundidad. Un grupo de las fuerzas especiales del ejército acompañará a los científicos. Muy pronto éstos últimos empiezan a sospechar que lo que está sucediendo en las profundidades abisales es algo tan extraño que, en principio, escapa a su comprensión.",
    price: 19.99,
    brand: "Orson Scott Card",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/Abyss.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "788437b38c44d52b9542e340",
    name: "Animales Fantásticos y Dónde Encontrarlos",
    description: 
      "Explora las maravillas del mundo mágico con este suntuoso compendio de animales  fantásticos, una obra del celebre magizoólogo Newt Scamander. Este compendio de criaturas mágicas elaborado por Newt Scamander ha  deleitado a generaciones enteras de magos, convirtiendose en un  clásico  del genero. Ahora, esta edición actualizada con un prólogo de Newt, se  revelan seis nuevos animales apenas conocidos fuera  de la comunidad  mágica. Así, los muggles tendrán tambien la oportunidad de descubrir dónde vive el thunderbird, que come el puffskein y por que es conveniente apartar los objetos brillantes de la vista de los escarbatos.",
    price: 49.99,
    brand: "J.k. Rowling",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Animales Fantasticos y donde encontrarlos.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "088437b38c44d52b9542e340",
    name: "El Resplandor",
    description: 
      "REDRUM. Esa es la palabra que Danny había visto en el espejo. Y aunque no sabía leer, entendió que era un mensaje de horror. Danny tenía cinco años. Y a esa edad pocos niños saben que los espejos invierten las imágenes y menos aún saben diferenciar entre realidad y fantasía. Pero Danny tenía pruebas de que sus fantasías relacionadas con el resplandor del espejo acabarían cumpliéndose: REDRUM… MURDER, asesinato. Pero su padre necesitaba aquel trabajo en el hotel. Danny sabía que su madre pensaba en el divorcio y que su padre se obsesionaba con algo muy malo, tan malo como la muerte y el suicidio. Sí, su padre necesitaba aceptar la propuesta de cuidar de aquel hotel de lujo de más de cien habitaciones, aislado por la nieve durante seis meses. Hasta el deshielo iban a estar solos. ¿Solos?...",
    price: 39.99,
    brand: "Stephen King",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/El Resplandor.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "818437b38c44d52b9542e340",
    name: "Carrie",
    description: 
      "El escalofriante caso de una joven de apariencia insignificante que se transformó en un ser de poderes anormales, sembrando el terror en la ciudad. Con pulso mágico para mantener la tensión a lo largo de todo el libro, Stephen King narra la atormentada adolescencia de Carrie, y nos envuelve en una atmósfera sobrecogedora cuando la muchacha realiza una serie de descubrimientos hasta llegar al terrible momento de la venganza. Esta novela fue llevada al cine con un inmenso éxito de público y crítica.",
    price: 25.00,
    brand: "Stephen King",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/Carrie.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "828437b38c44d52b9542e340",
    name: "It",
    description: 
      "¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela. Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre. It es una de las novelas más ambiciosas de Stephen King, donde ha logrado perfeccionar de un modo muy personal las claves del género de terror.",
    price: 39.99,
    brand: "Stephen King",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/it.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "848437b38c44d52b9542e340",
    name: "La Cúpula",
    description: 
      "En una soleada mañana de otoño en la pequeña ciudad de Chester’s Mill, Claudette Sanders disfruta de su clase de vuelo, y Dale Barbara, Barbie para los amigos, hace autostop en las afueras. Ninguno de los dos llegará a su destino… De repente, una barrera invisible ha caído sobre la ciudad como una burbuja cristalina e inquebrantable. Al descender, ha cortado por la mitad a una marmota y ha amputado la mano a una mujer que estaba arreglando su jardín. El avión que pilotaba Claudette ha chocado contra la cúpula y se ha precipitado al suelo envuelto en llamas. Dale, veterano de la guerra de Irak, ha de regresar a Chester’s Mill, el lugar que tanto deseaba abandonar. El ejército pone a Barbie al cargo de la situación, pero Big Jim Rennie, el hombre que tiene un pie en todos los negocios sucios de la ciudad, no está de acuerdo: la cúpula podría ser la respuesta a sus plegarias. A medida que la comida, la electricidad y el agua escasean, los niños comienzan a tener premoniciones escalofriantes. El tiempo se acaba para aquellos que viven bajo la cúpula. ¿Podrán averiguar qué ha creado tan terrorífica prisión antes de que sea demasiado tarde?",
    price: 29.99,
    brand: "Stephen King",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/La cupula.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "858437b38c44d52b9542e340",
    name: "Manuscrito Hallado en una Botella",
    description: 
      "El manuscrito hallado en una botella de Edgar Allan Poe es una historia de terror y suspenso, donde un joven sorteará toda suerte de dificultades, en una travesía sobre los mares asiáticos que le depararán primero, una terrible tempestad, donde salva su vida de milagro. Luego será un choque con otro barco, de grandes dimensiones lo que lo lleva a formar parte de la tripulación de ese extraño navío, formado por personas que parecen ignorarlo. Describe el barco con minuciosidad y tecnicismo, lo mismo que sus emociones. Se trata de una persona racional y escéptica que debió reconocer la existencia de sucesos fantasmagóricos. Esos seres indiferentes y de edad avanzada, despiertan el miedo y la curiosidad del narrador, que presiente el trágico desenlace.",
    price: 39.99,
    brand: "Edgar Allan Poe",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/Manuscrito hallado en una botella.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "868437b38c44d52b9542e340",
    name: "Gregor: La Profecia del Gris",
    description: 
      "Gregor tiene once años y vive en Nueva York. Su existencia no es muy distinta de la de cualquier chico de su edad. Sin embargo, el destino le tiene reservada una sorpresa. Un caluroso día de verano, él y su hermana Boots, de dos años, caen accidentalmente por una rejilla de ventilación. De repente, el pequeño mundo de Gregor desaparece. En las Tierras Bajas, una extraña sociedad, en la que conviven seres humanos con murciélagos y cucarachas, se encuentra amenazada por las ratas, y la llegada de Gregor no parece casual. Una antigua profecía que habla de un guerrero hará que Gregor ponga a prueba su valor: emprenderá un peligroso viaje a través del universo subterráneo de las Tierras Bajas. Pero ¿acaso alguien de tan sólo once años puede convertirse en héroe?",
    price: 35.00,
    brand: "Suzanne Collins",
    category: "Fantásia",
    inStock: true,
    images: [
      {
        image:
          "/img/Gregor. La Profecia del Gris.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "878437b38c44d52b9542e340",
    name: "Los Casos de Monsieur Dupin",
    description: 
      "Los casos de Monsieur Dupin reúnen en un mismo volumen lastres historias del genial detective salidas de la pluma de Poe: Los crímenes de la rue Morgue, El misteriode Marie Rogêt y La carta robada. Dupin inaugura dentro de la literatura el tema policial, eltema del detective —casi siempre «amateur», y cuya intervención en los sucesospermite multiplicar pistas y sospechosos— y del asesino —cuya identidad nollega a descubrirse hasta el final de la historia—, dos figuras que libran unalucha a muerte por el dominio de la escena. Dupin es el prototipo de una serie de detectives privadosque incluye a Sherlock Holmes y su Watson, Martin Hewit y su Brett, Poirot y sucapitán Hastings. El volumen se completa con los otros dos únicos relatos demisterio de Poe, Tú eres el hombre y El escarabajo de oro, uno de sus relatosmás logrados. «Los crímenes de la rue Morgue» constituye por sí mismo unmanual casi completo de teoría y práctica detectivesca. Dorothy L. Sayers",
    price: 25.00,
    brand: "Edgar Allan Poe",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/Los casos de monsieur Dupin.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "898437b38c44d52b9542e340",
    name: "La Caída de la Casa Usher",
    description: 
      "Un joven caballero es invitado al viejo caserón de un amigo de la infancia, Roderick Usher, artista enfermizo y excéntrico que vive completamente recluido en compañía de su hermana, Lady Madeline, también delicada de salud. Usher vive preso de una enfermedad indefinible, lo que hace a todos temer por su vida. La que acaba muriendo es su hermana. Sus restos mortales son depositados en una cripta, pero no tardan en producirse terribles acontecimientos que desembocarán en un trágico final",
    price: 39.99,
    brand: "Edgar Allan Poe",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/La caida de la casa usher.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "881437b38c44d52b9542e340",
    name: "Los Juegos del Hambre",
    description: 
      "GANAR SIGNIFICA FAMA Y RIQUEZA. PERDER SIGNIFICA UNA MUERTE SEGURA. En una oscura versión del futuro próximo, doce chicos y doce chicas se ven obligados a participar en un reality show llamado los juegos del hambre. Solo hay una regla: matar o morir. Cuando Katniss Everdeen, una joven de dieciséis años se presenta voluntaria para ocupar el lugar de su hermana en los juegos, lo entiende como una condena a muerte. Sin embargo Katniss ya ha visto la muerte de cerca y la supervivencia forma parte de su naturaleza. ¡Que empiecen los septuagésimo cuartos juegos del hambre!",
    price: 29.99,
    brand: "Suzanne Collins",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/Los juegos del hambre.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "884437b38c44d52b9542e340",
    name: "Los Juegos del Hambre: En Llamas",
    description: 
      "Contra todo prónostico, Katniss ha ganado Los Juegos del Hambre. Es un milagro que ella y su compañero del Distrito 12, Peeta Mellark, sigan vivos. Katniss debería sentirse aliviada, incluso contenta, ya que, al fin y al cabo, ha regresado con su familia y su amigo de toda la vida, Gale. Sin embargo, nada es como a ella le gustaría. Gale guarda las distancias y Peeta le ha dado la espalda por completo. Además se rumorea que existe una rebelión contra el Capitolio...",
    price: 19.99,
    brand: "Suzanne Collins",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/Los juegos del hambre. En Llamas.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "886437b38c44d52b9542e340",
    name: "Juego de Tronos",
    description: 
      "En un mundo diferente al nuestro, en el que los veranos y los inviernos duran generaciones, un gran conflicto está a punto de estallar. Robert Baratheon ocupa el Trono de Hierro en el cálido y opulento sur de Poniente. Se lo arrebató tras una sangrienta guerra al último rey loco de la dinastía Targaryen, señores de dragones. Sin embargo, ahora su poder se ve amenazado: en el norte, el Muro erigido para proteger el reino de las bestias y de los extraños se tambalea. Hace siglos que nadie ve a los caminantes blancos, pero ¿quiénes son entonces esos seres de ojos azules y fríos que se ocultan en las sombras de los bosques y que les arrebatan la vida y la mente a aquellos desafortunados que se cruzan en su camino? El final del verano está próximo, se acerca el invierno y solo un milagro podrá disipar las tinieblas.",
    price: 59.99,
    brand: "George R. R. Martin",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Juegos de Tronos.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "887437b38c44d52b9542e340",
    name: "El Juego de Ender",
    description: 
      "La Tierra se ve amenazada por los insectores, una raza extraterrestre completamente ajena a los humanos, a los que pretende destruir. Para vencer a los insectores es necesario un nuevo tipo de genio militar, y por ello se ha permitido el nacimiento de Ender, quien en cierta forma constituye una anomalía viviente: es el tercer hijo de una pareja en un mundo que ha limitado estrictamente a dos el número de descendientes. El niño Ender deberá aprender todo lo relativo a la guerra en los videojuegos y en los peligrosos ensayos de batallas que realiza con sus compañeros. A la habilidad en el tratamiento de las emociones, ya característica de Orson Scott Card, se une en este libro el interés por el empleo de las simulaciones de ordenador y juegos de fantasía en la formación militar, estratégica y psicológica del protagonista.",
    price: 29.99,
    brand: "Orson Scott Card",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/el-juego-de-ender.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888037b38c44d52b9542e340",
    name: "El Dragón del Hielo",
    description: 
      "Todos en la aldea coinciden: Adara es una niña rara, una niña del invierno. Nació durante la peor helada que se recuerda y el frío se quedó para siempre con ella. Es fácil verla pasear sola por los campos helados o construir imaginarios castillos de arena y hielo. Nadie lo sabe, pero espera, impaciente, la visita del dragón de hielo. Adara no puede entender por qué todos le temen tanto si para ella es su mejor compañero de juegos. Con él se olvida de que el eterno enemigo del norte se acerca peligrosamente a la aldea y lo mejor sería huir a las tierras cálidas del sur…",
    price: 29.99,
    brand: "George R. R. Martin",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/El dragon del Hielo.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888137b38c44d52b9542e340",
    name: "Cien Años de Soledad",
    description: 
      "«Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo». Macondo, en ese entonces, era una pequeña aldea a la que llegaban todos los años, por el mes de marzo, los gitanos dirigidos por Melquíades, llevando los últimos inventos de la ciencia. El patriarca y fundador de Macondo, José Arcadio Buendía, se obsesiona con los inventos de los gitanos al extremo de descuidar a su familia. Descubre que la tierra es redonda y planea un viaje para encontrar la tierra de los inventos, pero luego de un peligroso viaje, sólo llega al mar. Ante su decisión de abandonar Macondo, Úrsula, su mujer, lo detiene y le dice que se ocupe de sus hijos. José Arcadio se entretiene en darles lecciones poco verídicas a sus hijos, José Arcadio y Aureliano. Cuando vuelven los gitanos, José Arcadio se entera de la muerte de Melquíades. Además, junto con sus dos hijos, conoce el hielo, que el cree es el más grande invento de su tiempo.",
    price: 39.99,
    brand: "Gabriel García Márquez",
    category: "Drama",
    inStock: true,
    images: [
      {
        image:
          "/img/Cien años de soledad.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888237b38c44d52b9542e340",
    name: "Los Viajes de Tuf",
    description: 
      "Haviland Tuf, mercader independiente sin demasiada suerte en su oficio es contratado para una misteriosa misión que parece tener como finalidad encontrar una leyenda: una misteriosa estrella que azota cíclicamente un planeta con las más virulentas plagas imaginables. Los viajes de Tuf se puede considerar como una space opera que ejemplifica el fenómeno de los fix-up (montaje de diversos relatos interrelacionados entre sí) y que utiliza la figura del anti-héroe para demostrar una conocida moraleja: ¡Que más vale maña que fuerza!",
    price: 29.99,
    brand: "George R. R. Martin",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/Los Viajes de Tuf.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888337b38c44d52b9542e340",
    name: "El Coronel no Tiene Quien le Escriba",
    description: 
      "Esta desolada novela corta ha sido reconocida como el primer triunfo en la trayectoria narrativa de Gabriel García Márquez. Tocada apenas por la fantasía, la historia del coronel veterano de una guerra concluida quince años atrás, quien espera la pensión que habrá de sacarlo de la miseria junto a su esposa enferma, es un profundo canto de esperanzas perdidas que nos sumerge en la atmósfera opresiva de un tiempo ya ido, cuando América Latina emergía apenas a la modernidad entre los restos humeantes del siglo XIX.",
    price: 19.99,
    brand: "Gabriel García Márquez",
    category: "Drama",
    inStock: true,
    images: [
      {
        image:
          "/img/El coronel no tiene quien le escriba.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888537b38c44d52b9542e340",
    name: "Crónica de una Muerte Anunciada",
    description: 
      "Esta novela se basa en un hecho histórico acontecido en la tierra natal del autor. Sin embargo, en García Márquez la dialéctica entre realidad y mito es tan fecunda que eleva el hecho a categoría de metáfora universal sobre la condición humana. Cuando empieza el relato, Santiago Nasar ya está muerto, pues sabe que los hermanos Vicario lo van a matar –de hecho ya lo han matado– para vengar el honor ultrajado de su hermana Ángela, pero la novela concluye en el momento en que Santiago Nasar muere… Fascinante análisis de la fatalidad y el tiempo cíclico, en esta obra la realidad se metamorfosea en rito, el amor desemboca en tragedia, y los hombres y mujeres se sitúan en las fronteras de la leyenda.",
    price: 29.99,
    brand: "J. R. R. Tolkien",
    category: "Drama",
    inStock: true,
    images: [
      {
        image:
          "/img/Cronica de una muerte anunciada.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888637b38c44d52b9542e340",
    name: "El Señor de los Anillos",
    description: 
      "EDICIÓN ILUSTRADA Y EN UN SOLO VOLUMEN. Señor de los Anillos es una novela, de obra cumbre del escritor John Ronald Reuel Tolkien, ambientada en un mundo fantástico llamado la Tierra Media hacia el final de su Tercera Edad. El título hace referencia a Sauron, el Señor Oscuro de Mordor, principal villano de la historia, creador del Anillo Único que utilizó para controlar el poder de los demás Anillos. El Señor de los Anillos constituye la continuación de un libro anterior de Tolkien, El Hobbit, que cuenta la historia de cómo el Anillo del Poder pasa a las manos de Bilbo Bolsón, el tío de Frodo Bolsón. En un nivel más profundo, constituye la continuación de otro libro llamado El Silmarillion, que habla de la creación de la Tierra Media y de todas las criaturas que en ella habitan, así como del primer Señor Oscuro, maestro de Sauron, y de las luchas por los Silmarils. El Señor de los Anillos narra las aventuras de un grupo de seres: (elfos, hobbits, enanos, humanos), que forman la Comunidad del Anillo en su intento por destruir el Anillo Único, forjado por Sauron. Es la historia del héroe del pueblo llano, de aquella persona que aún sabiendo que su destino puede ser fatal, lucha por cumplirlo, pues de él depende la continuidad de su mundo.",
    price: 49.99,
    brand: "J. R. R. Tolkien",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/El señor de los anillos.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888737b38c44d52b9542e340",
    name: "El Hobbit",
    description: 
      "Smaug parecía profundamente dormido cuando Bilbo espió una vez más desde la entrada. ¡Pero fingía estar dormido! ¡Estaba vigilando la entrada del túnel!... Sacado de su cómodo agujero-hobbit por Gandalf y una banda de enanos, Bilbo se encuentra de pronto en medio de una conspiración que pretende apoderarse del tesoro de Smaug el Magnífico, un enorme y muy peligroso dragón...",
    price: 49.99,
    brand: "J. R. R. Tolkien",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/El Hobbit.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888937b38c44d52b9542e340",
    name: "Divergente",
    description: 
      "En el Chicago distópico de Beatrice Prior, la sociedad está dividida en cinco facciones, cada una de ellas dedicada a cultivar una virtud concreta: Verdad (los sinceros), Abnegación (los altruistas), Osadía (los valientes), Cordialidad (los pacíficos) y Erudición (los inteligentes). En una ceremonia anual, todos los chicos de dieciséis años deben decidir a qué facción dedicarán el resto de sus vidas. Beatrice tiene que elegir entre quedarse con su familia… y ser quien realmente es, no puede tener ambas cosas. Así que toma una decisión que sorprenderá a todo el mundo, incluida ella.",
    price: 39.99,
    brand: "Veronica Roth",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/Divergente.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888907b38c44d52b9542e340",
    name: "El Museo de los Horrores",
    description: 
      "«Es medianoche. Antes del alba darán conmigo y me encerrarán en una celda negra, donde languideceré interminablemente, mientras insaciables deseos roen mis entrañas y consumen mi corazón, hasta ser al fin uno con los muertos que amo. Mi asiento es la fétida fosa de una vetusta tumba; mi pupitre, el envés de una lápida caída y desgastada por los siglos implacables; mi única luz es la de las estrellas y la de una angosta media luna, aunque puedo ver tan claramente como si fuera mediodía. A mi alrededor, como sepulcrales centinelas guardando descuidadas tumbas, las inclinadas y decrépitas lápidas yacen medio ocultas por masas de nauseabunda maleza en descomposición. Y sobre todo, perfilándose contra el enfurecido cielo, un solemne monumento alza su austero chapitel ahusado, semejando el espectral caudillo de una horda fantasmal. El aire está enrarecido por el nocivo olor de los hongos y el hedor de la húmeda tierra mohosa, pero para mí es el aroma del Elíseo. Todo es quietud —terrorífica quietud—, con un silencio cuya intensidad promete lo solemne y lo espantoso. De haber podido elegir mi morada, lo hubiera hecho en alguna ciudad de carne en descomposición y huesos que se deshacen, pues su proximidad brinda a mi alma escalofríos de éxtasis, acelerando la estancada sangre en mis venas y forzando a latir mi lánguido corazón con júbilo delirante… ¡Porque la presencia de la muerte es vida para mí!».(de Los amados muertos).",
    price: 29.99,
    brand: "H. P. Lovecraft",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/El museo de los Horrores.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888917b38c44d52b9542e340",
    name: "El Alquimista",
    description: 
      "«Éste libro relata la historia de un joven pastor andaluz que un día dejó su rebaño de ovejas para emprender un viaje en el que aprendió a escuchar a su corazón y descifrar un lenguaje que está más allá de las palabras. Nos recuerda la incapacidad que las personas tienen para escoger su propio destino. Nos habla de la leyenda personal que cada persona tiene. Vivir la leyenda personal es la razón de vivir. Y cuando quieres algo, todo el Universo conspira para que realices tu deseo, tu sueño. El joven pastor viaja en busca de su tesoro escondido siguiendo las señales. Dios escribió en el mundo el camino que cada hombre debe seguir. Sólo hay que leer lo que Él escribió para cada uno de nosotros. El Alquimista es comparado con otros libros conocidos como El Principito o Juan Salvador Gaviota. Con este viaje por las arenas del desierto, Paulo Coelho crea un símbolo hermoso y revelador de la vida, el hombre y sus sueños.",
    price: 15.00,
    brand: "Paulo Coelho",
    category: "Drama",
    inStock: true,
    images: [
      {
        image:
          "/img/El alquimista.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888927b38c44d52b9542e340",
    name: "El Demonio y la Señorita Prym",
    description: 
      "Viscos es un pueblo del norte de España perdido en el tiempo y el espacio, donde sus habitantes, en su mayoría gente mayor cuyos hijos se han trasladado a la gran ciudad, viven aburridos y esperando el fin del pueblo. Es una comunidad dividida por la codicia, la cobardía y el miedo. Un día un extranjero llega al pueblo, un hombre perseguido por el fantasma de un pasado doloroso y conoce a la joven camarera Chantal Prym, una joven en busca de la felicidad. El extranjero ha viajado desde muy lejos y necesita encontrar la respuesta a una pregunta que le atormenta: en su esencia, ¿el ser humano es bueno o malo? En siete días se desarrolla una trama perversa con la que el extranjero pone a prueba a los habitantes de Viscos. Allí, enterrados bajo tierra, hay diez lingotes de oro que entregará al pueblo con una condición: que la señorita Prym les proponga a sus vecinos que maten a alguien en el plazo de una semana. Si aparece un habitante asesinado, él les entregará ese oro que les arreglará la vida y le quedará claro que el ser humano es malo por naturaleza. Si no, él se llevará el oro consigo y comprenderá que el ser humano es bueno por naturaleza.",
    price: 25.00,
    brand: "Paulo Coelho",
    category: "Psicológico",
    inStock: true,
    images: [
      {
        image:
          "/img/El demonio y la señorita Prym.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888947b38c44d52b9542e340",
    name: "La Sombra sobre Innsmouth",
    description: 
      "Se cuentan terribles relatos sobre el pueblo Innsmouth, un pueblo pesquero que antaño fue próspero, pero que ahora se halla sumido en la pobreza. La causa de la degradación se achaca a una epidemia procedente de un barco y que azotó sin piedad al pueblo. Sin embargo, las malas lenguas hablan sobre pactos con el diablo. Son pocos lo que se aventuran a viajar a ese pueblo, pues muchos extranjeros no han regresado tras viajar a Innsmouth. Pese a todo, el protagonista de esta historia, un viajante en busca de sus orígenes familiares, se siente atraído por el pueblo y decide visitarlo de pasada hacia su destino final. Pero, para su desgracia, se ve obligado a pasar la noche en el pueblo. ¿Estará preparado para conocer los macabros secretos del pueblo?",
    price: 29.99,
    brand: "H. P. Lovecraft",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/La Sombra sobre Innsmouth.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888957b38c44d52b9542e340",
    name: "El que Susurra en la Oscuridad",
    description: 
      "Cuando la prensa reporta el hallazgo de los restos de unos extraños seres flotando en las aguas durante una inundación en Vermont, Albert N. Wilmarth, un escéptico profesor de la Universidad de Miskatonic, considera los testimonios como provocados por viejas leyendas locales sobre monstruos. Sin embargo, Wilmarth recibe una carta de Henry Wentworth Akeley, un prestigioso erudito que vive en una granja aislada de Vermont, quien afirma tener pruebas que convencerán a Wilmarth de la presencia de seres extraños en la zona. La correspondencia entre ambos inquieta cada vez más a Wilmarth, que decide visitar a Akeley y comprobar in situ la veracidad del asunto.",
    price: 39.99,
    brand: "H. P. Lovecraft",
    category: "Terror",
    inStock: true,
    images: [
      {
        image:
          "/img/El que Susurra en la Oscuridad.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888967b38c44d52b9542e340",
    name: "La Ladrona de Libros",
    description: 
      "Érase una vez un pueblo donde las noches eran largas y la muerte contaba su propia historia. En el pueblo vivía una niña que quería leer, un hombre que tocaba el acordeón y un joven judío que escribía cuentos hermosos para escapar del horror de la guerra. Al cabo de un tiempo, la niña se convirtió en una ladrona que robaba libros y regalaba palabras. Con estas palabras se escribió una historia hermosa y cruel que ahora ya es una novela inolvidable.",
    price: 29.99,
    brand: "Markus Zusak",
    category: "Drama",
    inStock: true,
    images: [
      {
        image:
          "/img/La Ladrona de Libros.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888977b38c44d52b9542e340",
    name: "El Viejo y El Mar",
    description: 
      "Es una novela escrita por Ernest Hemingway en 1951 en Cuba y publicada en 1952. Fue su último trabajo de ficción importante publicado en vida y posiblemente su obra más famosa. Un viejo lobo de mar está pasando una racha de mala suerte: hace 84 días que no logra capturar un solo pez. Todos los habitantes del pueblo se burlan de él, excepto un niño, que le mira y ayuda. Ambos deciden que el día siguiente será bueno para la pesca del pez espada. Todavía es de noche cuando se levanta, prepara los aparejos y se lanza a la mar con su pequeña barca. En alta mar, el viejo pone diversas carnadas. De pronto, la línea comienza a moverse. El viejo no puede controlarla. Se trata de un gigantesco pez espada. Cuatro horas más tarde, el pez se sacude en la superficie del agua y arrastra la barca. El viejo lo sostiene con el sedal enrollado alrededor del cuerpo. No hay tierra a la vista. Ahora, mar adentro, el viejo sostiene en su línea al pez más grande que jamás había visto.",
    price: 25.00,
    brand: "Ernest Hemingway",
    category: "Drama",
    inStock: true,
    images: [
      {
        image:
          "/img/El viejo y el Mar.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888987b38c44d52b9542e340",
    name: "El Jardín del Edén",
    description: 
      "Una obra póstuma, aunque terminada en vida, sobre la complejidad del amor y de la creación artística. Por el Premio Nobel de Literatura Ernest Hemingway. La concepción y redacción de El jardín del Edén se inició en 1946, contemporánea de otras novelas que vieron la luz en vida del autor, como El viejo y el mar o París era una fiesta. Pero no llegó a las imprentas hasta veinticinco años después de la muerte de Hemingway. Es, por tanto, una obra póstuma, aunque terminada en vida, que trata, con una interpretación profunda, gran imaginación y una prosa vivaz, sobre la complejidad del amor y de la creación artística a través de un atípico triángulo amoroso entre el protagonista, David Bourne, su mujer Catherine y una joven que la propia Catherine coloca en el camino de su marido. No se trata exactamente de una novela autobiográfica, aunque el protagonista sea un escritor americano al que empieza a saludar el éxito, ni de una novela sobre un atípico triángulo amoroso. Es, más bien, la revelación de la ternura y vulnerabilidad que Hemingway, como ser humano, ocultaba tras su imagen pública; la amarga explicación de las características principales del artista y del precio que ha de pagar para mantener su vocación; y el nacimiento de una de las heroínas más logradas y complejas del autor: Catherine Bourne.",
    price: 15.00,
    brand: "Ernest Hemingway",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/El jardin del eden.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188981b38c44d52b9542e340",
    name: "Dune",
    description: 
      "En el desértico planeta Arrakis, el agua es el bien más preciado y llorar a los muertos, el símbolo de máxima prodigalidad. Pero algo hace de Arrakis una pieza estratégica para los intereses del Emperador, las Grandes Casas y la Cofradía, los tres grandes poderes de la galaxia. Arrakis es el único origen conocido de la melange, preciosa especia y uno de los bienes más codiciados del universo. Al duque Leto Atreides se le asigna el gobierno de este mundo inhóspito, habitado por los indómitos Fremen y monstruosos gusanos de arena de centenares de metros de longitud. Sin embargo, cuando la familia es traicionada, su hijo y heredero, Paul, emprenderá un viaje hacia un destino más grande del que jamás hubiese podido soñar. Mezcla fascinante de aventura, misticismo, intrigas políticas y ecologismo, Dune se convirtió, desde el momento de su publicación, en un fenómeno de culto y en la mayor epopeya de ciencia-ficción de todos los tiempos.",
    price: 35.00,
    brand: "Frank Herbert",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/Dune.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188982b38c44d52b9542e340",
    name: "Yo, Robot",
    description: 
      "Una investigación llevada a cabo por un periodista acerca de la trayectoria de la robopsicóloga Susan Calvin da pie a los nueve relatos que componen esta novela. Las tres leyes de la robótica, a las que en obras posteriores Asimov añadiría alguna más, constituyen las normas que rigen el comportamiento en los diferentes conflictos que se presentan entre humanos y robots. Si bien admiten una lectura independiente, la modernidad y éxito de este libro se explica por la audacia en la composición y por la aplastante lógica en las reflexiones que aparecen acerca de la robótica. Yo, robot es uno de los pocos títulos de ciencia ficción que han superado con amplitud el círculo de lectores especialmente aficionados, entre los que a menudo se considera una obra cumbre.",
    price: 25.00,
    brand: "Isaac Asimov",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/Yo, Robot.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188983b38c44d52b9542e340",
    name: "El Hombre Bicentenario",
    description: 
      "«Esta historia, que apareció por primera vez en 1976, fue mi exposición más clarividente del desarrollo de los robots. Trataba del deseo de un robot de convertirse en hombre y la forma en que realizaba este deseo, paso a paso. No tenía intención de escribir esta historia cuando la empecé, se escribió sola, y se trazó y entrelazó en la máquina de escribir. Acabó siendo la tercera de mis historias favoritas, entre todas las escritas.» Isaac Asimov",
    price: 29.99,
    brand: "Isaac Asimov",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/El Hombre Bicentenario.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188984b38c44d52b9542e340",
    name: "Los Hijos de Dune",
    description: 
      "Leto Atreides, el hijo de Paul -el mesías de una religión que arrasó el universo, el mártir que, ciego, se adentró en el desierto para morir-, tiene ahora nueve años. Pero es mucho más que un niño, porque dentro de él laten miles de vidas que lo arrastran a un implacable destino. Él y su hermana gemela, bajo la regencia de su tía Alia, gobiernan un planeta que se ha convertido en el eje de todo el universo. Arrakis, más conocido como Dune. Y en este planeta, centro de las intrigas de una corrupta clase política y sometido a una sofocante burocracia religiosa, aparece de pronto un predicador ciego, procedente del desierto. ¿Es realmente Paul Atreides, que regresa de entre los muertos para advertir a la humanidad del peligro más abominable?",
    price: 19.99,
    brand: "Frank Herbert",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/Los Hijos de Dune.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188985b38c44d52b9542e340",
    name: "Bajo la Misma Estrella",
    description: 
      "Emotiva, irónica y afilada. Una novela teñida de humor y de tragedia que habla de nuestra capacidad para soñar incluso en las circunstancias más difíciles. A Hazel y a Gus les gustaría tener vidas más corrientes. Algunos dirían que no han nacido con estrella, que su mundo es injusto. Hazel y Gus son solo adolescentes, pero si algo les ha enseñado el cáncer que ambos padecen es que no hay tiempo para lamentaciones, porque, nos guste o no, solo existe el hoy y el ahora. Y por ello, con la intención de hacer realidad el mayor deseo de Hazel —conocer a su escritor favorito—, cruzarán juntos el Atlántico para vivir una aventura contrarreloj, tan catártica como desgarradora. Destino: Amsterdam, el lugar donde reside el enigmático y malhumorado escritor, la única persona que tal vez pueda ayudarles a ordenar las piezas del enorme puzle del que forman parte…",
    price: 39.99,
    brand: "John Green",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Bajo la Misma Estrella.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188986b38c44d52b9542e340",
    name: "Crepúsculo",
    description: 
      "Cuando Isabella Swan se muda a Forks, una pequeña localidad del estado de Washington en la que nunca deja de llover, piensa que es lo más aburrido que le podía haber ocurrido en la vida. Pero su vida da un giro excitante y aterrador una vez que se encuentra con el misterioso y seductor Edward Cullen. Hasta ese momento, Edward se las ha arreglado para mantener en secreto su identidad vampírica, pero ahora nadie se encuentra a salvo, y sobre todo Isabella, la persona a quien más quiere Edward...",
    price: 25.00,
    brand: "Stephenie Meyer",
    category: "Fatasía, Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Crepúsculo.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "188987b38c44d52b9542e340",
    name: "La Huésped",
    description: 
      "Melanie Stryder se niega a desaparecer. La tierra ha sido invadida por criaturas que han tomado el control de las mentes de los humanos en los que se hospedan, dejando los cuerpos intactos, y la mayor parte de la humanidad ha sucumbido. Wanderer, el «alma» invasora que habita el cuerpo de Melanie, se enfrenta al reto de vivir dentro de un humano: las emociones abrumadoras, los recuerdos demasiado intensos, pero hay una sola dificultad que Wanderer no consigue vencer: la anterior propietaria de su cuerpo lucha por retener la posesión de su mente. Melanie inunda la mente de Wanderer con visiones del hombre que ama, Jared, un humano que vive oculto, hasta el punto de que, incapaz de controlar los deseos de su cuerpo, anhela a un hombre al que jamás ha visto. Una serie de circunstancias externas las convierte en aliadas muy a su pesar y parten en busca del hombre que ambas aman a la vez. The Host nos muestra el primer triángulo amoroso que implica a sólo dos cuerpos, en una inolvidable y fascinante novela que atraerá a un gran número de lectores de una de las más cautivadores escritoras de nuestro tiempo.",
    price: 35.00,
    brand: "Stephenie Meyer",
    category: "Ciencia Ficción, Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/La Huesped.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "818980b38c44d52b9542e340",
    name: "El Teorema Katherine",
    description: 
      "Según Colin Singleton existen dos tipos de persona: los que dejan y los que son dejados. Él, sin duda, pertenece al segundo. Su última ex, Katherine XIX, no es una reina, sino la Katherine número diecinueve, que le ha roto el corazón. Para escapar de su mal de amores, y con el propósito de hallar un teorema que explique la maldición de las Katherine, Colin emprende junto a su amigo Hassan una aventura que le llevará a Gutshot, un pueblecito de Tennessee, y a la sospecha de que en la vida la inteligencia no siempre es la mejor compañera de viaje.",
    price: 29.99,
    brand: "John Green",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/El Teorema de Katherine.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "818981b38c44d52b9542e340",
    name: "La Química",
    description: 
      "No iba a dejarles ganar. De ningún modo les pondría en bandeja una solución tan fácil a su problema. Lo más probable era que al final acabaran con ella, pero aquellos malditos iban a tener que luchar. E iban a sangrar también. Antes trabajaba para el gobierno de Estados Unidos, aunque casi nadie lo sabía. Como experta en su campo, era uno de los secretos más oscuros de una agencia tan clandestina que ni siquiera tiene nombre. Hasta que la consideraron un lastre y fueron a por ella sin avisar. Ahora rara vez se queda en el mismo lugar o utiliza el mismo nombre durante mucho tiempo. Ya han matado a la única persona en quien confiaba, pero sabe algo que sigue suponiendo una amenaza. La quieren muerta, y pronto. Cuando su antiguo jefe le ofrece una salida, comprende que será su única oportunidad de borrar la enorme diana que lleva dibujada en la espalda. Pero eso implica aceptar un último encargo. Y, para su horror, la información que consigue vuelve aún más peligrosa la situación. Decidida a afrontar el desafío cara a cara, empieza a prepararse para la peor pelea de su vida, mientras se da cuenta de que se está enamorando de un hombre que solo puede complicar sus posibilidades de supervivencia. Ahora que sus opciones menguan a marchas forzadas, deberá aplicar su especial talento de formas en las que nunca antes habría soñado.",
    price: 19.99,
    brand: "Stephenie Meyer",
    category: "Drama",
    inStock: true,
    images: [
      {
        image:
          "/img/La quimica.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "818984b38c44d52b9542e340",
    name: "El Último Deseo",
    description: 
      "Geralt de Rivia, brujo y mutante sobrehumano, se gana la vida como cazador de monstruos en una tierra de magia y maravilla: con sus dos espadas al hombro —la de acero para hombres, y la de plata para bestias— da cuenta de estriges, mantícoras, grifos, vampiros, quimeras y lobisomes, pero sólo cuando amenazan la paz. Irónico, cínico, descreído y siempre errante, sus pasos le llevan de pueblo en pueblo ofreciendo sus servicios, hallando las más de las veces que los auténticos monstruos se esconden bajo rostros humanos. En su camino sorteará intrigas, elegirá el mal menor, debatirá cuestiones de precio, hollará el confín del mundo y realizará su último deseo: así comienzan las aventuras del brujo Geralt de Rivia",
    price: 35.00,
    brand: "Andrzej Sapkowski",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/El ultimo deseo.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "818985b38c44d52b9542e340",
    name: "Lux Perpetua",
    description: 
      "El Anticristo, muy señores míos, querido público, será de la estirpe de Dan. Reinmar de Bielau, llamado Reynevan, se encuentra en una encrucijada. Por un lado, el médico y alquimista educado en Praga se ha convertido en un participante de importancia en la revolución husita contra el clero y la nobleza, un movimiento que ha impuesto su ley en Bohemia y Moravia, y que amenaza con extenderse por toda Silesia, Sajonia y Polonia hasta el mar Báltico. Por otro, la Inquisición ha capturado a su amada, Jutta de Apolda, y la utiliza como baza para chantajearle y obligarle a espiar para los enemigos de los husitas. Excomulgado, manipulado por unos y otros, y rodeado de una creciente desconfianza entre los suyos, sólo contará con la ayuda de sus fieles amigos Scharley y Sansón Mieles para sortear intrigas y peligros sin cuento, inmerso en un espeluznante juego de poder que enfrenta a nobles y campesinos, eslavos y alemanes, paganos y cristianos, partidarios del progreso y defensores de la tradición.",
    price: 35.00,
    brand: "Andrzej Sapkowski",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Lux Perpetua.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "818986b38c44d52b9542e340",
    name: "El Ickabog",
    description: 
      "Se acerca el ickabog… un monstruo legendario que amenaza un reino y que pondrá a prueba la valentía de dos chicos. Descubre una aventura sumamente original sobre el poder de la esperanza y la amistad y su triunfo contra todo pronóstico, obra de una de las mejores narradoras del mundo. El reino de Cornucopia era el más feliz del mundo. Tenía oro en abundancia, un rey con unos bigotes magníficos y un montón de carniceros, reposteros y queseros cuyos exquisitos productos hacían que la gente bailara de júbilo cuando los comía. Todo era perfecto, excepto Los Pantanos, la región del norte donde, según la leyenda, vivía el terrorífico ickabog. Sobre ese monstruo, cualquiera con un poco de cabeza sabía que no era más que una fábula que los padres utilizaban para que los niños se portaran bien. Aunque lo extraño de las fábulas es que a veces cobran vida propia… Pero ¿puede una leyenda derrocar a un rey amado por su pueblo y destruir un reino feliz? ¿Puede embarcar a dos chicos valientes en una aventura que no han buscado y ni siquiera imaginado? Si crees que tienes suficiente valor, adéntrate en las páginas de este libro para averiguarlo…",
    price: 19.99,
    brand: "J.k. Rowling",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/El Ickabog.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "818987b38c44d52b9542e340",
    name: "El Corredor del Laberinto",
    description: 
      "MEMORIZA. CORRE. SOBREVIVE. «Bienvenido al Claro. Verás que una vez a la semana, siempre el mismo día y a la misma hora, nos llegan víveres. Una vez al mes, siempre el mismo día y a la misma hora, aparece un nuevo chico, como tú. Siempre un chico. Como ves, este lugar está cercado por muros de piedra… Has de saber que estos muros se abren por la mañana y se cierran por la noche, siempre a la hora exacta. Al otro lado se encuentra el laberinto. De noche, las puertas se cierran… y, si quieres sobrevivir, no debes estar allí para entonces». Todo sigue un orden… y, sin embargo, al día siguiente suena una alarma. Significa que ha llegado alguien más. Para asombro de todos, es una chica. Su llegada vendrá acompañada de un mensaje que cambiará las reglas del juego",
    price: 29.99,
    brand: "James Dashner",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/El corredor del laberinto.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "881980b38c44d52b9542e340",
    name: "Las Pruebas",
    description: 
      "EL LABERINTO FUE SOLO EL COMIENZO. Resolver el laberinto se suponía que era el final. No más pruebas, no más huidas. Thomas creía que salir significaba que todos recobrarían sus vidas, pero ninguno sabía a qué clase de vida estaban volviendo. Árida y carbonizada, gran parte de la tierra es un territorio inservible. El sol abrasa, los gobiernos han caído y una misteriosa enfermedad se ha ido apoderando poco a poco de la gente. Sus causas son desconocidas; su resultado, la locura. En un lugar infestado de miseria y ruina, Thomas conoce a una chica que asegura haber contraído la enfermedad y estar a punto de sucumbir a sus efectos. Entretanto, Teresa ha desaparecido, la organización CRUEL les ha dejado un mensaje, un misterioso chico ha llegado y alguien ha tatuado unas palabras en los cuellos de los clarianos. La de Minho dice «el líder»; la de Thomas, «el que debe ser asesinado».",
    price: 15.00,
    brand: "James Dashner",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/Las Pruebas.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "881984b38c44d52b9542e340",
    name: "Fahrenheit 451",
    description: 
      "La temperatura a la que el papel se enciende y arde. Guy Montag es un bombero y el trabajo de un bombero es quemar libros, que están prohibidos porque son causa de discordia y sufrimiento. El Sabueso Mecánico del Departamento de Incendios, armado con una letal inyección hipodérmica, escoltado por helicópteros, está preparado para rastrear a los disidentes que aún conservan y leen libros. Como 1984, de George Orwell, como Un mundo feliz, de Aldous Huxley, Fahrenheit 451 describe una civilización occidental esclavizada por los medios, los tranquilizantes y el conformismo. La visión de Bradbury es asombrosamente profética: pantallas de televisión que ocupan paredes y exhiben folletines interactivos; avenidas donde los coches corren a 150 kilómetros por hora persiguiendo a peatones; una población que no escucha otra cosa que una insípida corriente de música y noticias transmitidas por unos diminutos auriculares insertados en las orejas.",
    price: 25.00,
    brand: "Ray Bradbury",
    category: "Ciencia Ficción",
    inStock: true,
    images: [
      {
        image:
          "/img/Fahrentheit 451.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "881985b38c44d52b9542e340",
    name: "De la ceniza volverás",
    description: 
      "La familia Elliot ha vivido durante siglos en una casa de leyenda y misterio y, como Gran Abuela, sus integrantes perduran desde la época de la Esfinge. Sólo Timothy el niño expósito que los fantasmas han adoptado, registra los prodigiosos acontecimientos. Ahora todos vendrán de visita para Halloween, la Noche de Brujas. A la ansiosa anticipación de la fiesta, le sigue un sentimiento de fatalidad. El mundo no cree más en los fantasmas y la Casa se transforma en un refugio para muchos de ellos. No para Timothy, el único que deberá envejecer y morir. Por momentos lírica, punzante y estremecedora, De la ceniza volverás es la novela que Ray Bradbury escribió a lo largo de más de cincuenta años, a partir de sus primeros cuentos sobre la familia Elliot. Un libro de fantasía deslumbrante y lleno de humor que figurará entre sus obras maestras.",
    price: 29.99,
    brand: "Ray Bradbury",
    category: "Fantasía",
    inStock: true,
    images: [
      {
        image:
          "/img/De La Ceniza Volveraz.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "881986b38c44d52b9542e340",
    name: "Hay Momentos que Deberían ser Eternos",
    description: 
      "Una emotiva historia que nos enseña que el mejor viaje de la vida es el amor. Eva es una mujer independiente, segura de sí misma y muy vinculada con su adinerada familia, a pesar de que sus hermanos, en ocasiones, no se lo pongan nada fácil. Tras un fracaso amoroso en el pasado decidió volcarse en sus restaurantes, y es su trabajo de chef lo que llena su vida. Marc Sarriá, más conocido como doctor Sarriá, es un prestigioso y querido cirujano oncólogo en un hospital privado de Madrid. Hace unos años tomó la decisión de vivir el presente y no plantearse el futuro más allá del día a día. Los caprichos del destino hacen que dos personas tan distintas como Eva y Marc se conozcan una tarde en una azotea y terminen la noche como nunca imaginaron. De pronto y sin proponérselo, ¡acaban convirtiéndose en inseparables! Eva se da cuenta entonces de que existe vida más allá del trabajo, de que la presión, si la controlas, no hunde sino ayuda, y de que el amor, cuando se trata de amor verdadero, es ineludible. Hay momentos que deberían ser eternos, la nueva novela de Megan Maxwell, llenará tu corazón de emociones y te hará sonreír con esas pequeñas cosas que convierten la vida en algo maravilloso.",
    price: 25.00,
    brand: "Megan Maxwell",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Hay momentos que deberian ser eternos.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "881987b38c44d52b9542e340",
    name: "Pídeme lo que quieras y Yo te lo daré",
    description: 
      "A pesar de las discusiones que provocan sus diferentes caracteres, el empresario Eric Zimmerman y Judith Flores siguen tan enamorados como el día en que sus miradas se cruzaron por primera vez. Juntos han formado una preciosa familia a la que adoran y por la que son capaces de hacer cualquier cosa. Flyn, aquel niño al que Judith conoció al llegar a Múnich, se ha convertido en un adolescente, y tal como les ocurre a la mayoría de los jóvenes, su vida se complica y afecta a todos los que conforman su entorno. El abogado Björn y la exteniente Mel continúan con su bonita historia de amor junto a la «pinsesa» Sami. Sin duda, la convivencia les ha beneficiado mucho. Pero hay algo que Björn no consigue de Mel: que se case con él. Las relaciones de las dos parejas van viento en popa. Se quieren, se respetan, nada parece fuera de lugar, hasta que de repente, personas y sorpresas del pasado irrumpen en sus vidas y lo ponen todo patas arriba. ¿Serán capaces de superar este giro inesperado? ¿Podrá con todo el amor que se profesan?; o, por el contrario, ¿cambiarán sus sentimientos para siempre?",
    price: 25.00,
    brand: "Megan Maxwell",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Pideme de lo que quieras y te la dare.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "888187b38c44d52b9542e340",
    name: "Mírame y Bésame",
    description: 
      "Las gemelas Beth y Gladys Craig se vieron obligadas a abandonar Noruega y dejar atrás a su familia. Las constantes amenazas de su tío Leiv hicieron que sus padres tomaran la dura decisión de ponerlas a cargo de sus tíos Sven y Ottilia en Elgin, Escocia. Físicamente son como dos gotas de pelo rubio, ojos claros, delgadas, pero sus caracteres son muy diferentes. Mientras Beth es sonriente, noble, trabajadora y luchadora, Gladys es enfadica, ruin, holgazana y conformista. A pesar de que Beth es muy consciente de los defectos de su hermana, ella la adora y la protegería con su propia vida, puesto que se lo prometió a sus padres. Desde pequeña siempre ha dado la cara por ella y la ha sacado de mil apuros, sin importarle quedar como la mala por ser la más bruta y guerrera. Todo cambia cuando una noche Beth conoce a Iver McGregor, un guapo y joven highlander del clan McGregor. Gladys, en vez de alegrarse, se encela. ¿Por qué ese guapo guerrero ha tenido que fijarse en su hermana y no en ella? Adéntrate en las páginas de esta novela romántica cargada de acción y aventuras y descubre el daño que puede causar la envidia.",
    price: 29.99,
    brand: "Megan Maxwell",
    category: "Romance",
    inStock: true,
    images: [
      {
        image:
          "/img/Mirame y Besame.jpg",
      },
    ],

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
];