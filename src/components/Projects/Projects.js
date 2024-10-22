import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="JSW Travel Odisha"
              description="Developed an internal cab facility mobile app for Jindal Steel Works, Bhadrashahi, with multi-tier approval workflows involving employees, managers, and admins to optimize ride-sharing and enhance transportation efficiency."
              apLink="https://apps.apple.com/us/app/jsw-tr-isha/id6670152089"
              psLink="https://play.google.com/store/apps/details?id=com.jsw_vms"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="JSW Driver"
              description="Created a driver-facing mobile app for Jindal Steel Works, enabling drivers to manage and track their assigned trips efficiently."
              apLink="https://apps.apple.com/us/app/jsw/id6670189652"
              psLink="https://play.google.com/store/apps/details?id=com.jsw_d"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cleannet SAP"
              description="Created an app for CleanNet's Service Assurance Program (SAP), which tracks cleaning services and notifies stakeholders if a scheduled service day is missed, enabling corrective actions to be taken promptly."
              apLink="itms-services://?action=download-manifest&url=https://www.cleannetusa.com/wp-content/uploads/apps/SAP/SAPInfo.plist"
              psLink="https://play.google.com/store/apps/details?id=com.cleannetUSA.SAP&hl=en_IN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Cleannet Inspection USA"
              description="Developed an internet-based app for CleanNet that assesses service quality against cleaning specifications. The app reviews and scores various facility tasks, providing insights for performance improvements."
              apLink="itms-services://?action=download-manifest&url=https://www.cleannetusa.com/wp-content/uploads/apps/Inspection/InspectionInfo.plist"
              psLink="https://play.google.com/store/apps/details?id=com.Cleannetusaapp.Inspection&hl=en_IN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Aspire Active Camps"
              description="Developed a user-friendly mobile app for parents to seamlessly book events and manage their children’s participation in Aspire Active Camps. The app simplifies event registration, provides real-time updates, and offers a secure way for parents to track their children’s activities during sports and holiday camps. The app integrates payment options, including childcare vouchers, and ensures data security while enhancing communication between camp organizers and parents, creating a smooth, reliable experience."
              apLink="https://apps.apple.com/gb/app/aspire-active-camp/id1523642821?ign-mpt=uo%3D2"
              psLink="https://play.google.com/store/apps/details?id=com.aspiresports.booking"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Aspire Teams"
              description="Developed a mobile app to manage children at sports camp venues, enabling staff and employees to handle day-to-day activities, scheduling, and progress tracking efficiently."
              apLink="https://apps.apple.com/gb/app/aspire-team/id1523599055"
              psLink="https://play.google.com/store/apps/details?id=com.aspiresports.team&hl=en_IN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="xTimesheet"
              description="Mobile app to track the time a particular employer has worked during a certain period."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
