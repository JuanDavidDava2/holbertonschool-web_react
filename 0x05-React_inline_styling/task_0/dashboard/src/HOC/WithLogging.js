import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props);
      this.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;
    }

    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }

    render() {
      return <WrappedComponent { ...this.props } />;
    }
  };
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WithLogging;
