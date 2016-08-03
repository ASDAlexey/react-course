import React, { PropTypes } from 'react';
import './assets/styles/news.styl';
import Article from '../article/Article.jsx';

const propTypes = {
    data: PropTypes.array.isRequired,
};

class News extends React.Component {
    static getNewsTemplate(data) {
        return data.map((item, index) => (
                <div key={index}>
                    <Article data={item} />
                </div>
            )
        );
    }

    static getNotNewTemplate() {
        return (
            <div className="news">
                К сожалению, новостей нет.
            </div>
        );
    }

    render() {
        const data = this.props.data;
        const newTemplate = (data.length > 0) ? News.getNewsTemplate(data) : News.getNotNewTemplate();
        const strongClass = classNames({
            none: data.length === 0,
            news__count: true,
        });
        return (
            <div className="news">
                {newTemplate}
                <strong className={strongClass}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
}

News.propTypes = propTypes;

export default News;
