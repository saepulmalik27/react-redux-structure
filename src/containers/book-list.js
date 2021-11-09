import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';
import BookList from '../components/book-list'


const mapStateToProps = (state) => {
    return {books : state.books}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectBook}, dispatch)
}

export default  connect(mapStateToProps, mapDispatchToProps)(BookList)