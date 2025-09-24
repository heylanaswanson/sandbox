const e = React.createElement;

function ProjectCard({ title, desc, url, tags=[] }) {
  const slug = (title||'').toLowerCase().replace(/[^a-z0-9]+/g,'-');

  return e('div', { className: 'card' }, [
    e('img', { key: 'img', src: `./images/thumbs/${slug}.png`, alt: title, style: {width: '100%', borderRadius: '8px', marginBottom: '8px'} }),
    e('h3', { key: 'h' }, title),
    e('p', { key: 'p' }, desc),
    e('ul', { key: 'tags', className: 'inline' }, tags.map((t,i)=>e('li',{key:i},t))),
    e('a', { key: 'a', href: url, target: '_blank', rel: 'noreferrer' }, 'View Project →')
  ]);
}

function useProjects() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('./projects.json').then(r => r.json()).then(setData).catch(() => setData([]));
  }, []);
  return data;
}

function App() {
  const projects = useProjects();

  return e('div', { className: 'container' }, [
    e('section', { key: 'hero', className: 'hero section', id: 'about' }, [
      e('img', { key: 'img', className: 'avatar', src: './images/profile.svg', alt: 'Lana Swanson' }),
      e('div', { key: 'copy' }, [
        e('h1', null, 'Lana Swanson — Frontend Developer'),
        e('p', null, '25+ years in software + strong UI/UX and CSS background. Currently focused on modern JavaScript, React, advanced CSS, Material UI, and Figma‑driven workflows.'),
        e('div', { className: 'badges', key: 'badges' }, [
          e('span', { className: 'badge', key: 'b1' }, 'JavaScript/ES6'),
          e('span', { className: 'badge', key: 'b2' }, 'React-ready'),
          e('span', { className: 'badge', key: 'b3' }, 'Advanced CSS'),
          e('span', { className: 'badge', key: 'b4' }, 'Material UI'),
          e('span', { className: 'badge', key: 'b5' }, 'Figma → Code')
        ]),
        e('p', { key: 'links' }, [
          e('a', { href: 'https://github.com/BlueCircleDev', target: '_blank', rel: 'noreferrer' }, 'GitHub'),
          ' · ',
          e('a', { href: 'https://www.linkedin.com/in/LanaSwanson', target: '_blank', rel: 'noreferrer' }, 'LinkedIn')
        ])
      ])
    ]),
    e('section', { key: 'projects', id: 'projects', className: 'section' }, [
      e('h2', null, 'Projects'),
      e('div', { className: 'grid' }, projects.map((p, i) => e(ProjectCard, { key: i, title: p.title, desc: p.desc, url: p.url, tags: p.tags })) )
    ]),
    e('section', { key: 'contact', id: 'contact', className: 'section contact' }, [
      e('h2', null, 'Contact'),
      e('p', null, 'Based in La Jolla, CA. Open to frontend roles (React), UX‑minded engineering, or hybrid UI dev.'),
      e('p', null, 'Email: '),
      e('a', { href: 'mailto:bluecircledev@gmail.com' }, 'bluecircledev@gmail.com')
    ])
  ]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
