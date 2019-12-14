import React, {Component} from 'react';

import {InitialState} from './InitialState'

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends Component {
  state = InitialState;

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
    //console.log(this);
    let language = event.target.value;
    /*this.setState(prevState => {})*/
    let updatedHeader = this.state.titles.header[language];
    let updatedFooter = this.state.titles.footer[language];
    const urlContent = `./docs/content/${language}.json`;
    fetch(urlContent)
      .then(response => {
        return response.json()
      })
      .then(response => {
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
    const { titles, languages, header, footer, data } = this.state;
    return(
      <LanguageContext.Provider value={{
        routes: titles.routes,
        languages: languages,
        header: header,
        footer: footer,
        updateLanguage: this.updateLanguage,
        home: data.home,
        projects: data.projects,
        products: data.products,
        contacts: data.contacts
      }}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export {LanguageProvider, LanguageConsumer};
