import React from "react";
import ErrorPage from "./ErrorPage";

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    errorTitle?: string;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
        hasError: false,
        error: null,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
        hasError: true,
        error: error,
        };
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return <ErrorPage type="component" customTitle={this.props.errorTitle} />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;