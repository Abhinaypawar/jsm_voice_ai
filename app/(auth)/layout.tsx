import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated(); // Replace with actual authentication logic

  // Prevent redirection loop by checking the current path
  if (!isUserAuthenticated && typeof window !== 'undefined' && window.location.pathname !== '/') {
    redirect('/');
  }

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;