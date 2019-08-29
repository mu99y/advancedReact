import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

describe('save Comment', () => {
    it('has the correct type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    })
    it('has the correct payload', () => {
        const action = saveComment('new com');

        expect(action.payload).toEqual('new com');
    })    
})