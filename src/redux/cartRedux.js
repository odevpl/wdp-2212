/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;
export const getSubtotalPrice = ({ cart }) => cart.subtotalPrice;
export const getTotalPrice = ({ cart }) => cart.totalPrice;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const REMOVE_ALL_PRODUCTS = createActionName('REMOVE_ALL_PRODUCTS');
const CALCULATE_SUBTOTAL_PRICE = createActionName('CALCULATE_SUBTOTAL_PRICE');
const CALCULATE_TOTAL_PRICE = createActionName('CALCULATE_TOTAL_PRICE');
const CHANGE_PRODUCT_AMOUNT = createActionName('CHANGE_PRODUCT_AMOUNT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const removeAllProducts = payload => ({ payload, type: REMOVE_ALL_PRODUCTS });
export const calculateSubtotalPrice = () => ({ type: CALCULATE_SUBTOTAL_PRICE });
export const calculateTotalPrice = () => ({ type: CALCULATE_TOTAL_PRICE });
export const changeProductAmount = payload => ({
  payload,
  type: CHANGE_PRODUCT_AMOUNT,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => {
          return product.id !== action.payload;
        }),
      };
    }
    case CHANGE_PRODUCT_AMOUNT: {
      return {
        ...statePart,
        products: statePart.products.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, amount: action.payload.productAmount };
          } else {
            return product;
          }
        }),
      };
    }
    case CALCULATE_SUBTOTAL_PRICE: {
      return {
        ...statePart,
        subtotalPrice: statePart.products.reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.amount,
          0
        ),
      };
    }
    case CALCULATE_TOTAL_PRICE: {
      return {
        ...statePart,
        totalPrice: statePart.products.reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.amount,
          statePart.subtotalPrice ? statePart.deliveryCost : 0
        ),
      };
    }
    case REMOVE_ALL_PRODUCTS: {
      return { ...statePart, products: [] };
    }
    default:
      return statePart;
  }
}
