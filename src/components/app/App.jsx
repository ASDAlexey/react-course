import React from 'react';
import './assets/styles/app.styl';
import News from '../news/News.jsx';
import Comments from '../comments/Comments.jsx';

const myNews = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.',
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!',
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
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
