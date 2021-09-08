import {useRouter} from 'next/router';

export function Navigation(props) {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        const href = e.target.href;
        const origin = window.location.origin;
        const route = href.replace(origin, '');
        router.push(route);
    }

    const routes = {
        projects: {
            name: 'Projects',
            href: '/projects',
        },
        about: {
            name: 'About',
            href: '/about',
        },
        contact: {
            name: 'Contact',
            href: '/contact',
        }
    }
    let navLinks;


    console.log(router)
    let projects;
    if (props.projects) {
        projects = <ul>
            {
                props.projects.map((project, index) => (
                    <li key={index}>
                        <a href="#">
                            {project.title}
                        </a>
                    </li>
                ))
            }
        </ul>
        routes.projects.children = projects;
    }

    return (
        <nav>
            <div id="nav" role="navigation" className={props.className}>

                <a href="/">
                    <h3>
                        Kyle Peterson
                    </h3>
                </a>

                <div>
                    <ul>
                        {
                            Object.values(routes).map((link,index) => (
                                <li key={index}>
                                    <a href={link.href} onClick={handleClick} className={`nav-link${link.href == router.route ? ' active' : ''}`}>
                                        {link.name}
                                    </a>
                                    {link.children}
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </nav>
    )
}