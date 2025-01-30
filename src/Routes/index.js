import { HeaderOnly } from '@/components/Layouts';
import routesConfig from '@/Config/route';

import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Upload from '@/pages/Uploads';

const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.follwing,
        component: Following,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
