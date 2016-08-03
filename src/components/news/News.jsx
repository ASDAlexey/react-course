import React, {PropTypes} from 'react';
import './assets/styles/news.styl';
import classNames from 'classnames';

class News extends React.Component {
    constructor() {
        super();
    }

    static getNewsTemplate(data) {
        return data.map((item, index) => {
            return (
                <div key={index}>
                    <p className="news__author">{item.author}:</p>
                    <p className="news__text">{item.text}</p>
                </div>
            )
        });
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
            'none': data.length === 0
        });
        return (
            <div className="news">
                {newTemplate}
                <strong className={strongClass}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
}

export default News;
