import { lazy } from 'react';

export const Home = lazy(() => import("../pages/home/Home"));
export const About = lazy(() => import("../pages/about/About"));
export const Vacancies = lazy(() => import("../pages/vacancies/Vacancies"));
export const Service = lazy(() => import("../pages/service/Service"));
export const Portfolio = lazy(() => import("../pages/portfolio/Portfolio"));
export const Navbar = lazy(() => import("./Navbar"));
export const SinglePortfolio = lazy(() => import("../pages/portfolio/SinglePortfolio"));
