import React from "react";
import construction from "./images/construction.png";
import fight from "./images/fight.jpg";
import database from "./images/database.jpg";
import text from "./images/text.jpg";
import gen from "./images/gen.jpg";
import "./Project.css";

export default function Project() {
    const projects = [
        {
            name: "Construction",
            gh: "https://github.com/d-lil/rob-the-builder.git",
            desc: "An app for requesting construction projects, as well as admin access to view and update projects",
            bg: construction,
            link: "https://rob-the-builder.herokuapp.com/"
        }, 
        {
            name: "Faux Fighting",
            gh: "https://github.com/sanmcc/lyric-dawg.git",
            desc: "A faux fighting app",
            bg: fight,
            link: "https://sanmcc.github.io/lyric-dawg/"
        },
        {
            name: "Employee Database",
            gh: "https://github.com/d-lil/ghost-in-the-shell-company.git",
            desc: "An employee database that allows for adding, editing, and deleting employees, roles, and departments",
            bg: database,
            link: "https://drive.google.com/file/d/1T_nMkLjWN7O-Uy_BdxJjyTCEhzn-Peaz/view"
        },
        {
            name: "Just Another Text Editor",
            gh: "https://github.com/d-lil/textual-feeling.git",
            desc: "A text editor app that has install capabilities",
            bg: text,
            link: "https://definitely-not-malware.herokuapp.com/"
        },
        {
            name: "README Generator",
            gh: "https://github.com/d-lil/extra-extra-readme-all-about-it.git",
            desc: "An app that generates a README file through the command line",
            bg: gen,
            link: ""
        }
    ];
    const projectList = projects.map((project, index) => {
        return (
        <div className="project" key={project.desc} 
        style={{backgroundImage: `url(${project.bg})`}}>
                <div className="project-writing">
                    <h3>{project.name}</h3>
                    <p>______________</p>
                    <p>{project.desc}</p>
                </div>
                <div className="links">
                    <a href={project.link}>
                        Deployed
                    </a>
                    <a href={project.gh}>
                            <img src="https://img.icons8.com/?size=1x&id=52539&format=png" />
                    </a>
                </div>
        </div>
    )});

    return (
        <div className="project-container">
            {projectList}
        </div>
    );
}