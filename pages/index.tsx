import { useState } from 'react';
import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import Footer from '../src/components/commons/Footer';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Box } from '../src/components/foundation/layout/Box';
import Modal from '../src/components/commons/Modal';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundImageDark="url(/images/bubbles-dark.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu />

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        {props => <Box {...props}>TESTE</Box>}
      </Modal>

      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            flex={'1'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'center',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'center',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </Text>

            <Button
              label="Cadastrar"
              variant="primary"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={handleModalOpen}
            />
          </Grid.Col>

          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Imagem Aplicativo"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
};

export default Home;
