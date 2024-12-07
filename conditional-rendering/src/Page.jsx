import PropTypes from 'prop-types';

function Page(props){
    const welcome_msg = <p className="welcome-msg">Welcome {props.userName}</p>;
    const log_in_msg = <p className="error-msg">You need to log in first</p>;

    return props.isLoggedIn ? welcome_msg : log_in_msg;
}

// prop-types
Page.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
};

// default props
Page.defaultProps = {
    isLoggedIn: false,
    userName: "Guest",
};
export default Page;