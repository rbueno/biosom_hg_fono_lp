/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Flex, Checkbox, Label } from 'theme-ui';
import { useState } from 'react';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Input from 'components/input';
import illustration from 'assets/images/subscribe-bg.png';
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const SubscribeUs = () => {
  const [checked, setChecked] = useState(false);
  const [checkedError, setCheckedError] = useState(false);

  const handleSubmit = (e, subscribe) => {
    e.preventDefault();
    if (!checked) {
      setCheckedError(true)
      return
    }
    subscribe({ EMAIL: e.target[0].value })
  };

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div>
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Quer receber a avaliação de um fonoaudiólogo?"
            description="Utilize O Hearing Guardian por no mínimo 3 dias seguidos por 1 hora cada dia; informe aqui o mesmo email que você utilizou para criar uma conta no Hearing Guardian."
          />
          <MailchimpSubscribe
            url='https://biosom.us19.list-manage.com/subscribe/post?u=fc637f151bb04c5703c01cde4&amp;id=3324ecbe17'
            render={({ subscribe, status, message }) => (
              <div>
        <Box as="form" sx={styles.subscribe} onSubmit={(e) => handleSubmit(e, subscribe)}>
            <Flex sx={styles.formGroup}>
              <Label htmlFor="subs-email" variant="styles.srOnly">
                Email
              </Label>
              <Input
                id="subs-email"
                type="email"
                className="email-input"
                placeholder="Informe o seu email"
              />
              <Button variant="primary">Cadastrar</Button>
            </Flex>
            <Box sx={styles.checkbox}>
              <Label htmlFor="no_spam" className={checked ? 'checked' : ''}>
                <Checkbox
                  id="no_spam"
                  onChange={handleCheckbox}
                  defaultChecked={checked}
                />
                Este é o mesmo email que eu utilizei no Hearing Guardian.
              </Label>
            </Box>
          </Box>
        {status === "sending" && <div style={{ color: "blue" }}>cadastrando...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {checkedError && <div style={{ color: "green" }}>Confirme que o email está correto!</div>}
        {status === "success" && <div style={{ color: "green" }}>Cadastro Realizado!</div>}
      </div>
    )}
  />
        </Box>
      </Container>
    </Box>
    </div>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: `url(${illustration}) no-repeat center bottom / cover`,
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [30, 40, null, '40px 100px', '50px 80px', '40px'],
    gap: '50px',
    display: ['block', 'block', 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', 'center', 'left', 'center', 'left'],
    mb: ['30px', '30px', '30px', '30px', 0],
    ml: 0,
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '36px'],
      letterSpacing: [0, 0, 0, '-1px'],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', 'auto', 'auto', 'auto', 0],
      mr: ['auto', 'auto', 'auto', 'auto', 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, '15px'],
      minHeight: ['50px', '50px', '60px'],
    },
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
    },
  },
  formGroup: {
    flexDirection: ['column', null, null, 'row'],
  },
  checkbox: {
    mt: ['24px'],
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba('#9095AD', 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: '#EFF3F7',
        },
      },
      '&.checked': {
        svg: {
          path: {
            fill: 'primary',
          },
        },
      },
    },
  },
};
