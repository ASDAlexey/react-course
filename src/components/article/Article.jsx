import React, {PropTypes} from 'react';
import './assets/styles/article.styl';

class Article extends React.Component {
    constructor() {
        super();
    }

    render() {
        const author = this.props.data.author;
        const text = this.props.data.text;

        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
            </div>
        );
    }
}

export default Article;
