import fetch from 'node-fetch'
import Head from 'next/head'
import styles from '../scss/components/projects.module.scss'
import {ProjectsLayout} from '../components/ProjectsLayout'

function Projects({projects}) {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ProjectsLayout projects={projects}>
        <main>
          <div className={styles.main}>
            <h1>Projects</h1>
            <div className={styles.projects}>
              {projects.map((project, index) => (
                <a key={index} className={styles.project} href="#">
                  <h2>
                    {project.title}
                  </h2>
                  <p>
                    {project.summary}
                  </p>
                  <ul className={styles.tags}>
                    {project.tags.split(',').map(tag => (
                      <li key={tag.toLowerCase().trim().replace(/ /g, '_')}>
                        <span className={styles.tag}>
                          {tag.trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
          </div>
        </main>
      </ProjectsLayout>

    </div>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('http://local.personal/projects-json');
    const projects = await res.json();
    console.log(projects);
    return {
      props: {
        projects,
      },
      revalidate: 1,
    }
  }
  catch (error) {
    console.log(error);
    return ({
      props:{}
    })
  }
  
  
}

export default Projects
