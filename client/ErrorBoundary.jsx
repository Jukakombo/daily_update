import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong. Please refresh the page or try again later.
        </h1>
      );
    }

    // Make sure that this.props.children exists
    if (this.props.children) {
      // Check if this.props.children is a valid React element
      if (React.isValidElement(this.props.children)) {
        return this.props.children;
      } else {
        // If this.props.children is not a valid React element, handle it accordingly
        console.error(
          "Invalid child element in ErrorBoundary:",
          this.props.children
        );

        // You might return a default fallback or null depending on your use case
        return null;
      }
    }

    // If this.props.children is not provided, handle it accordingly
    console.error("No child element provided to ErrorBoundary");

    // You might return a default fallback or null depending on your use case
    return null;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
