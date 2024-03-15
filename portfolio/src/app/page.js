// import { Button } from '@/components/ui/button';
import './page.css'
import Button from './button';
import Button2 from './button2';
// import { useState } from 'react'
// import './assets/css/fonts.css';

async function getStrapiData(path) {
  const baseUrl = "http://localhost:1337";

  try {
    const response = await fetch(baseUrl + path, { method: 'GET' });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export const dynamic = 'force-dynamic'; // next js is does a static render, caches api responses to improve performance. By doing this we force Next js to render dynamically;
export default async function Home() {
  const homePage = await getStrapiData("/api/home-page");
  const projectPage = await getStrapiData("/api/project");
  const experiencePage = await getStrapiData("/api/experience");
  const aboutPage = await getStrapiData("/api/about");
  const meet = homePage.data.attributes.greet;
  const title = homePage.data.attributes.title;
  const description = homePage.data.attributes.description;
  const call_to_action = homePage.data.attributes.call_to_action;
  const phone_number = homePage.data.attributes.phone_number;
  const email = homePage.data.attributes.email;
  const nav_info = homePage.data.attributes.nav.split(";");//
  //console.log("Home page: " + nav_info[0]);

  const project_title = projectPage.data.attributes.title;
  const experience_title = experiencePage.data.attributes.title;
  const about_title = aboutPage.data.attributes.title;

  const agape_title = projectPage.data.attributes.agape_title;
  const fumane_title = projectPage.data.attributes.fumane_title;
  const outfit_highlighters_title = projectPage.data.attributes.outfit_highlighters_title;
  const project_description = projectPage.data.attributes.project_description;
  const sub_heading = projectPage.data.attributes.sub_heading;
  const project_info = projectPage.data.attributes.project_info;
  const agape_url = projectPage.data.attributes.agape_url;
  const fumane_url = projectPage.data.attributes.fumane_url;
  const outfit_highlighters_url = projectPage.data.attributes.outfit_highlighters_url;

  const skills = experiencePage.data.attributes.skills.split(";");
  const experience_summmary = experiencePage.data.attributes.experience_summmary.split("|");
  const experience_summmary2 = experiencePage.data.attributes.experience_summmary2.split("|");
  const skills_title = experiencePage.data.attributes.skills_title;
  const downloadCv = experiencePage.data.attributes.downloadCv;
  const job_history = experiencePage.data.attributes.job_history;
  const job_history2 = experiencePage.data.attributes.job_history2;

  const about_me = aboutPage.data.attributes.about_me.split("|");

  function NavInfo() {
    let list = [];
    nav_info.forEach((item, index) => {
      list.push(<li key={index}><a href={'#' + item}>{item}</a></li>);

    });
    return <ul>{list}</ul>;
  }

  function Skills() {
    let list = [];
    skills.forEach((item, index) => {
      list.push(<li key={index}><span>{item}</span></li>);

    });
    return <div><ul>{list}</ul></div>;
  }

  function Experience({ position }) {
    let list = [];
    let array = position;
    array.forEach((item, index) => {
      let point = item.split(";");
      let topic = point[0];
      let description = point[1];
      list.push(<div className='sub_points'><span>{topic}</span><div className='sub_description block'><p className='block'>{description}</p></div><br></br><br></br></div>);

    });
    return <div className="points">{list}</div>;
  }


  // const [click, setClick] = useState("hide");

  // function handleClick() {

  //   (click) ? setClick("hide") : setClick("")
  //   contact_details.classList.remove("hide");

  // }

  //console.log("Home page: " + homePage.data.attributes.nav);
  return (
    <>
      <div id="home">
        <nav id="nav" className='special_font'>
          <NavInfo />
        </nav>
        <div className='home_text'>
          <div id="meet" className='special_font'><p>{meet}</p></div>
          <h1 id="title" className='special_font'>{title}</h1>
          <div id="description" className='special_font'><p>{description}</p></div>
          <Button call_to_action={call_to_action} phone_number={phone_number} email={email} />
          {/* <div id="contact_details" className='contact_details'><p>{phone_number} | {email}</p></div> */}
        </div>
      </div >
      <div id="Projects" className='page'>
        <h1 className='headings special_font'>{project_title}</h1>
        <div className="display-projects">
          <div className='card'>
            <a href={agape_url}><img src='http://localhost:1337/uploads/agape_website_31b3405d78.png' /></a>
            <p>{agape_title}</p>
          </div>

          <div className='card'>
            <a href={fumane_url}><img src='http://localhost:1337/uploads/fumane_website_e447c1c003.png' /></a>
            <p>{fumane_title}</p>
          </div>

          <div className='card'>
            <a href={outfit_highlighters_url}><img src='http://localhost:1337/uploads/outfit_highlighter_website_a6d2295494.png' /></a>
            <p>{outfit_highlighters_title}</p>
          </div>
        </div>
        <div className='project_description'>
          <h2 className='special_font sub_headings'>{sub_heading}</h2>
          <p>{project_description}</p>
        </div>
        <h2 className='special_font '>{project_info}</h2>
      </div>
      <div id="Experience" className='page'>
        <h1 className='headings special_font'>{experience_title}</h1>
        <Button2 call_to_action={downloadCv} />
        <h2 className='special_font sub_headings'>{skills_title}</h2>
        <Skills />
        <h2 className='special_font sub_headings'>{job_history}</h2>
        <Experience position={experience_summmary} />
        <h2 className='special_font sub_headings'>{job_history2}</h2>
        <Experience position={experience_summmary2} />
      </div>
      <div id="About" className='page'>
        <h1 className='headings special_font'>{about_title}</h1>
        <div className='container'><Experience position={about_me} /></div>
      </div>

    </>
  );
}

