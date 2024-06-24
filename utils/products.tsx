//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

export const products = [
    {
      id: "888437b38c44d52b9542e340",
      name: "Harry Potter y El Cáliz de Fuego",
      description: 
        "A lo largo de las tres novelas anteriores pertenecientes a la saga de Harry Potter, el protagonista, Harry Potter lucha con las dificultades acarreadas por su adolescencia y por el hecho de ser un mago famoso. Cuando Harry era un niño pequeño, Voldemort, el mago tenebroso más poderoso de la historia, había asesinado a los padres de Harry, pero luego se había desvanecido misteriosamente después de que su maldición asesina en contra de Harry rebotase. El hecho había causado que Harry adquiriera fama inmediata y que fuese colocado bajo los cuidados de sus tíos muggles, Petunia y Vernon, quienes a su vez tenían un hijo llamado Dudley Dursley. Harry descubre que es un mago a los once años de edad e ingresa en el Colegio Hogwarts de Magia y Hechicería. Allí, crea amistad con Ron Weasley y Hermione Granger y se enfrenta con lord Voldemort, quien en varias ocasiones intenta regresar al poder. En el primer año de Harry en la escuela, debe proteger la Piedra Filosofal para evitar que Voldemort y uno de sus fieles vasallos, un profesor de Hogwarts, la obtuviesen. Después de regresar a la escuela, pasadas las vacaciones de verano, los estudiantes de Hogwarts sufren ataques debido a la apertura de la legendaria Cámara de los Secretos. Harry termina con los ataques cuando mata a un basilisco y frustra un nuevo intento de lord Voldemort para recuperar su fortaleza. Al año siguiente, Harry descubre que era el principal objetivo de un asesino prófugo llamado Sirius Black. Pese a las extremas medidas de seguridad que se aplican en Hogwarts, Harry se encuentra con Black al final de su tercer curso, y descubre que en realidad éste es inocente y es su padrino. También descubre que Peter Pettigrew, el amigo de Sirius y James Potter, había sido el que había traicionado a sus padres y entregado a Voldemort.",
      price: 40,
      brand: "J.k. Rowling",
      category: "Fantasía",
      inStock: true,
      images: [
        {
          image:
            "/img/Harry Potter y El Cáliz de Fuego.png",
        },
      ],
      //NO SE TOCA
      //NO SE TOCA
      //NO SE TOCA
      //NO SE TOCA
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
      id: "888437b38c44d52b9542e340",
      name: "Harry Potter y el Misterio del Príncipe",
      description: 
        "A lo largo de las tres novelas anteriores pertenecientes a la saga de Harry Potter, el protagonista, Harry Potter lucha con las dificultades acarreadas por su adolescencia y por el hecho de ser un mago famoso. Cuando Harry era un niño pequeño, Voldemort, el mago tenebroso más poderoso de la historia, había asesinado a los padres de Harry, pero luego se había desvanecido misteriosamente después de que su maldición asesina en contra de Harry rebotase. El hecho había causado que Harry adquiriera fama inmediata y que fuese colocado bajo los cuidados de sus tíos muggles, Petunia y Vernon, quienes a su vez tenían un hijo llamado Dudley Dursley. Harry descubre que es un mago a los once años de edad e ingresa en el Colegio Hogwarts de Magia y Hechicería. Allí, crea amistad con Ron Weasley y Hermione Granger y se enfrenta con lord Voldemort, quien en varias ocasiones intenta regresar al poder. En el primer año de Harry en la escuela, debe proteger la Piedra Filosofal para evitar que Voldemort y uno de sus fieles vasallos, un profesor de Hogwarts, la obtuviesen. Después de regresar a la escuela, pasadas las vacaciones de verano, los estudiantes de Hogwarts sufren ataques debido a la apertura de la legendaria Cámara de los Secretos. Harry termina con los ataques cuando mata a un basilisco y frustra un nuevo intento de lord Voldemort para recuperar su fortaleza. Al año siguiente, Harry descubre que era el principal objetivo de un asesino prófugo llamado Sirius Black. Pese a las extremas medidas de seguridad que se aplican en Hogwarts, Harry se encuentra con Black al final de su tercer curso, y descubre que en realidad éste es inocente y es su padrino. También descubre que Peter Pettigrew, el amigo de Sirius y James Potter, había sido el que había traicionado a sus padres y entregado a Voldemort.",
      price: 40,
      brand: "J.k. Rowling",
      category: "Fantasía",
      inStock: true,
      images: [
        {
          image:
            "/img/Harry Potter y el Misterio del Príncipe.png",
        },
      ],
      //NO SE TOCA
      //NO SE TOCA
      //NO SE TOCA
      //NO SE TOCA
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