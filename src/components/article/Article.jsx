import React, { PropTypes } from 'react';
import './assets/styles/article.styl';

const propTypes = {
    data: PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        bigText: React.PropTypes.string.isRequired,
    }),
};

class Article extends React.Component {
    render() {
        const author = this.props.data.author;
        const text = this.props.data.text;
        const bigText = this.props.data.bigText;
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                <p className="news__big-text">{bigText}</p>
            </div>
        );
    }
}

Article.propTypes = propTypes;

export default Article;
