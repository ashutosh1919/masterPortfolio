import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // surfaces in DevTools console so you see the stack
    console.error(`[${this.props.label}] crashed:`, error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <section style={{ padding: "2rem", border: "1px solid #eee", borderRadius: 8, margin: "1rem 0" }}>
          <h2 style={{ margin: 0 }}>
            ⚠️ {this.props.label} failed to render
          </h2>
          <pre style={{ whiteSpace: "pre-wrap", opacity: 0.8, marginTop: 8 }}>
            {String(this.state.error)}
          </pre>
        </section>
      );
    }
    return this.props.children;
  }
}
