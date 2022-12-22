/* selectors */
export const getCompareList = ({ compareList }) => compareList;

/* action name creator */
const reducerName = 'compareList';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT_TO_COMPARSION = createActionName('ADD_PRODUCT_TO_COMPARSION');
const REMOVE_PRODUCT_FROM_COMPARSION = createActionName(
  'REMOVE_PRODUCT_FROM_COMPARSION'
);
const CHANGE_COMPARED_PRODUCT_FAVORITE_STATUS = createActionName(
  'CHANGE_COMPARED_PRODUCT_FAVORITE_STATUS'
);

/* action creators */
export const addToCompareList = payload => ({
  type: ADD_PRODUCT_TO_COMPARSION,
  payload,
});

export const removeFromCompareList = payload => ({
  type: REMOVE_PRODUCT_FROM_COMPARSION,
  payload,
});

export const changeComparedProductFavoriteStatus = payload => ({
  type: CHANGE_COMPARED_PRODUCT_FAVORITE_STATUS,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_COMPARSION:
      return [...statePart, action.payload];
    case REMOVE_PRODUCT_FROM_COMPARSION:
      return statePart.filter(product => product.id !== action.payload);
    case CHANGE_COMPARED_PRODUCT_FAVORITE_STATUS:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    default:
      return statePart;
  }
}
