import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import AnalysisPage from "./pages/AnalysisPage";
import CarutiresPage from "./pages/CarutiresPage";

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
                    path: '/analysis',
                    element: <AnalysisPage />
                },
                {
                    path: '/carutires',
                    element: <CarutiresPage />
                },
            ]
        }
    ]
);

export default router;