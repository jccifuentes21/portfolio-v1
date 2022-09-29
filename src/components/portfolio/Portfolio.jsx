import classes from "./Portfolio.module.css";
import { v4 as uuidv4 } from "uuid";

import GAME from "../../assets/2048.jpg";
import MyTrakr from "../../assets/MyTrakr.jpg";
import Fridgefy from "../../assets/Fridgefy.jpg";
import ReactMeals from "../../assets/ReactMeals.jpg";
import GreatQuotes from "../../assets/GreatQuotes.jpg";
import OnlineShop from "../../assets/OnlineShop.jpg";
import Tasks from "../../assets/Tasks.jpg";
import Twootr from "../../assets/Twootr.jpg";
import ExpenseTracking from "../../assets/ExpenseTracking.jpg";
import Meetups from "../../assets/Meetups.jpg";
import Tinylinks from "../../assets/Tinylinks.jpg";
import Project from "./Project";

const projects = [
  {
    id: uuidv4(),
    image: GAME,
    title: "2048 Clone with Vanilla JS only",
    github: "https://github.com/jccifuentes21/2048-Clone",
    demo: "https://jccifuentes21.github.io/2048-Clone/",
    technologies: "HTML, CSS, Vanilla Javascript",
    description:
      "A clone of the classic game 2048. Combine tiles of the same number in an attempt to create a tile with the value 2048. Optimized only for computer!",
  },
  {
    id: uuidv4(),
    image: ReactMeals,
    title: "React Meals",
    github: "https://github.com/jccifuentes21/React-Meals",
    demo: "https://jccifuentes21.github.io/React-Meals/",
    technologies: "HTML, CSS modules, React.js, Firebase Database",
    description:
      "A website for a restaurant, where the user can select meals and order them. The menu is fetched from a database, and the orders and user info is sent to it as well.",
  },
  {
    id: uuidv4(),
    image: Fridgefy,
    title: "Fridgefy",
    github: "https://github.com/jccifuentes21/Fridgefy",
    demo: "https://fridgefy-app.herokuapp.com/recipes",
    technologies: "HTML, CSS modules, Firebase Auth, Firestore DB",
    description:
      "A recipes website where you can search for recipes, log in to add ingredients to your fridge and add favorite recipes, as well as compare your items in your fridge with the items for the recipes. Optimized for computer only!",
  },
  {
    id: uuidv4(),
    image: Meetups,
    title: "Meetups",
    github: "https://github.com/jccifuentes21/Meetups",
    demo: "https://meetups-theta-flame.vercel.app/",
    technologies: "ReactJS, NextJS, MongoDB",
    description:
      "A website to organize meetups! All data is sent to a database contained within  MongoDB. Backend is created with NextJS",
  },
  {
    id: uuidv4(),
    image: MyTrakr,
    title: "MyTrakr; a bank app simulator",
    github: "https://github.com/jccifuentes21/MyTraker-App",
    demo: "https://mytrakr-jc.herokuapp.com/",
    technologies: "HTML, Bootstrap CSS, Vanilla Javascript, Node.js ",
    description:
      "A dummy bank app simulator, where users can add accounts, add balances, transfer money between accounts and withdraw money.",
  },
  {
    id: uuidv4(),
    image: Tinylinks,
    title: "Tinylinks",
    github: "https://github.com/jccifuentes21/tinylinks",
    demo: "https://tinylinks-jccm.herokuapp.com/",
    technologies: "Node.js, EJS, Bootstrap, Bcrypt, Cookie Session ",
    description:
      "A website where the user can register and add links to be shortened. User registration as well as data is stored in a JSON file in the backend. The user password is encrypted using bcrypt, and cookies are encrypted with cookie session.",
  },
  {
    id: uuidv4(),
    image: Twootr,
    title: "Twootr",
    github: "https://github.com/jccifuentes21/Twootr",
    demo: "https://twootr-jc.herokuapp.com/",
    technologies: "HTML, CSS modules, React.js, Node.js",
    description:
      "A twitter clone with a twist. Users choose their username on the website and twoot their thoughts. Twoots and user info are sent to a server created in Node.js.",
  },
  {
    id: uuidv4(),
    image: GreatQuotes,
    title: "GreatQuotes Website",
    github: "https://github.com/jccifuentes21/react-router-project",
    demo: "https://jccifuentes21.github.io/react-router-project/",
    technologies: "HTML, CSS modules, React.js, Firebase Database",
    description:
      "The website consists of a React app where the user can view quotes, add quotes, or comment on quotes. It is similar to a blog! Quotes and comments are sent to a firebase database, and are retrieved on load.",
  },
  {
    id: uuidv4(),
    image: OnlineShop,
    title: "Online Shop",
    github: "https://github.com/jccifuentes21/react-redux-advanced",
    demo: "https://jccifuentes21.github.io/react-redux-advanced",
    technologies: "HTML, CSS modules, React.js ",
    description:
      "A react app that will simulate a store where you can add items to a cart. The main focus is async functions and side effects in react-redux",
  },
  {
    id: uuidv4(),
    image: Tasks,
    title: "Tasks App",
    github: "https://github.com/jccifuentes21/custom-hooks-real-example",
    demo: "https://jccifuentes21.github.io/custom-hooks-real-example/",
    technologies: "HTML, CSS modules, React.js",
    description:
      "A React project with a more realistic example of custom hooks. A simple task app that send tasks to a database from firebase.",
  },
  {
    id: uuidv4(),
    image: ExpenseTracking,
    title: "Expense Tracking App",
    github: "https://github.com/jccifuentes21/ExpenseTracking-App",
    demo: "https://jccifuentes21.github.io/ExpenseTracking-App",
    technologies: "HTML, CSS modules, React.js",
    description: 'A simple react app where the user can track their expenses.'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${classes.portfolio__container}`}>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
