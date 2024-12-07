// src/components/ActivityFeed.js
import React from "react";

function ActivityFeed() {
    const activities = [
        "React Basics completed by John",
        "Git Essentials started by Alice",
        "Cybersecurity 101 updated by Admin",
    ]; // Example activities

    return (
        <div>
            <h2>Activity Feed</h2>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
        </div>
    );
}

export default ActivityFeed;