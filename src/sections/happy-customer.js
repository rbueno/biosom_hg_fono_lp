/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';

const HappyCustomer = () => {
  const customer = 'https://biosom.com.br/fonolp/_next/static/images/customer-180f1dca6279b50bafbacb95e7e96682.png';
  return (
    <Box as="section" variant="section.happyCustomer">
      <Container>
        <Box sx={styles.contentWrapper}>
        <Box style={{
            padding: '0 0 5rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/prb0swy8dfU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Use o Hearing Guardian corretamente"
              description="Para contar com a avaliação de um fonoaudiólogo, é preciso utilizar o Hearing Guardian corretamente. Confira este vídeo para melhor entender como utilizar corretamente!"
            />
            
            {/* <Box sx={styles.learnMore}>
              <LearnMore path="#!" />
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HappyCustomer;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 50],
    display: ['block', 'block', 'block', 'flex', 'grid'],
    gridTemplateColumns: '1.1fr 0.9fr',
    flexDirection: ['unset', 'unset', 'unset', 'column', 'unset'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['295px', '395px', 'none', '480px', 'none'],
    textAlign: ['center', 'center', 'left', 'center', 'left'],
    mb: ['20px'],
    h2: {
      fontSize: ['24px', '24px', '24px', '32px', '32px', '36px', '48px'],
      lineHeight: [1.45, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
    p: {
      fontSize: ['17px'],
      lineHeight: [2, 2, 2, 2.48],
      maxWidth: [460],
      ml: [0],
    },
  },
  learnMore: {
    textAlign: ['center', 'center', 'left', 'center', 'left'],
  },
  accordionGroup: {
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: '30px 45px',
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
  },
};
