import PropTypes from "prop-types";
import {Link, NavLink} from "react-router-dom";
import {
    ChevronDownIcon,
    ChevronRightIcon, InboxIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import {
    Avatar, Accordion, AccordionHeader, AccordionBody,
    Button, Card,
    IconButton,
    Typography, List, ListItem, ListItemPrefix, Chip, ListItemSuffix,
} from "@material-tailwind/react";

import {useMaterialTailwindController, setOpenSidenav} from "@/context";
import {useState} from "react";
import {Cog6ToothIcon, PowerIcon, UserCircleIcon} from "@heroicons/react/24/solid";

export function Sidenav({brandImg, brandName, routes}) {
    const [controller, dispatch] = useMaterialTailwindController();
    const {sidenavColor, sidenavType, openSidenav} = controller;
    const sidenavTypes = {
        dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
        white: "bg-white shadow-lg",
        transparent: "bg-transparent",
    };
    console.log(routes)
    return (
      <aside
        className={`${sidenavTypes[sidenavType]} ${
          openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
      >
        <div
          className={`relative border-b ${
            sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
          }`}
        >
          <Link to="/" className="flex items-center gap-4 py-6 px-8">
            <Avatar src={brandImg} size="sm" />
            <Typography
              variant="h6"
              color={sidenavType === "dark" ? "white" : "blue-gray"}
            >
              {brandName}
            </Typography>
          </Link>
          <IconButton
            variant="text"
            color="white"
            size="sm"
            ripple={false}
            className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            onClick={() => setOpenSidenav(dispatch, false)}
          >
            <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
          </IconButton>
        </div>
        <div className="m-4">


          {routes.map(({ layout, title, pages }, key) => (
            <ul key={key} className="mb-4 flex flex-col gap-1">
              {title && (

                <li className="mx-3.5 mt-4 mb-2">
                  <Typography
                    variant="small"
                    color={sidenavType === "dark" ? "white" : "blue-gray"}
                    className="font-black uppercase opacity-75"
                  >
                    {title}
                  </Typography>
                </li>
              )}

              {pages.map(({ icon, name, path }) => (
                <li key={name}>
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (

                      <Button
                        variant={isActive ? "gradient" : "text"}
                        color={
                          isActive
                            ? sidenavColor
                            : sidenavType === "dark"
                            ? "white"
                            : "blue-gray"
                        }
                        className="flex items-center gap-4 px-4 capitalize"
                        fullWidth
                      >
                        {icon}
                        <Typography
                          color="inherit"
                          className="font-medium capitalize"
                        >
                          {name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}

        </div>
      </aside>
    );

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <aside
            className={`bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 ${
                openSidenav ? "translate-x-0" : "-translate-x-80"
            } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
        >
            <Card
                className={`h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 ${
                    sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
                }`}
            >
                <div
                    className={`relative border-b border-blue-gray-50`}
                >
                    <Link to="/" className="flex items-center gap-4 py-6 px-8">
                        <Avatar src={brandImg} size="sm"/>
                        <Typography
                            variant="h6"
                            color={"white"}
                        >
                            {brandName}
                        </Typography>
                    </Link>
                    <IconButton
                        variant="text"
                        color="white"
                        size="sm"
                        ripple={false}
                        className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                        onClick={() => setOpenSidenav(dispatch, false)}
                    >
                        <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white"/>
                    </IconButton>
                </div>
                <List>
                    <Accordion
                        open={open === 1}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <PresentationChartBarIcon className="h-5 w-5"/>
                                </ListItemPrefix>
                                <Typography color="white" className="mr-auto font-normal">
                                    Dashboard
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Analytics
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Reporting
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Projects
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <ShoppingBagIcon className="h-5 w-5"/>
                                </ListItemPrefix>
                                <Typography color="white" className="mr-auto font-normal">
                                    E-Commerce
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Orders
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Products
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                     
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        Profile
                    </ListItem>


                </List>
            </Card>
        </aside>

    );
}

Sidenav.defaultProps = {
    brandImg: "/img/logo-ct.png",
    brandName: "Рівненська гімназія №6",
};

Sidenav.propTypes = {
    brandImg: PropTypes.string,
    brandName: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
