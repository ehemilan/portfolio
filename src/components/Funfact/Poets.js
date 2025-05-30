import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from 'react-player';

import video1 from '../../Videos/annak.mp4'
import video3 from '../../Videos/kozelet.mp4'
import video2 from '../../Videos/sors.mp4'
import video5 from '../../Videos/kutyadal.mp4'
import video4 from '../../Videos/szerettek.mp4'
import video6 from '../../Videos/iskola.mp4'
import video7 from '../../Videos/elsonap.mp4'
function Poets() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Eseménykezelő hozzáadása
    window.addEventListener('resize', handleResize);

    // Eseménykezelő eltávolítása a komponens unmountolásakor
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (windowWidth > 500 ?

    < div style={{ justifyContent: "center" , marginBottom: 50 }}>
      <h1 className="project-heading">
        My <strong className="purple">Poems </strong>
      </h1>
      <p style={{ color: "white", marginBottom: 40 }}>
        I wrote some poems in secondary school and I used Suno ai to create some background noise.
      </p>
      <Row style={{ justifyContent: "center" }}>

        <ReactPlayer
          url={video1}
          controls
          width="30%"
          height="auto"
        />
        <ReactPlayer
          url={video2}
          controls
          width="30%"
          height="auto"
        />
        <ReactPlayer
          url={video6}
          controls
          width="30%"
          height="auto"
        />
      </Row>

      <Row style={{ justifyContent: "center"}}>
        <ReactPlayer
          url={video4} // Vagy más videó URL-je
          controls
          width="30%"
          height="auto"
        />
        {/*<ReactPlayer
          url={video5} // Vagy más videó URL-je
          controls
          width="30%"
          height="auto"
        />*/}
<ReactPlayer
  url={video7}
  controls
  width="30%"
  height="auto"
/>
      </Row>
      
      {/*<Row style={{ justifyContent: "center"}}>

        <ReactPlayer
          url={video3}
          controls
          width="30%"
          height="auto"
        />
      </Row>*/}
    </div> :

    < div style={{ justifyContent: "center" , marginBottom: 50 }}>
      <h1 className="project-heading">
        My <strong className="purple">Poems </strong>
      </h1>
      <p style={{ color: "white", marginBottom: 40 }}>
        I wrote some poems in secondary school and I used Suno ai to create some background noise.
      </p>

      <Row style={{ justifyContent: "center", margin:10}}>

        <ReactPlayer
          url={video1}
          controls
          width="90%"
          height="auto"
        />
      </Row>
      <Row style={{ justifyContent: "center" , margin:10}}>

        <ReactPlayer
          url={video2}
          controls
          width="90%"
          height="auto"
        />
      </Row>
      {/*<Row style={{ justifyContent: "center" , margin:10}}>

        <ReactPlayer
          url={video3}
          controls
          width="90%"
          height="auto"
        />
      </Row>*/}
      <Row style={{ justifyContent: "center" , margin:10}}>

        <ReactPlayer
          url={video4}
          controls
          width="90%"
          height="auto"
        />
      </Row>
      {/*<Row style={{ justifyContent: "center", margin:10}}>

        <ReactPlayer
          url={video5}
          controls
          width="90%"
          height="auto"
        />
      </Row>*/}
      <Row style={{ justifyContent: "center", margin:10}}>

        <ReactPlayer
          url={video6}
          controls
          width="90%"
          height="auto"
        />
      </Row>
      <Row style={{ justifyContent: "center", margin:10}}>

        <ReactPlayer
          url={video7}
          controls
          width="90%"
          height="auto"
        />
      </Row>
    </div>
  )
}


export default Poets;