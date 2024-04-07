import { useAuth } from '../contexts/AuthContext';
import RecentActions from './RecentActions';
import Topics from './Topics';
import { Slider } from './index';

function Hero() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <Slider />
      {isAuthenticated && <RecentActions />}
      <Topics />
    </div>
  );
}

export default Hero;
