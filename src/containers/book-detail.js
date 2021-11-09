import { connect } from "react-redux";
import BookDetail from "../components/book-detail";

const mapStateToProps = (state) => ({
    book : state.activeBook,
})

export default connect(mapStateToProps)(BookDetail);
