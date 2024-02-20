import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import TELEKOM from "../../Assets/Projects/TELEKOM.png";
import HLA from "../../Assets/Projects/emotion.png";
import IRCS from "../../Assets/Projects/IRCS.png";
import HPETRACK from "../../Assets/Projects/HPETRACK.png"
import HPENDDC from "../../Assets/Projects/HPENDDC.png"
import HPEPW from "../../Assets/Projects/HPEPW.png"
import chatify from "../../Assets/Projects/chatify.png";
import CSE from "../../Assets/Projects/CSE.png";
import VM from "../../Assets/Projects/VM.png";
import DATAVERSE from "../../Assets/Projects/DATAVERSE.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ProjectCard from "./ProjectCards";
import pressmen from "../../Assets/works/Pressmen.png";
import schauer from "../../Assets/works/Schauer.jpg";
import hp from "../../Assets/works/hp.png";
import hpe from "../../Assets/works/hpe.png";
import telekom from "../../Assets/works/telekom.png";
import elte from "../../Assets/works/elte.png";
import {
    DiHtml5,
    DiJava,
    DiJavascript1,
    DiNodejs,
    DiPostgresql,
    DiReact,
} from "react-icons/di";
import {
    SiTypescript,
    SiDotnet,
    SiMysql,
    SiAzuredevops,
    SiSpring,
    SiVaadin,
    SiMicrosoftexcel,
    SiVisualstudio,
    SiFirebase,
    SiPowershell
} from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
function Experiences({ choosen }) {
    return (
        <div >
            {choosen === "hp" &&
            <>
            <div style={{maxWidth:800, margin:"auto"}}>
                <h3>Hewlett Packard</h3>
                <h4>(02.2024-present)</h4>
                <br/>
                <img src={hp} alt="02.2024-present" width="100" height="100"></img>
                <br/>
                <br/>
                <p style={{ textAlign: "justify", fontSize:20 }}>
                I am working to Hewlett Packard as full time <span className="purple">Medior Softwaredeveloper</span>.
                I am working remotely in an international team. Mostly on <span className="purple">Oportunity Management System</span>.

                </p>
                <p style={{fontSize:30, textAlign:"left"}}>Used tools:</p>
                <ul style={{fontSize:25}}>
                    <li className="about-activity">
                        <DiReact /> React
                    </li>
                    <li className="about-activity">
                        <SiTypescript /> TypeScript
                    </li>
                    <li className="about-activity">
                        <SiDotnet /> ASP.Net
                    </li>
                    <li className="about-activity">
                        <SiMysql /> SQL
                    </li>
                    <li className="about-activity">
                        <SiAzuredevops /> Azure DevOps
                    </li>
                    
                </ul>
                
                </div>
            </>}
            {
            choosen === "hpe" &&
            <>
            <div style={{maxWidth:800, margin:"auto"}}>
                <h3>Hewlett Packard Enterprise</h3>
                <h4>(04.2023-present)</h4>
                <br/>
                <img src={hpe} alt="02.2024-present" width="170" height="100"></img>
                <br/>
                <br/>
                <p style={{ textAlign: "justify",fontSize:20 }}>
                I am working Part-time to Hewlett Packard Enterprise as <span className="purple">Medior Softwaredeveloper</span>.
                    I am working remotely in an <span className="purple">international team</span>.

                </p>
                <h4 style={{ textAlign: "left",fontSize:30 }}>Used tools</h4>
                <ul style={{fontSize:25 }}>
                    <li className="about-activity">
                        <DiReact /> React
                    </li>
                    <li className="about-activity">
                        <DiJavascript1 /> Javascript
                    </li>
                    <li className="about-activity">
                        <SiDotnet /> ASP.Net
                    </li>
                    <li className="about-activity">
                        <SiMysql /> SQL
                    </li>
                    <li className="about-activity">
                        <SiAzuredevops /> Azure DevOps
                    </li>
                    <li className="about-activity">
                        <SiFirebase /> Google Firebase
                    </li>
                    
                    <li className="about-activity">
                        <SiPowershell /> PowerShell
                    </li>
                </ul>
                
                <br/>
                <h4 style={{textAlign:"left", fontSize:30}}>Projects:</h4>
                </div>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={HPETRACK}
                            isBlog={false}
                            title="Software updating manager system 
                            (TrackFlow)"
                            description="HPE managing as 3rd party corporation software updates for miltinational customers. To this operation the corp must holding all information of software updating. For example who works on updating of application and how many time cost an updating. My application supports this functionality."
                            ghLink="/swumst"
                            demoLink="/swumst"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={HPENDDC}
                            isBlog={false}
                            title="NDDC demo (HPE Las Vegas event)"
                            description="For easier sets up a gateway, we can creat genial softwares. Website - what I wrote - sets up aruba devices from anywhere. This worldwide reachable website was presented on HPE Las Vegas 2023 event!"
                            ghLink="https://arubanddc.azurewebsites.net/main"
                            demoLink="/nddc"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={HPEPW}
                            isBlog={false}
                            title="Bios pasword for HP notebooks"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            demoLink="/poweron"
                        />
                    </Col>
                </Row>
            </>}
            {
            choosen === "pressmen" &&
            <><div style={{maxWidth:800, margin:"auto"}}>
               
                <h3>Pressmen tanácsadó kft. </h3>
                <h4>(10.2022-present)</h4>
                <br/>
                <img src={pressmen} alt="02.2024-present" width="100" height="100"></img>
                <br/>
                <br/>
                <p style={{ textAlign: "justify" , fontSize:20}}>
                    I am working to Hewlett Packard as full time <span className="purple">Medior Softwaredeveloper</span>. I am working remotely in an <span className="purple"></span>international team.

                </p>
                <h4 style={{textAlign:"left", fontSize:30}}>Used tools</h4>
                <ul style={{fontSize:25}}>
                    <li className="about-activity">
                        <DiNodejs /> Nodejs
                    </li>
                    <li className="about-activity">
                        <DiJavascript1 /> Javascript
                    </li>
                    <li className="about-activity">
                        <SiFirebase /> Google Firebase
                    </li>
                    <li className="about-activity">
                        <FaUniversity /> Dataverse
                    </li>
                </ul>
                <br/>
                <h4 style={{textAlign:"left", fontSize:30}}>Projects:</h4>
                </div>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={VM}
                            isBlog={false}
                            title="Version monitoring"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            demoLink="/vm"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={CSE}
                            isBlog={true}
                            title="Vizualize ingram data"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://ms.csebusiness.hu/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={DATAVERSE}
                            isBlog={true}
                            title="Dataverse"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://dataverse.harvard.edu/"
                        />
                    </Col>
                </Row>
                
            </>}
            {
            choosen === "elte" &&
            <>
            <div style={{maxWidth:800, margin:"auto"}}>
              
                <h3>Eötvös Loránd Tudományegyetem </h3>
                <h4>(06.2020-09.2020)</h4>
                <br/>
                <img src={elte} alt="02.2024-present" width="100" height="100"></img>
                <br/>
                <br/>
                <p style={{ textAlign: "justify", fontSize:20}}>
                    I worked to ELTE University as <span className="purple">Full-time Softwaredeveloper</span>. I worked remotely on <span className="purple">HLA antibody research</span> project.

                </p>
                <h4 style={{textAlign:"left",fontSize:30}}>Used tools</h4>
                <ul style={{fontSize:25}}>
                    <li className="about-activity">
                        <DiHtml5 /> HTML5
                    </li>
                    <li className="about-activity">
                        <DiJavascript1 /> Javascript
                    </li>
                    <li className="about-activity">
                        <SiDotnet /> ASP.Net
                    </li>
                    <li className="about-activity">
                        <SiMysql /> SQL
                    </li>
                </ul>
                
                <br/>
                <h4 style={{textAlign:"left", fontSize:30}}>Projects:</h4>
                </div>
                <Row style={{ justifyContent: "center", paddingBottom: "10px"  , fontSize:20}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={HLA}
                            title="Chatify"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://chatify-49.web.app/"
                        />
                    </Col>
                </Row>
            </>}
            {
            choosen === "telekom" &&
            <>
            <div style={{maxWidth:800, margin:"auto"}}>
              
                <h3>Magyar Telekom </h3>
                <h4>(06.2018-09.2019)</h4>
                <br/>
                <img src={telekom} alt="02.2024-present" width="80" height="100"></img>
                <br/>
                <br/>
                <p style={{ textAlign: "justify"  , fontSize:20}}>
                    I worked at Hungarian Telekom as <span className="purple">Softwaredeveloper Intern</span>. I worked onsite and used integrated system of telekom. I programmed scripts to excel tables. Database handling and managing was also important task. General contracting of radio towers. 

                </p>
                <h4 style={{textAlign:"left",fontSize:30}}>Used tools</h4>
                <ul style={{fontSize:25}}>
                    <li className="about-activity">
                        <SiVisualstudio /> VBA Scripts
                    </li>
                    <li className="about-activity">
                        <SiMicrosoftexcel /> Excel datatables
                    </li>
                </ul>
                
                <br/>
                <h4 style={{textAlign:"left", fontSize:30}}>Projects:</h4>
                </div>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={TELEKOM}
                            isBlog={true}
                            title="Automatizied Excel sheet"
                            description="Addition of reports of general constructions automatically to an excel sheet and performance certificates can be attached to it."
                            ghLink="https://www.telekom.hu/lakossagi"
                        />
                    </Col>
                </Row>
            </>}
            {
            choosen === "schauer" &&
            <>
            <div style={{maxWidth:800, margin:"auto"}}>
              
                <h3>Schauer Hungária Kft. </h3>
                <h4>07.2017-08.2017 (Intern)</h4>
                <br/>
                <img src={schauer} alt="02.2024-present" width="200" height="80"></img>
                <br/>
                <br/>
                <p style={{ textAlign: "justify" , fontSize:20}}>
                    I worked at <span className="purple">Schauer</span> as <span className="purple">Softwaredeveloper intern</span>. I worked on <span className="purple">IRC System</span>. 
                </p>
                <h4 style= {{fontSize:30,textAlign:"left"}}>Used tools</h4>
                <ul style={{fontSize:25}}>
                    <li className="about-activity">
                        <SiSpring /> Spring
                    </li>
                    <li className="about-activity">
                        <DiJava /> Java
                    </li>
                    <li className="about-activity">
                        <SiVaadin /> Vaadin web designer
                    </li>
                    <li className="about-activity">
                        <DiPostgresql /> PostgreSQL
                    </li>
                </ul>
                
                <br/>
                <h4 style={{textAlign:"left", fontSize:30}}>Projects:</h4>
                </div>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={IRCS}
                            isBlog={true}
                            title="IRCS"
                            description="The Integrated Railway Communication System (IRCS) is a universal voice, data and video communication system. The functionality of the product family has been designed in such a way that, in addition to general communication uses, it also enables the satisfaction of special needs."
                            ghLink="https://www.schauer.hu/termekeink/integralt-kommunikacios-rendszerek"
                        />
                    </Col>
                </Row>
            </>}
</div>

    );
}

export default Experiences;
