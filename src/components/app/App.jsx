import React from 'react';
import './assets/styles/app.styl';
import News from '../news/News.jsx';
import Comments from '../comments/Comments.jsx';

const myNews = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...',
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    },
];

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <News data={myNews} />
                <Comments />
            </div>
        );
    }
}

export default App;
