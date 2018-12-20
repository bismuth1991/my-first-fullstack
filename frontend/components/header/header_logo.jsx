import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { closeModal, history } = this.props;
    // window.location.hash = '/';
    history.push('/');
    closeModal();
  }

  render() {
    return (
      <div
        className="header-logo"
        role="presentation"
        onClick={this.handleClick}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(HeaderLogo));

// export default connect(
//   null,
//   mapDispatchToProps,
// )(HeaderLogo);
