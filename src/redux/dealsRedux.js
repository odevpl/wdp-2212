/* selectors */
export const getinfoDeal = ({ Deals }) => Deals.infoDeal;
export const getOfficeChair = ({ Deals }) => Deals.officeChair;
export const getBed = ({ Deals }) => Deals.bed;
export const getinfo1 = ({ Deals }) => Deals.info1;
export const getinfo2 = ({ Deals }) => Deals.info2;
export const getinfo3 = ({ Deals }) => Deals.info3;
export const getPrice = ({ Deals }) => Deals.price;
export const getBargain = ({ Deals }) => Deals.bargain;
export const getSofa = ({ Deals }) => Deals.sofa;

/* reducer */
const dealsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default dealsReducer;
