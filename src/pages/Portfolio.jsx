'use client';
import React, { memo, useState } from 'react';
import Card from '../components/Card';
import Certificate from '../components/Certificate';
import PortfolioTag from '../components/PortfolioTag';
import TechStackIcon from '../components/TechStackIcon';

const ProjectsData = [
  {
    title: 'Cookio, Pannello Utente',
    description:
      "Pannello utente di un app di un ristorante per l'ordinazione online del cibo",
    image: '/projects/cookio.png',
    tag: ['Progetti'],
    gitUrl: 'https://github.com/konnychiwa/Start2impact-progetto-FullStack',
    previewUrl: 'https://user-cookio.vercel.app/',
  },
  {
    title: 'Cookio, Pannello Admin',
    description:
      'Pannello admin di un app di un ristorante per la gestione degli ordini e gestione del menu',
    image: '/projects/cookioAdmin.png',
    tag: ['Progetti'],
    gitUrl: 'https://github.com/konnychiwa/Start2impact-progetto-FullStack',
    previewUrl: 'https://admin-cookio.vercel.app/',
  },
];

const CertificatesData = [
  {
    title: 'Certificato Full Stack',
    description: 'Agosto 2024 - Febbraio 2025',
    image: '/certificates/fullstack.png',
    tag: ['Certificati'],
    previewUrl: '/certificates/fullstack.pdf',
  },
  {
    title: 'Attestato B2 di Inglese',
    description: '17 Maggio 2023',
    image: '/certificates/b2_inglese.png',
    tag: ['Certificati'],
    previewUrl: '/certificates/KonaraAngelo_B2.pdf',
  },
];

const techStacks = [
  { icon: '/skills/html.svg', language: 'HTML', tag: ['Competenze'] },
  { icon: '/skills/css.svg', language: 'CSS', tag: ['Competenze'] },
  {
    icon: '/skills/javascript.svg',
    language: 'JavaScript',
    tag: ['Competenze'],
  },
  {
    icon: '/skills/typescript.svg',
    language: 'TypeScript',
    tag: ['Competenze'],
  },
  {
    icon: '/skills/tailwind.svg',
    language: 'Tailwind CSS',
    tag: ['Competenze'],
  },
  { icon: '/skills/bootstrap.svg', language: 'Bootstrap', tag: ['Competenze'] },
  { icon: '/skills/reactjs.svg', language: 'React', tag: ['Competenze'] },
  { icon: '/skills/vite.svg', language: 'Vite', tag: ['Competenze'] },
  { icon: '/skills/nextjs.svg', language: 'Next.js', tag: ['Competenze'] },
  { icon: '/skills/nodejs.svg', language: 'Node.js', tag: ['Competenze'] },
  { icon: '/skills/express.svg', language: 'Express.js', tag: ['Competenze'] },
  { icon: '/skills/mongodb.svg', language: 'MongoDB', tag: ['Competenze'] },
  { icon: '/skills/vercel.svg', language: 'Vercel', tag: ['Competenze'] },
  { icon: '/skills/git.svg', language: 'Git', tag: ['Competenze'] },
  {
    icon: '/skills/3dmodel.svg',
    language: 'Modellazione 3D',
    tag: ['Competenze'],
  },
];

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        Portfolio
      </h2>
    </div>
  </div>
));

const Portfolio = () => {
  const [tag, setTag] = useState('Progetti');
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="Portfolio"
    >
      <Header />
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <PortfolioTag
          onClick={handleTagChange}
          name="Progetti"
          isSelected={tag === 'Progetti'}
        />
        <PortfolioTag
          onClick={handleTagChange}
          name="Certificati"
          isSelected={tag === 'Certificati'}
        />
        <PortfolioTag
          onClick={handleTagChange}
          name="Competenze"
          isSelected={tag === 'Competenze'}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {ProjectsData.filter((project) => project.tag.includes(tag)).map(
          (project) => (
            <Card
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          )
        )}
        {CertificatesData.filter((certificate) =>
          certificate.tag.includes(tag)
        ).map((certificate) => (
          <Certificate
            title={certificate.title}
            description={certificate.description}
            imgUrl={certificate.image}
            previewUrl={certificate.previewUrl}
          />
        ))}
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6 xl:grid-cols-6">
        {techStacks
          .filter((tech) => tech.tag.includes(tag))
          .map((tech) => (
            <TechStackIcon TechStackIcon={tech.icon} Language={tech.language} />
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
