import React, { Component } from "react";
import "./CourseContent";

class CourseContent extends Component {
  render() {
    return (
      <div class="container">
        <div class="course-item">
          <img src="image1.jpg" alt="Course 1" />
          <div class="course-description">
            <h3>Course Title 1</h3>
            <p>Brief description of Course 1.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseContent;
