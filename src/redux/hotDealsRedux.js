/* selectors */
export const getDealById = ({ hotDeals }, hotDealId) =>
  hotDeals.find(hotDeal => hotDeal.id === hotDealId);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
