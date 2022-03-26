import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 0,
        title: "Pick of the Day",
        languages: "java 8",
        image:"",
        description: "This application keeps track of what the user is reading/watching and keeps a record of it in a file. The user can choose at random what to watch or read and can mark them as completed, removing them from the file or mark where they left off.",
        deployed: "https://drive.google.com/file/d/1ZEqfNSFtg5zZYfOKlmQ5l_TEVub7hwS5/view",
        repo: "https://github.com/jenellemillison/Pick_of_the_Day",
    },
    {
        id: 1,
        title: "My Night Sky",
        languages: "html, css, bulma, javascript",
        image:"",
        description: "A website for astronomy lovers to see where the ISS is according to their location and what phase of the moon it currently is.",
        deployed: "https://coevpen.github.io/my-night-sky/",
        repo: "https://github.com/coevpen/my-night-sky",
    },
    {
        id: 2,
        title: "We Rate Pets",
        languages: "nodejs, javascript, mysql, handlebars, sequelize, express",
        image:"",
        description: "We Rate Pets is a social media site where you can upload photos of your pets and view others. You can leave comments on the photo posts and rate the pet! The idea was based on We Rate Dogs but broadens it to all animals/pets. You can browse the site or create an account to share and comment.",
        deployed: "https://infinite-sea-93313.herokuapp.com/",
        repo: "https://github.com/jessebubble/we-rate-pets",
    },
    {
        id: 3,
        title: "Weather Forecast",
        languages: "html, css, javascript, openweather api",
        image:"",
        description: "A site that provides the 5-day weather forecast based on the city name searched. It saves search history as buttons for easy searches.",
        deployed: "https://coevpen.github.io/weather-forecast/",
        repo: "https://github.com/coevpen/weather-forecast",
    },
    {
        id: 4,
        title: "JavaScript Timed Quiz",
        languages: "html, css, javascript",
        image:"",
        description: "A timed quiz about javascript. It takes time off the clock for every wrong answer and provides an ending high score.",
        deployed: "https://coevpen.github.io/javascript-time-quiz/",
        repo: "https://github.com/coevpen/javascript-time-quiz",
    },
    {
        id: 5,
        title: "My Portfolio",
        languages: "html, css",
        image:"",
        description: "This was the first website I made. It's my portolio with some beginning projects.",
        deployed: "https://coevpen.github.io/myportfolio/",
        repo: "https://github.com/coevpen/myportfolio",
    }
];



function Portfolio(){
    return (
        <div>
            <Project projects={projects}/>
        </div>
    );
}

export default Portfolio;