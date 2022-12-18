import { connect } from 'react-redux';
import Deals from './Deals';

const mapStateToProps = state => ({
  Deals: state.Deals,
});

export default connect(mapStateToProps)(Deals);
