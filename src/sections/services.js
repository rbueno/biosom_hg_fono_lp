/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import individual from 'assets/images/icons/individual.png';
import team from 'assets/images/icons/team.png';
import org from 'assets/images/icons/org.png';
import um from 'assets/images/icons/1.png';
import quatro from 'assets/images/icons/4.png';

const data = [
  {
    id: 1,
    icon: individual,
    title: 'Use regularmente',
    description: `Para receber análise de um fonoaudiólogo, você deve utilizar o app por pelo menos 3 dias seguidos, por 1 hora de uso cada dia.`,
  },
  {
    id: 2,
    icon: quatro,
    title: 'Inscreva-se na lista de espera',
    description: `Deixe o seu email abaixo para entrar para a lista de espera. Um fonoaudiólogo irá analisar o seu uso o mais rápido possível.`,
  },
  {
    id: 3,
    icon: um,
    title: 'Receba a análise por email',
    description: `O fonoaudiólog irá enviar a sua análise por email. Não se preocupe, você poderá entrar em contado com o fonoaudiólogo posteriormente para tirar mais dúvidas.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Você gostaria de entender melhor os resultados de seu Hearing Guardian?"
          description="Um fonoaudiólogo irá te ajudar. Confira o vídeo para entender como:"
        />
          <Box style={{
            padding: '0 0 5rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9WRSsGFtqfQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          </Box>
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [0, 10, 20, 40],
    maxWidth: ['none', null, null, 565, null, 'none'],
    h2: {
      color: 'heading',
      fontSize: ['28px', '32px', '32px', '32px', '32px', '32px', '40px'],
    },
    P: {
      fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
      maxWidth: [510],
      m: ['5px auto 0'],
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'left', 'left', 'center', 'left'],
      maxWidth: [290, 260, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
