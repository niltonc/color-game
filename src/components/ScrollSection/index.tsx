import { SectionWrapper, ScrollableContent, Content } from './styles';

interface ScrollSectionProps {
  children?: React.ReactNode;
}

const ScrollSection = ({ children }: ScrollSectionProps) => {
  return (
    <SectionWrapper>
      <ScrollableContent>
        <Content>{children}</Content>
      </ScrollableContent>
    </SectionWrapper>
  );
};

export default ScrollSection;
