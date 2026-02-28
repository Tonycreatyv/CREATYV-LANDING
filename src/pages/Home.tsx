import { useNavigation } from '../context/NavigationContext';
import MainLanding from '../components/MainLanding';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const { scrollToSection, goTo } = useNavigation();

  return (
    <MainLanding
      language={language}
      onPrimaryAction={() => scrollToSection('solutions')}
      onSecondaryAction={() => goTo('/dental')}
    />
  );
};

export default Home;
