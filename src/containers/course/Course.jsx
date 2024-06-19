import React, { Component } from "react";
import "./Course.css";
import { Fade } from "react-reveal";
import CourseContent from "../../components/courseContent/CourseContent";

class Course extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div id="course">
        <div className="course-header-div"></div>
        <Fade bottom duration={2000} distance="20px">
          <h1 className="course-header" style={{ color: theme.text }}>
            Shoulder Pain Relief
            <CourseContent />
          </h1>
        </Fade>
      </div>
    );
  }
}

export default Course;
