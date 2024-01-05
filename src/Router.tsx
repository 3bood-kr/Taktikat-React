import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";

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
                }
            ]
        }
    ]
);

export default router;