import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import AnalysisPage from "./pages/AnalysisPage";
import CarutiresPage from "./pages/CarutiresPage";
import NewsShowPage from "./pages/NewsShowPage";
import ContactPage from "./pages/ContactPage";

const router= createBrowserRouter(
    [
        {
            path: '/',
            element: <RootLayout/>,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                    index: true,
                },
                {
                    path: '/news',
                    element: <NewsPage />
                },
                {
                    path: '/news/:slug',
                    element: <NewsShowPage />
                },
                {
                    path: '/analysis',
                    element: <AnalysisPage />
                },
                {
                    path: '/carutires',
                    element: <CarutiresPage />
                },
                {
                    path: '/contact',
                    element: <ContactPage />
                },
            ]
        }
    ]
);

export default router;