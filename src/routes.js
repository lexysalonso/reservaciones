/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "modules/Dashboard.js";
import UserProfile from "modules/UserProfile.js";
import TableList from "modules/TableList.js";
import Typography from "modules/Typography.js";
import Icons from "modules/Icons.js";
import Maps from "modules/Maps.js";
import Notifications from "modules/Notifications.js";
import Upgrade from "modules/Upgrade.js";
import CrudChoferes from "./modules/Choferes/CrudChoferes";
import Omnibus from "modules/Omnibus/Omnibus";
import Viajes from "modules/Viajes/Viajes";
import Reservaciones from "modules/Reservaciones/Reservaciones";
import Reservar from "modules/Reservacion/Reservar";
import ReCrud from "modules/Reservacion/ReCrud";
import TableReservacionesViajeros from "modules/Reservaciones/TableReservacionesViajeros";
import RealizarReservacion from "modules/Reservaciones/RealizarReservacion";
import Reportes from "modules/Reportes/Reportes";

const dashboardRoutes = [
  {
    path: "/reservar",
    name: "Reservar",
    icon: "nc-icon nc-alien-33",
    component: ReCrud,
    layout: "/admin",
  },
  {
    path: "/reservaciones",
    name: "Reservaciones",
    icon: "nc-icon nc-alien-33",
    component: Reservaciones,
    layout: "/admin",
  },
  {
    path: "/viajeros",
    name: "",
    icon: "",
    component: TableReservacionesViajeros,
    layout: "/admin",
  },
  {
    path: "/realizar-reservar/:cant",
    name: "",
    icon: "",
    component: RealizarReservacion,
    layout: "/admin",
  },
  {
    path: "/choferes",
    name: "Choferes",
    icon: "nc-icon nc-chart-pie-35",
    component: CrudChoferes,
    layout: "/admin",
  },

  {
    path: "/ominbus",
    name: "Omnibus",
    icon: "nc-icon nc-circle-09",
    component: Omnibus,
    layout: "/admin",
  },
  {
    path: "/viajes",
    name: "Viajes",
    icon: "nc-icon nc-notes",
    component: Viajes,
    layout: "/admin",
  },
  {
    path: "/reportes",
    name: "Reportes",
    icon: "nc-icon nc-notes",
    component: Reportes,
    layout: "/admin",
  },
 /*  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: CrudChoferes,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: CrudChoferes,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  }, */
];

export default dashboardRoutes;
