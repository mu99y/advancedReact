import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // Wrong to test the inner working of the other component
    // expect(div.innerHTML).toContain('Comment Box')

    ReactDOM.unmountComponentAtNode(div);
})
