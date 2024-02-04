import queryString from 'query-string';

const Login = () => {
  const query = queryString.stringify({
    client_id: import.meta.env.VITE_CLIENT_ID,
    response_type: 'code',
    redirect_uri: 'https://spotify-clone-logpb2hrb-siraphob1.vercel.app/',
    scope: `streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public`,
  });

  const urlAuth = `https://accounts.spotify.com/authorize?${query}`;

  return (
    <main className="bg-[#121313] text-white w-[700px]  h-[700px] rounded-xl flex flex-col items-center justify-center gap-y-[1rem]">
      <h1 className="text-[3rem]">Clone Spotify</h1>
      <p>Please click to login</p>

      <a
        href={urlAuth}
        className="bg-[#1ED661] text-black font-bold px-[2rem] py-[0.5rem] rounded-2xl hover:bg-opacity-70"
      >
        Login
      </a>
    </main>
  );
};

export default Login;
