import classes from "./Portfolio.module.css";

import GAME from "../../assets/2048.jpg";
import MyTrakr from "../../assets/MyTrakr.jpg";
import Fridgefy from "../../assets/Fridgefy.jpg";
import ReactMeals from "../../assets/ReactMeals.jpg";
import GreatQuotes from "../../assets/GreatQuotes.jpg";
import OnlineShop from "../../assets/OnlineShop.jpg";
import Tasks from "../../assets/Tasks.jpg";
import Twootr from "../../assets/Twootr.jpg";
import ExpenseTracking from "../../assets/ExpenseTracking.jpg";
import Project from "./Project";

const projects = [
  {
    id: "p-1",
    image: GAME,
    title: "2048 Clone with Vanilla JS only",
    github: "https://github.com/jccifuentes21/2048-Clone",
    demo: "https://jccifuentes21.github.io/2048-Clone/",
    technologies: "HTML, CSS, Vanilla Javascript",
    description:
      "A clone of the classic game 2048. Combine tiles of the same number in an attempt to create a tile with the value 2048. Optimized only for computer!",
  },
  {
    id: "p-2",
    image: ReactMeals,
    title: "React Meals",
    github: "https://github.com/jccifuentes21/React-Meals",
    demo: "https://jccifuentes21.github.io/React-Meals/",
    technologies: "HTML, CSS modules, React.js, Firebase Database",
    description:
      "A website for a restaurant, where the user can select meals and order them. The menu is fetched from a database, and the orders and user info is sent to it as well.",
  },
  {
    id: "p-3",
    image: Fridgefy,
    title: "Fridgefy",
    github: "https://github.com/jccifuentes21/Fridgefy",
    demo: "https://fridgefy-app.herokuapp.com/recipes",
    technologies: "HTML, CSS modules, Firebase Auth, Firestore DB",
    description:
      "A recipes website where you can search for recipes, log in to add ingredients to your fridge and add favorite recipes, as well as compare your items in your fridge with the items for the recipes. Optimized for computer only!",
  },
  {
    id: "p-4",
    image: MyTrakr,
    title: "MyTrakr; a bank app simulator",
    github: "https://github.com/jccifuentes21/MyTraker-App",
    demo: "https://mytrakr-jc.herokuapp.com/",
    technologies: "HTML, Bootstrap CSS, Vanilla Javascript, Node.js ",
    description:
      "A dummy bank app simulator, where users can add accounts, add balances, transfer money between accounts and withdraw money.",
  },
  {
    id: "p-5",
    image: Twootr,
    title: "Twootr",
    github: "https://github.com/jccifuentes21/Twootr",
    demo: "https://twootr-jc.herokuapp.com/",
    technologies: "HTML, CSS modules, React.js, Node.js",
    description:
      "A twitter clone with a twist. Users choose their username on the website and twoot their thoughts. Twoots and user info are sent to a server created in Node.js.",
  },
  {
    id: "p-6",
    image: GreatQuotes,
    title: "GreatQuotes Website",
    github: "https://github.com/jccifuentes21/react-router-project",
    demo: "https://jccifuentes21.github.io/react-router-project/",
    technologies: "HTML, CSS modules, React.js, Firebase Database",
    description:
      "The website consists of a React app where the user can view quotes, add quotes, or comment on quotes. It is similar to a blog! Quotes and comments are sent to a firebase database, and are retrieved on load.",
  },
  {
    id: "p-7",
    image: OnlineShop,
    title: "Online Shop",
    github: "https://github.com/jccifuentes21/react-redux-advanced",
    demo: "https://jccifuentes21.github.io/react-redux-advanced",
    technologies: "HTML, CSS modules, React.js ",
    description:
      "A react app that will simulate a store where you can add items to a cart. The main focus is async functions and side effects in react-redux",
  },
  {
    id: "p-8",
    image: Tasks,
    title: "Tasks App",
    github: "https://github.com/jccifuentes21/custom-hooks-real-example",
    demo: "https://jccifuentes21.github.io/custom-hooks-real-example/",
    technologies: "HTML, CSS modules, React.js",
    description:
      "A React project with a more realistic example of custom hooks. A simple task app that send tasks to a database from firebase.",
  },
  {
    id: "p-9",
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
