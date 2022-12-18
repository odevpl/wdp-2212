/* selectors */
export const getAll = ({ products }) => products;

export const getProductById = ({ products }, productId) =>
  products.find(product => product.id === productId);

export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FAVORITE_PRODUCT = createActionName('FAVORITE_PRODUCT');
const TOGGLE_PRODUCT_COMPARE = createActionName('TOGGLE_PRODUCT_COMPARE');

/* action creators */
export const toggleCompare = payload => ({
  type: TOGGLE_PRODUCT_COMPARE,
  payload,
});

export const favoriteProduct = payload => ({ type: FAVORITE_PRODUCT, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FAVORITE_PRODUCT:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    case TOGGLE_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compare: !product.compare }
          : product
      );
    default:
      return statePart;
  }
}
