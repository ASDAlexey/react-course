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
    constructor() {
        super();
        this.readmoreClick = this.readmoreClick.bind(this);
        this.state = { visible: false };
    }

    readmoreClick(e) {
        e.preventDefault();
        this.setState({ visible: true });
    }

    render() {
        const author = this.props.data.author;
        const text = this.props.data.text;
        const bigText = this.props.data.bigText;
        const visibleClass = this.state.visible ? 'none' : '';

        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                <button onClick={this.readmoreClick} className={`news__readmore ${visibleClass}`}>Подробнее
                </button>
                <p className="news__big-text">{bigText}</p>
            </div>
        );
    }
}

Article.propTypes = propTypes;

export default Article;
