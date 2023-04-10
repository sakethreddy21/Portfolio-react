import React from 'react';
import IMG1 from '../../assets/first portfolio2.jpeg';
import IMG2 from '../../assets/analyzer.jpeg';
import IMG3 from '../../assets/portfolio3.jpg';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'portfolio',
      img: IMG1,
      description:
        'First Portfolio made with only HTML,CSS and JS',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://portfolio-nine-beta-44.vercel.app/',
      github: 'https://github.com/sakethreddy21/portfolio',
    },
    {
      id: 2,
      title: 'Diabectic analyzer',
      img: IMG2,
      description:
        'A Machine learning application that can predict diabetes',
      technologies: 'React | Flask | Machine Learning',
      link: '',
      github: 'https://github.com/sakethreddy21/-diabecticspredictor2',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG3,
      description: 'User friendly  CRUD application to plan your day and manage tasks',
      technologies: 'React | Expressjs | PostgresSQL ',
      link: '',
      github: 'https://github.com/sakethreddy21/To_Do_APP-PERN-',
    },
    {
      id: 4,
      title: 'Fish Species Classfication',
      img: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ',
      description:
        'Smart India Hackthon project that to predict medditterian fish species in help of marine life ',
      technologies: 'Python | Convulational Neural Networks',
      link: '',
      github: 'https://github.com/sakethreddy21/SIH-PROJECT',
    },
    {
      id: 5,
      title: 'Leaves and OD Application',
      img: 'https://www.proprofssurvey.com/templates/web-form-survey/online_forms_survey.png',
      description:
        'Real-world group project fully responsive interactive website built based on React and Express to apply leaves and OD for SRM UNVIERSITY',
      technologies: 'React | Express |PostgresSQL',
      link: '',
      github: 'https://github.com/sakethreddy21/College-Application',
    },
    {
      id: 6,
      title: 'OPEN SOURCE',
      img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Ys3dqqOw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/kq5mr0b0rvvtge8886xq.png',
      description:
        'Findings Bugs and adding features to public and open source community repos',
      technologies: 'React',
      link: '',
      github: 'https://github.com/sakethreddy21?tab=repositories',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;