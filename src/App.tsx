import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import LandingPage from './pages/landing/LandingPage';
import ProjectDetailPage from './pages/project-detail/ProjectDetailPage';
import ProjectsPage from './pages/projects/ProjectsPage';

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/projects/:slug', element: <ProjectDetailPage /> },
  { path: '/contact', element: <ContactPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
