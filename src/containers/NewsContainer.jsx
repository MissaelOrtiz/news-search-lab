import React, { Component } from 'react';
import LoadingComponent from '../components/app/NewsSearch/LoadingComponent';
import NewsList from '../components/app/NewsSearch/NewsList';
import { fetchArticles } from '../services/newsApi';

export default class NewsContainer extends Component {
    state = {
      articles: [],
      loading: true,
      search: 'sharknado'
    }

    async componentDidMount() {
      const articles = await fetchArticles(this.state.search);
      this.setState({ articles, loading: false });
    }

    render() {
      const { loading, articles, search } = this.state;
      if(loading) {
        return <LoadingComponent />;
      } else if(articles.length > 0) {
        return <>
          <h1>WELCOME TO {search.toUpperCase()} NEWS</h1>
          <NewsList articles={articles} />
        </>;
        
      }
      <h2>Something went wrong :^(</h2>;
    }
}
