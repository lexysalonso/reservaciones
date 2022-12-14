import React,{useState} from 'react'
import {Tabs, Tab, Breadcrumb} from "react-bootstrap"
import OmnibusMasViajes from './OmnibusMasViajes';
import OmnibusTaller from './OmnibusTaller';
import OmnibusDsiponibles from './OmnibusDisponibles';


const Reportes = () => {
    const [key, setKey] = useState("home");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Omnibus mas Viajes">
        <Breadcrumb>
          <Breadcrumb.Item>Omnibus </Breadcrumb.Item>
          <Breadcrumb.Item active>Omnibus Mas Viajes</Breadcrumb.Item>
        </Breadcrumb>
        <OmnibusMasViajes />
      </Tab>
      <Tab eventKey="profile" title="Omnibus Taller">
        <Breadcrumb>
          <Breadcrumb.Item>Omnibus </Breadcrumb.Item>
          <Breadcrumb.Item active>Omnibus Taller</Breadcrumb.Item>
        </Breadcrumb>
        <OmnibusTaller />
      </Tab>
      <Tab eventKey="contact" title="Omnibus Disponibles">
        <Breadcrumb>
          <Breadcrumb.Item>Omnibus </Breadcrumb.Item>
          <Breadcrumb.Item active>Omnibus Disponibles</Breadcrumb.Item>
        </Breadcrumb>
        <OmnibusDsiponibles />
      </Tab>
    </Tabs>
  );
}

export default Reportes;