import PropTypes from "prop-types";
import {Link, NavLink} from "react-router-dom";
import {
    ChevronDownIcon,
    ChevronRightIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import {
    Avatar, Accordion, AccordionHeader, AccordionBody,
    Card,
    IconButton,
    Typography, List, ListItem, ListItemPrefix,
} from "@material-tailwind/react";

import {useMaterialTailwindController, setOpenSidenav} from "@/context";
import {memo, useState} from "react";
import {UserCircleIcon} from "@heroicons/react/24/solid";

export function Sidenav({brandImg, brandName}) {
    const [controller, dispatch] = useMaterialTailwindController();
    const { openSidenav} = controller;

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <aside
            className={`bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 ${
                openSidenav ? "translate-x-0" : "-translate-x-80"
            } fixed overflow-y-auto inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}

        >
            <Card
                className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl
                shadow-blue-gray-900 bg-gradient-to-br from-blue-gray-900 to-blue-gray-900 border border-cyan-900/20"

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
                    <NavLink to='/dashboard/home'>
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                                Головна
                            </Typography>
                        </ListItem>
                    </NavLink>
                    <NavLink to='/dashboard/tables'>
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                                Новини
                            </Typography>

                        </ListItem>
                    </NavLink>
                    {/*<hr className="my-2 border-blue-gray-50"/>*/}
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
                                    Батькам
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Адаптація першокласника
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Правила зарахування
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Гуртки
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Як захистити дитину від насильства
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Безпека в інтернеті
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
                                    Учням
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Правила поведінки учнів
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Учнівське самоврядування
                                </ListItem>

                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Національний мультитест
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 3}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <ShoppingBagIcon className="h-5 w-5"/>
                                </ListItemPrefix>
                                <Typography color="white" className="mr-auto font-normal">
                                    Діяльність гімназії
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Інформаційна прозорість
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Публічна інформація
                                </ListItem>

                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Портфоліо закладу
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Психологічна служба
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Шкільний громадській проєкт
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        <Typography color="white" className="mr-auto font-normal">
                            Контакти
                        </Typography>

                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        <Typography color="white" className="mr-auto font-normal">
                            Дія цифрова
                        </Typography>
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
        brandName:  PropTypes.string,
        routes:  PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default memo(Sidenav);
