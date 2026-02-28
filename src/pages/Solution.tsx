import { useMemo } from 'react';
import LandingPage from '../components/LandingPage';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { getIndustry } from '../content/industries';

type Props = { industry: string };

const Solution = ({ industry }: Props) => {
  const { language } = useLanguage();
  const { scrollToSection, goTo } = useNavigation();

  const content = useMemo(() => {
    const found = getIndustry(industry);
    return found ? found.landing[language] : null;
  }, [industry, language]);

  if (!content) return null;

  return (
    <LandingPage
      content={content}
      onPrimaryAction={() => goTo(`/demo?industry=${industry}`)}
      onSecondaryAction={() => scrollToSection('how')}
    />
  );
};

export default Solution;
