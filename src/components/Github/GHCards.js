import React, {useEffect, useState}from "react";
import Axios from "axios";
import RepoCard from "./RepoCard";
import { Col, Container, Row } from "react-bootstrap";


    
function GitHubCards() {
    const [repo, setRepo] = useState(null);
    const [language, setLanguage] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const api_key = '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';
  
        try {
          const reposResponse = await Axios.get(`https://api.github.com/users/b1v655/repos`, {
            headers: {
              Authorization: `token ${api_key}`,
            },
          });
  
          /*let lang = {};
  
          // Cached language data
          if (localStorage.getItem("lang")) {
            lang.data = JSON.parse(localStorage.getItem("lang"));
          } else {
            const languageResponse = await Axios.get("https://github-lang-deploy.herokuapp.com/");
            lang.data = languageResponse.data;
            localStorage.setItem("lang", JSON.stringify(lang.data));
            setLanguage(lang.data);
          }
  */
          setRepo(reposResponse.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    const compareAndSort = () => {
      if (repo) {
        const sortedRepo = [...repo].sort((a, b) => {
          if (a.stargazers_count > b.stargazers_count) return -1;
          else if (a.stargazers_count < b.stargazers_count) return 1;
          else if ((a.stargazers_count = b.stargazers_count)) {
            if (a.forks_count > b.forks_count) return -1;
            else if (a.forks_count < b.forks_count) return 1;
            else return 0;
          }
        });
        return sortedRepo;
      }
      return null;
    };
  
    const reducedrepo = compareAndSort();
  
    return (
      <Container >
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {reducedrepo?.map((data, i) => (
            <Col md={4} className="project-card" key={i}>
              
            <a href={data.html_url} target="_blank"
                rel="noopener noreferrer" style={{textDecoration:"none"}}>
              <RepoCard repo={data} language={null} />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default GitHubCards;