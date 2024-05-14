import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import CustomModal from "../../utils/CustomModal";
import CustomDangerousModal from "../../utils/CustomDangerousModal";
import { projectCredentials } from "../../portfolio";
import { Fade } from "react-reveal";
import "./ProjectCard.css";

const ProjectCard = ({ key, id, theme, value, hostedURL, deployURL }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
    default_branch,
    is_active,
    languages,
  } = value;

  const [showModal, setShowModal] = useState({
    isShow: false,
    title: "",
    body: "",
  });

  const [showDangerousModal, setShowDangerousModal] = useState({
    isShow: false,
    title: "",
    body: ``,
  });

  const showCreds = () => {
    setShowDangerousModal({
      isShow: true,
      title: `${name} Credentails`,
      body: projectCredentials[name],
    });
  };

  const buildProject = async () => {
    try {
      const resp = await axios.post(deployURL, {
        project: name,
        params: ["setupProject", name, svn_url, default_branch, "false"],
      });

      setShowModal({
        isShow: true,
        title: "Deployment in progress!",
        body:
          "You have initiated the deployment process for the project. Please wait until the deployment timer ends and click on the refresh button to access the hosted application. In case, the 'View App' button is still disabled, please wait a few seconds and refresh again.",
        showProgress: true,
      });
    } catch (e) {
      setShowModal({
        isShow: true,
        title: "Action Failed!!!",
        body:
          "We are unable to deploy the project at the moment. Please try again later.",
      });
    }
  };

  const CardButtons = () => {
    return (
      <div style={{}} className="d-grid gap-2 d-md-block">
        <a
          target="_blank"
          rel="noreferrer"
          href={svn_url}
          className="btn btn-outline-secondary mx-2"
        >
          <i className="fab fa-github" /> Source Code
        </a>
        <button onClick={buildProject} className="btn btn-outline-danger mx-2">
          <i className="fas fa-wrench" /> Deploy
        </button>

        <button
          className="btn btn-outline-success mx-2 customdisabledhover"
          onClick={() => {
            window.open(hostedURL, "_blank");
          }}
          disabled={!is_active}
        >
          <i className="far fa-eye" /> View App
        </button>

        <button
          className="btn btn-outline-dark mx-2 customdisabledhover"
          onClick={showCreds}
        >
          <i className="fa fa-user-secret" /> Creds
        </button>
      </div>
    );
  };

  return (
    // <Fade bottom duration={2000} distance="40px" style={{ display: "flex" }}>

    <Col sm={12} md={12} lg={6}>
      <CustomDangerousModal
        title={showDangerousModal.title}
        body={showDangerousModal.body}
        show={showDangerousModal.isShow}
        setShow={setShowDangerousModal}
      />
      <CustomModal
        title={showModal.title}
        body={showModal.body}
        show={showModal.isShow}
        setShow={setShowModal}
        showProgress={showModal.showProgress === true}
        progressPeriod={59}
      />
      <Card
        className="card shadow-lg p-3 mb-5 rounded"
        style={{ background: "transparent" }}
      >
        <Card.Title as="h5">
          {(
            <b style={{ fontSize: "1em" }} className="customheading2">
              {name}
            </b>
          ) || <Skeleton />}{" "}
        </Card.Title>
        <Card.Text>
          <b
            style={{
              height: "150px",
              display: "block",
            }}
          >
            {!description ? "" : description || <Skeleton count={3} />}{" "}
          </b>
        </Card.Text>
        {svn_url ? (
          <CardButtons
            name={name}
            default_branch={default_branch}
            svn_url={svn_url}
            hostedURL={hostedURL}
            deployURL={deployURL}
          />
        ) : (
          <Skeleton count={2} />
        )}

        <hr />
        {languages_url ? (
          <Language data={languages} repo_url={svn_url} />
        ) : (
          <Skeleton count={3} />
        )}
        {value ? (
          <CardFooter
            star_count={stargazers_count}
            repo_url={svn_url}
            pushed_at={pushed_at}
          />
        ) : (
          <Skeleton />
        )}
      </Card>
    </Col>
    // </Fade>
  );
};

const Language = ({ data, repo_url }) => {
  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <a
              key={language}
              className="card-link"
              href={repo_url + `/search?l=${language}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge bg-light text-dark">
                {language}:{" "}
                {Math.trunc((data[language] / total_count) * 1000) / 10} %
              </span>
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target="_blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
