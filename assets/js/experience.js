AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Scientist Intern",
    cardImage: "assets/images/experience-page/\alpha ai.png",
    place: "Alpha AI",
    time: "(June, 2021 - July, 2021)",
    desp: "<li>Deployed a recommendation system that suggests user profiles based on user's interest.</li> <li>Deployed a reverse image search system that helps in recommending blogs, posts based on user preference.</li> <li>Collaborated with team members and developed the workflow of the live project</li>",
  },
  {
    title: "Data Analyst Intern",
    cardImage: "assets/images/experience-page/shape ai.png",
    place: "Devtown(formerly known as Shape AI)",
    time: "(Mar - June, 2021)",
    desp: "<li>Worked upon various topics like Machine Learning, Unsupervised Learning, Neural Networks.</li><li>Presented and implemented a Generative Adversarial Network(GAN) for generating MNIST hand-written digits.</li>",
  },
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/freelance.jpg",
    place: "Freelance work",
    time: "(January, 2021 - February, 2021)",
    desp:"<li>Worked together with a Dehradun based local enterprise and helped them grow their business by providing important insights.</li><li>Analyzed their dataset and used data analytics techniques to aid this outlet in boosting their sales by 52%, while also improving their operational efficiency.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);



