/* selectors */
export const getSize = ({ display }) => display;

/* action name creator */
const createActionName = actionName => `app/lists/${actionName}`;

/* action types */
const SET_SIZE = createActionName('SET_SIZE');

/* action creators */
export const setSize = payload => ({ payload, type: SET_SIZE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_SIZE:
      return action.payload;
    default:
      return statePart;
  }
}
