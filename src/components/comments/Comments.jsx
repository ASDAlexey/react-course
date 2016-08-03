import React, {PropTypes} from 'react';

class Comments extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="news">
                «Нет новостей - комментировать нечего»
            </div>
        );
    }
}

export default Comments;
