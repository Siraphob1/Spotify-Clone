import { useAuth } from '../../hooks/useAuth';

type Props = {
  code: string;
};

const Dashboard = ({ code }: Props) => {
  const accesstoken = useAuth(code);

  console.log(code);

  return <div>Dashboard</div>;
};

export default Dashboard;
