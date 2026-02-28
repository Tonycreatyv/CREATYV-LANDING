import { useLanguage } from '../context/LanguageContext';
import LandingPage from '../components/LandingPage';

const DentalConnect = () => {
  const { language } = useLanguage();

  return <LandingPage language={language} />;
};

export default DentalConnect;
