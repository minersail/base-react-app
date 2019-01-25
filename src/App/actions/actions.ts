import { createAction } from 'typesafe-actions';

export const deleteThing = createAction('actions/MOVE', (resolve) => {
	return (thingIndex: number) => resolve(thingIndex);
});