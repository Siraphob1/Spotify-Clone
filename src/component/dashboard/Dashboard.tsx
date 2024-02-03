import { useAuth } from '../../hooks/useAuth';
import LayoutMain from '../../layout/LayoutMain';
import SideBar from '../sidebar/SideBar';

type Props = {
  code: string;
};

const Dashboard = ({ code }: Props) => {
  const accesstoken = useAuth(code);
  // userefre

  // console.log(code);

  return (
    <div className="text-white w-full p-[0.5rem] ">
      <section className="flex gap-x-[0.5rem]">
        <SideBar />
        <LayoutMain />
      </section>
    </div>
  );
};

export default Dashboard;
