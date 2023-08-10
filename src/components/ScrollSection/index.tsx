import { SectionWrapper, ScrollableContent, Content } from './styles';

const ScrollSection = ({ children }: ChildrenProp) => {
  return (
    <SectionWrapper>
      <ScrollableContent>
        <Content>{children}</Content>
      </ScrollableContent>
    </SectionWrapper>
  );
};

export default ScrollSection;
