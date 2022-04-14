import React from 'react';
import Project from './Project';
import PickOfTheDay from '../../../../assets/images/pick-of-the-day.jpg';
import NightSky from '../../../../assets/images/my-night-sky.jpg';
import RatePets from '../../../../assets/images/we-rate-pets.jpg';
import PokeTeams from '../../../../assets/images/poketeams.jpg';
import BasicPort from '../../../../assets/images/portfolio.jpg';
import Weather from '../../../../assets/images/weather-forecast.jpg';

// creates an array of the projects to be displayed
const projects = [
    {
        id: 0,
        title: "Pick of the Day",
        languages: "Java 8, JavaFX SceneBuilder 2.0",
        image: PickOfTheDay,
        description: "This application keeps track of what the user is reading/watching and keeps a record of it in a file. The user can choose at random what to watch or read and can mark them as completed, removing them from the file or mark where they left off.",
        deployed: "https://drive.google.com/file/d/1ZEqfNSFtg5zZYfOKlmQ5l_TEVub7hwS5/view",
        repo: "https://github.com/jenellemillison/Pick_of_the_Day",
    },
    {
        id: 1,
        title: "My Night Sky",
        languages: "HTML, CSS, Bulma, JavaScript",
        image: NightSky,
        description: "A website for astronomy lovers to see where the ISS is according to their location and what phase of the moon it currently is. A weather report is provided to indicate how well you will be able to see the night sky.",
        deployed: "https://coevpen.github.io/my-night-sky/",
        repo: "https://github.com/coevpen/my-night-sky",
    },
    {
        id: 2,
        title: "We Rate Pets",
        languages: "Node.js, JavaScript, MySQL, Express Handlebars, Sequelize, Express",
        image: RatePets,
        description: "We Rate Pets is a social media site where you can upload photos of your pets and view others. You can leave comments on the photo posts and rate the pet! The idea was based on We Rate Dogs but broadens it to all animals/pets. You can browse the site or create an account to share and comment.",
        deployed: "https://infinite-sea-93313.herokuapp.com/",
        repo: "https://github.com/jessebubble/we-rate-pets",
    },
    {
        id: 3,
        title: "Weather Forecast",
        languages: "HTML, CSS, JavaScript, OpenWeather API",
        image: Weather,
        description: "A site that provides the 5-day weather forecast based on the city name searched. It saves search history as buttons for easy searches.",
        deployed: "https://coevpen.github.io/weather-forecast/",
        repo: "https://github.com/coevpen/weather-forecast",
    },
    {
        id: 4,
        title: "PokeTeams",
        languages: "HTML, CSS, JavaScript, GraphQL, React, Apollo Client, Tailwind",
        image: PokeTeams,
        description: "A site that lets you build your dream pokemon team (or teams!).",
        deployed: "https://evening-mountain-59213.herokuapp.com/",
        repo: "https://github.com/fmills89/poke-teams-builder",
    },
    {
        id: 5,
        title: "My Basic Portfolio",
        languages: "HTML, CSS",
        image: BasicPort,
        description: "This was the first website I made. It's my portolio with some beginning projects.",
        deployed: "https://coevpen.github.io/myportfolio/",
        repo: "https://github.com/coevpen/myportfolio",
    }
];


// sends the array as props to the project file and is rendered
function Portfolio(){
    return (
        <div>
            <Project projects={projects}/>
        </div>
    );
}

export default Portfolio;