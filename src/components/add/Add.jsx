import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/add.styl';

const propTypes = {
    id: PropTypes.func,
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
        // e.preventDefault();
        // const formData = _.compact(_.map(this.refsData, (el, key) => ({ [key]: ReactDOM.findDOMNode(el).value })));
        // console.log(formData);
        e.preventDefault();
        const author = ReactDOM.findDOMNode(this.refsData.author).value;
        const text = ReactDOM.findDOMNode(this.refsData.text).value;
        console.log(`${author}\n${text}`);
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
                    onClick={this.onBtnClickHandler}
                    disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
                >
                    Показать alert
                </button>
            </form>
        );
    }
}

Add.propTypes = propTypes;

export default Add;
