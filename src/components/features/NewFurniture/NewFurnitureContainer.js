import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getSize } from '../../../redux/displaysizeRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  display: getSize(state),
});

export default connect(mapStateToProps)(NewFurniture);
