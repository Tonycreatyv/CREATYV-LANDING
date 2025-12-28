import { copy } from '../content/copy';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import LandingPage from '../components/LandingPage';

const DentalConnect = () => {
  const { language } = useLanguage();
  const { scrollToSection } = useNavigation();
  const content = copy[language].landings.dental;

  return (
    <LandingPage
      content={content}
      onPrimaryAction={() => scrollToSection('contact')}
      onSecondaryAction={() => scrollToSection('how')}
    />
  );
};

export default DentalConnect;
