import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie } from '../../actions';
import styles from './styles';
import closeIconPath from '../../asset/img/closeIcon.png'
const DeleteCard = ({
    id,
    deleteMovie,
    ClickCloseController
}) => {
    const confirmClickHandler = () => {
        deleteMovie(id);
        ClickCloseController();
    }
    return (
        <div style={styles.container}>
            <img src={closeIconPath} style={styles.closeImg} onClick={ClickCloseController} />
            <div style={styles.title}>DELETE MOVIE</div>
            <div style={styles.content}>Are you sure you want to delete this movie?</div>
            <button style={styles.confirmButton} onClick={confirmClickHandler}>CONFIRM</button>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteMovie: id => dispatch(deleteMovie(id))
})
export default connect(
    null,
    mapDispatchToProps
)(DeleteCard);