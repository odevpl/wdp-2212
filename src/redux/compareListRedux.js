/* selectors */
export const getCompareList = ({ compareList }) => compareList;

/* action name creator */
const reducerName = 'compareList';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT_TO_COMPRASION = createActionName('ADD_PRODUCT_TO_COMPRASION');
const REMOVE_PRODUCT_FROM_COMPRASION = createActionName(
  'REMOVE_PRODUCT_FROM_COMPRASION'
);

/* action creators */
export const addToCompareList = payload => ({
  type: ADD_PRODUCT_TO_COMPRASION,
  payload,
});
export const removeFromCompareList = payload => ({
  type: REMOVE_PRODUCT_FROM_COMPRASION,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_COMPRASION:
      return [...statePart, action.payload];
    case REMOVE_PRODUCT_FROM_COMPRASION:
      return statePart.filter(product => product.id !== action.payload);
    default:
      return statePart;
  }
}
