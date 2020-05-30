export const InitialState = {
  titles: {
    routes: [],
  },
  languages: [],
  header: {
    language: "ru",
    navigation: []
  },
  data: {
    home: {
      navigation: [],
      ulContent: [],
      cards: [
        { link: "", title: "", text: "", images: [] },
        { link: "", title: "", text: "", images: [] }
      ],
      button: "дізнатись більше ..."
    },
    projects: {
      navigation: [],
      cards: [
        {
          images: [],
        }
      ],
    },
    products: {
      navigation: [],
      cards: [
        {
          images: [],
        },
        {
          images: [],
        }
      ],
    },
    contacts: {
      formfields: {},
      button: "",
      submitMessage: ""

    }
  },
  footer: {
    copyright: [],
    address: [],
    head: []
  },
}
