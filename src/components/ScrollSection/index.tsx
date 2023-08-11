import { SectionWrapper, ScrollableContent, Content } from './styles';

const ScrollSection: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <SectionWrapper>
      <ScrollableContent>
        <Content>{children}</Content>
      </ScrollableContent>
    </SectionWrapper>
  );
};

export default ScrollSection;
