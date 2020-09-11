import {useRouter} from 'next/router';

export function Navigation() {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        var href = e.target.href;
        var origin = window.location.origin;
        var route = href.replace(origin, '');
        router.push(route);
    }

    return (
        <div id="nav" role="navigation">
            <a href="#">
                <h3>
                    Kyle Peterson
                </h3>
            </a>

            <div>
                <a href="/projects" onClick={handleClick}>
                    Projects
                </a>
                <a href="/about" onClick={handleClick}>
                    About
                </a>
                <a href="/contact" onClick={handleClick}>
                    Contact
                </a>
            </div>

            <style jsx>{`
                h3 {
                    margin: 0;
                }
                #nav {
                    text-align: center;
                }
                #nav a {
                    padding: .5em;
                }
            `}</style>
        </div>
    )
}