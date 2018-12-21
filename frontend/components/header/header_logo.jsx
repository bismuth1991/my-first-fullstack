import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { closeModal } = this.props;
    window.location.hash = '/home';
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

export default connect(
  null,
  mapDispatchToProps,
)(HeaderLogo);
