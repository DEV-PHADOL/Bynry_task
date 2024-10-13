import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='h-full w-full flex justify-center items-center gap-7'>
      <Button onClick={() => navigate('/profile')}>Profiles</Button>
      <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
    </div>
  );
};

export default Home;
