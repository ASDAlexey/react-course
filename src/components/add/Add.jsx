import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/add.styl';

const propTypes = {
    id: PropTypes.func,
};

const contextTypes = {
    EventEmitter: React.PropTypes.object,
};

class Add extends React.Component {
    constructor() {
        super();
        this.refsData = {};
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
        this.state = {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true,
        };
    }

    componentWillMount() {
        const id = this.props.id || _.uniqueId('prefix-');
        this.setState({ id });
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refsData.author).focus();
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         likesIncreasing: nextProps.likeCount > this.props.likeCount,
    //     });
    // }

    onFieldChange(e) {
        const value = e.target.value !== 'on' ? e.target.value : e.target.checked;
        if (!_.isBoolean(value)) {
            if (value.trim().length > 0) this.setState({ ['' + e.target.name]: false });
            else this.setState({ ['' + e.target.name]: true });
        } else {
            if (value) this.setState({ ['' + e.target.name]: false });
            else this.setState({ ['' + e.target.name]: true });
        }
    }

    onBtnClickHandler(e) {
        e.preventDefault();
        // const formData = _.map(this.refsData, (el, key) => {
        //     const value = el.value !== 'on' ? el.value : el.checked;
        //     return { [key]: value };
        // });
        // console.log(formData);
        const author = this.refsData.author.value;
        const textEl = this.refsData.text;
        const text = textEl.value;
        console.log(`${author}\n${text}`);
        const item = [
            {
                author,
                text,
                bigText: '...',
            },
        ];
        this.context.EventEmitter.emit('News.add', item);
        textEl.value = '';
        this.setState({ testIsEmpty: true });
    }

    render() {
        const agreeNotChecked = this.state.agreeNotChecked;
        const authorIsEmpty = this.state.authorIsEmpty;
        const textIsEmpty = this.state.textIsEmpty;

        return (
            <form className="add cf">
                <input
                    type="text"
                    className="add__author"
                    defaultValue=""
                    placeholder="Ваше имя"
                    name="authorIsEmpty"
                    onChange={this.onFieldChange}
                    ref={ref => (this.refsData.author = ref)}
                />
                <textarea
                    className="add__text"
                    defaultValue=""
                    placeholder="Текст новости"
                    name="textIsEmpty"
                    onChange={this.onFieldChange}
                    ref={ref => (this.refsData.text = ref)}
                />
                <label className="add__checkrule" htmlFor="checkrule">
                    <input
                        id="checkrule"
                        type="checkbox"
                        defaultChecked={false}
                        ref={ref => (this.refsData.checkrule = ref)}
                        name="agreeNotChecked"
                        onChange={this.onFieldChange}
                    />
                    Я согласен с правилами
                </label>
                <button
                    className="add__btn"
                    onClick={this.onBtnClickHandler.bind(this)}
                    disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
                >
                    Показать alert
                </button>
            </form>
        );
    }
}

Add.propTypes = propTypes;
Add.contextTypes = contextTypes;

export default Add;
