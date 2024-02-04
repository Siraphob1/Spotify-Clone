import LayoutMain from '../../layout/LayoutMain';

const Home = () => {
  const description = [
    { label: 'Home', description: 'description what you can do' },
    { label: 'Search', description: 'search song from spotify' },
    { label: '', description: 'play a song' },
    { label: '', description: 'create a new playlist' },
    { label: '', description: 'save song to playlist you want' },
    { label: 'Your Library', description: 'reload playlist' },
    {
      label: '',
      description: 'create a new playlist & define name of playlist',
    },
    { label: 'Playlist card', description: 'play a song' },
    { label: '', description: 'remove song from playlist' },
  ];
  return (
    <LayoutMain>
      <main className="p-[1rem] flex flex-col gap-y-[1rem]">
        <h1 className="text-[2rem]">Welcome to spotify clone</h1>
        <div>How to play this project </div>
        <ul className="ml-[2rem]">
          {description.map((element, index) => {
            return (
              <li key={index} className="flex py-[0.1rem]">
                <span className="w-[100px]">{element.label}</span>{' '}
                <span>- {element.description}</span>
              </li>
            );
          })}
        </ul>
      </main>
    </LayoutMain>
  );
};

export default Home;
