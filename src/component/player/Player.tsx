import { useDashboard } from '../../hooks/useDashboard';

const Player = () => {
  const { playingSong } = useDashboard();
  const getSongUri = () => {
    return playingSong?.id;
  };
  return (
    <section className="">
      <iframe
        title="Spotify Embed: Recommendation Playlist "
        src={`https://open.spotify.com/embed/track/${getSongUri()}?utm_source=generator`}
        className="w-full h-[152px]  rounded-xl  "
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Player;
