import React, {PropTypes} from 'react';
import './assets/styles/app.styl';
import News from '../news/News.jsx';
import Comments from '../comments/Comments.jsx';

var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <News data={my_news}/>
                <Comments/>
            </div>
        );
    }
}

export default App;
