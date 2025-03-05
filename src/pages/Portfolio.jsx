import React, { memo } from 'react'; // Add the import for memo
import CardProject from '../components/CardProject';

const Data = [
  {
    id: 1,
    title: 'Cookio',
    description: 'Desc 1',
    image: '/projects/cookio.png',
    tag: ['Project'],
    gitUrl: 'https://github.com/konnychiwa',
    previewUrl: 'https://user-cookio.vercel.app/',
  },
  {
    id: 2,
    title: 'Cookio',
    description: 'Desc 2',
    image: '/projects/cookio.png',
    tag: ['Project'],
    gitUrl: 'https://github.com/konnychiwa',
    previewUrl: 'https://user-cookio.vercel.app/',
  },
  {
    id: 3,
    title: 'Cookio',
    description: 'Desc 2',
    image: '/projects/cookio.png',
    tag: ['Project'],
    gitUrl: 'https://github.com/konnychiwa',
    previewUrl: 'https://user-cookio.vercel.app/',
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
  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="Portfolio"
    >
      <Header />
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {Data.map((project) => (
          <CardProject
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
