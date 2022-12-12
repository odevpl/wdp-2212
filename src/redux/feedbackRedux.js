/* selectors */
export const getClientFeedback = ({ clientFeedback }) => clientFeedback;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
