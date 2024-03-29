import {Routes, Route} from "react-router-dom";
import {Cog6ToothIcon} from "@heroicons/react/24/solid";
import {IconButton} from "@material-tailwind/react";
import {
    Sidenav,
    DashboardNavbar,
    Configurator,
    Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import {useMaterialTailwindController, setOpenConfigurator} from "@/context";

export function Dashboard() {
    const [controller, dispatch] = useMaterialTailwindController();
    const {sidenavType} = controller;

    return (
        <div className="  bg-gray-900">
            <div className="min-h-screen bg-gradient-to-r from-blue-900/40 to-gray-900">
                <Sidenav
                    routes={routes}
                    brandImg={
                        sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
                    }
                />
                <div className="p-4 xl:ml-80">
                    <DashboardNavbar/>
                    <Configurator/>
                    <IconButton
                        size="lg"
                        color="white"
                        className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
                        ripple={false}
                        onClick={() => setOpenConfigurator(dispatch, true)}
                    >
                        <Cog6ToothIcon className="h-5 w-5"/>
                    </IconButton>
                    <Routes>
                        {routes.map(
                            ({layout, pages}) =>
                                layout === "main_layout" &&
                                pages.map(({path, element}) => (
                                    <Route exact path={path} element={element}/>
                                ))
                        )}
                    </Routes>
                    <div className="text-blue-gray-600">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

Dashboard.displayName = "/src/layout/main_layout.jsx";

export default Dashboard;
