import { copy } from '../content/copy';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import LandingPage from '../components/LandingPage';

const Autolotes = () => {
  const { language } = useLanguage();
  const { scrollToSection, goTo } = useNavigation();
  const content = copy[language].landings.autos;

  return (
    <LandingPage
      content={content}
      onPrimaryAction={() => goTo('/demo?industry=autos')}
      onSecondaryAction={() => scrollToSection('how')}
    />
  );
};

export default Autolotes;
