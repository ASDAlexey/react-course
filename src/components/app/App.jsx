import React from 'react';
import events from 'events';
import './assets/styles/app.styl';
import Add from '../add/Add.jsx';
import News from '../news/News.jsx';

const EventEmitter = new events.EventEmitter();
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

const childContextTypes = {
    EventEmitter: React.PropTypes.object,
};

class App extends React.Component {
    constructor() {
        super();
        this.state = { news: myNews };
    }

    getChildContext() {
        return { EventEmitter };
    }

    componentDidMount() {
        EventEmitter.addListener('News.add', (item) => {
            const nextNews = item.concat(this.state.news);
            this.setState({ news: nextNews });
        });
    }

    componentWillUnmount() {
        EventEmitter.removeListener('News.add');
    }

    render() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <Add />
                <News data={this.state.news} />
            </div>
        );
    }
}

App.childContextTypes = childContextTypes;
export default App;
