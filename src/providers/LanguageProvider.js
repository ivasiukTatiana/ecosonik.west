import React, {Component} from 'react';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends Component {
  state = {
    titles: {
      routes: [],
    },
    languages: [],
    header: {
      language: "ua",
      navigation: []
    },
    data: {
      home: {
        navigation: [],
        ulContent: [],
        cards: [{ link: "", title: "", text: "" }],
        button: "дізнатись більше ..."
      },
      projects: {
        navigation: [],
        cards: [
          {
            images: [],
          }
        ],
      }
    },
    footer: {
      copyright: [],
      address: []
    },
  }

  componentDidMount() {
    const language = this.state.header.language;
    const urlTitles = './docs/content/titles.json';
    const urlContent = `./docs/content/${language}.json`;

    fetch(urlTitles)
      .then(response => {
        return response.json()
      })
      .then(response => {
        const languages = [];
        Object.keys(response.header).forEach((key, index) => {
          languages[index] = {};
          languages[index].language = response.header[key].language;
          languages[index].translation = response.header[key].translation;
        });
        this.setState({
          titles: response,
          languages: languages,
          header: response.header[language],
          footer: response.footer[language],
        })
      })
      .catch(err => {
        console.log(err);
      })

    fetch(urlContent)
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data,
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateLanguage = (event) => {
    let language = event.target.value;
    /*this.setState(prevState => {})*/
    let updatedHeader = this.state.titles.header[language];
    let updatedFooter = this.state.titles.footer[language];
    const urlContent = `./docs/content/${language}.json`;
    fetch(urlContent)
      .then(response => {
        //console.log(response);
        return response.json()
      })
      .then(response => {
        //console.log(response.data["home"]);
        this.setState({
          header: updatedHeader,
          data: response.data,
          footer: updatedFooter,
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
      <LanguageContext.Provider value={{
        routes: this.state.titles.routes,
        languages: this.state.languages,
        header: this.state.header,
        footer: this.state.footer,
        updateLanguage: this.updateLanguage,
        home: this.state.data.home,
        projects: this.state.data.projects,
      }}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export {LanguageProvider, LanguageConsumer};
