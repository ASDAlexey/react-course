import React, {PropTypes} from 'react';
import './assets/styles/news.styl';
import Article from '../article/Article.jsx';

class News extends React.Component {
    constructor() {
        super();
    }

    static getNewsTemplate(data) {
        return data.map((item, index) => {
            return (
                <div key={index}>
                    <Article data={item}/>
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
            'none': data.length === 0,
            'news__count': true,
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
