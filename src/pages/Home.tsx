import { copy } from '../content/copy';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import LandingPage from '../components/LandingPage';
import ChatWidget from '../components/ChatWidget';

const Home = () => {
  const { language } = useLanguage();
  const { scrollToSection, goTo } = useNavigation();
  const content = copy[language].landings.general;

  return (
    <>
      <LandingPage
        content={content}
        // ✅ CTA principal: GRATIS 7 DÍAS -> /trial
        onPrimaryAction={() => goTo('/trial')}
        // ⛔️ secundario lo dejamos igual por ahora (después lo hacemos abrir video)
        onSecondaryAction={() => scrollToSection('how')}
      />

      {/* widget flotante */}
      <ChatWidget />
    </>
  );
};

export default Home;
