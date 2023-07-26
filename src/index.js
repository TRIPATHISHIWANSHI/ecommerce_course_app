import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-aopgqondyekx72s0.us.auth0.com"
    clientId="a18A51HqeSBj7e9E5FIuqsyqz5dpcGOz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <SidebarProvider>
    <CoursesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
  </Auth0Provider>
);

