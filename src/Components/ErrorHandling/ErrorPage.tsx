import React, { useState, useEffect } from "react";

interface ErrorPageProps {
  type?: "404" | "network" | "component" | "loading" | "403" | "500" | string;
  customTitle?: string | null;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ 
  type = "404", 
  customTitle = null 
}) => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = (): void => setIsOnline(true);
    const handleOffline = (): void => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getErrorTitle = (): string => {
    if (customTitle) {
      return customTitle;
    }

    switch (type) {
      case "404":
        return "404 - Page Not Found";
      case "network":
        return isOnline ? "Network Error" : "You're Offline";
      case "component":
        return "Something Went Wrong";
      case "loading":
        return "Loading Failed";
      case "403":
        return "403 - Access Denied";
      case "500":
        return "500 - Server Error";
      default:
        return "Error";
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 font-['Fractul']">
      <div className="max-w-md w-full text-center">
        {/* Error Title */}
        <p className="text-2xl md:text-3xl font-bold text-[#f5deb3] mb-4">
          {getErrorTitle()}
        </p>

        {/* Network Status Indicator */}
        {!isOnline && (
          <div className="bg-transparent border border-red-600 p-3 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-[#f5deb3] text-xs">No Internet Connection</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;