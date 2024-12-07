// src/components/CourseList.js
import React from "react";

function CourseList() {
    const courses = ["React Basics", "Git Essentials", "Cybersecurity 101"]; // Example courses

    return (
        <div>
            <h2>Course List</h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;