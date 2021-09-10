import React, { Component } from 'react';
import LoadingComponent from '../components/app/NewsSearch/LoadingComponent';
import { fetchArticles } from '../services/newsApi';

export default class NewsContainer extends Component {
    state = {
      articles: [],
      loading: true,
      search: 'dogs'
    }

    async componentDidMount() {
      const articles = await fetchArticles(this.state.search);
      this.setState({ articles, loading: false });
    }

    render() {
      const { loading, articles, search } = this.state;

      if(loading) return <LoadingComponent />;

      return (
        <div>
        WELCOME TO NEWS 
        </div>
      );
    }
}
