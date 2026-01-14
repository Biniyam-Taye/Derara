import React, { useEffect } from 'react';
import { SignIn } from '@clerk/clerk-react';

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
       <SignIn 
         path="/login" 
         routing="path" 
         signUpUrl="/sign-up"
         appearance={{
            elements: {
                rootBox: "mx-auto",
                card: "bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700",
                headerTitle: "text-gray-900 dark:text-white",
                headerSubtitle: "text-gray-500 dark:text-gray-400",
                socialButtonsBlockButton: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600",
                socialButtonsBlockButtonText: "text-gray-600 dark:text-gray-200",
                formFieldLabel: "text-gray-700 dark:text-gray-300",
                formFieldInput: "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600",
                footerActionText: "text-gray-600 dark:text-gray-400",
                footerActionLink: "text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400"
            }
         }}
       />
    </div>
  );
};

export default LoginPage;
