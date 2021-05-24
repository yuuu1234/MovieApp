const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        zIndex: 500,
        backgroundColor: "#232323",
        width: "50%",
        border: "1px solid #ccc",
        boxShadow: "1px 1px 1px black",
        padding: "16px",
        left: "25%",
        top: " 50%",
        boxSizing: " border-box",
        transition: "all 0.3s ease-out",
    },
    title: {
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'left',
        marginLeft: '1rem'
    },
    content: {
        color: '#FFFFFF',
        ontSize: 30,
        textAlign: 'left',
        marginTop: '2rem',
        marginLeft: '1rem'
    },
    confirmButton: {
        backgroundColor: '#F65261',
        height: '2rem',
        width: '6rem',
        border: "none",
        color: '#FFFFFF',
        height: '2rem',
        weight: '4rem',
        marginLeft: '30rem',
        marginTop: '2rem',
    },
    closeImg: {
        position: 'absolute',
        height: '0.8rem',
        width: '0.8rem',
        marginLeft: '36rem',
        marginTop: '0.5rem',
        flexShrink: 0,
    },
}
export default styles;