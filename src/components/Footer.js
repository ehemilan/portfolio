
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail ,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const destinationEmail= "hormilag@gmail.com";
  const subject="Job Opportunity";
  const message = `
    Dear Milán Horváth,

    I hope this email finds you well.

    I am writing to you on behalf of [Your Company Name], a leading [industry/sector] company known for [brief description of your company's mission, values, or notable achievements].

    We are excited to inform you about a fantastic job opportunity that we believe matches your skills and experience perfectly. We are currently seeking a talented individual to join our team as a [Job Title]. 

    [Describe the role briefly, highlighting key responsibilities and qualifications.]

    At [Your Company Name], we offer a dynamic work environment where innovation is encouraged, and employees are empowered to grow both personally and professionally. We value diversity, creativity, and dedication, and we believe that every team member plays a crucial role in our success.

    If you are passionate about [mention any specific aspect of the role or industry], we would love to hear from you. Please find attached the job description for more details.

    Feel free to reach out to me directly at [Your Contact Information] if you have any questions or would like to discuss this opportunity further.

    Thank you for considering joining our team. We look forward to potentially working together to achieve great things.

    Best regards,

    [Your Name]
    [Your Position]
    [Your Company Name]
    [Your Contact Information]
  `
  function OpenOutlook()  {
    const mailtoUrl = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <Container fluid className="footer" style={{position:"fixed", bottom:0, backgroundColor:"#000020"}}>
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Milán Horváth's portfolio</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/b1v655"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/horv%C3%A1th-mil%C3%A1n-a175b3179/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={`mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail  onClick={OpenOutlook} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/hormilag/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
