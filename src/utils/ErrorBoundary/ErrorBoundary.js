import { Component } from "react";
import ErrorBoundaryRefresh from "./ErrorBoundaryRefresh.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryRefresh />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
