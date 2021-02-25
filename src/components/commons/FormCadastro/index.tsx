import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import TextField from '../../forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import Button from '../Button';

import { FormContainer } from './styles';

const initialForm = {
  email: '',
  usuario: '',
};

const FormContent = () => {
  const [formData, setFormData] = useState(initialForm);
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    setCanSubmit(formData.email.length > 0 && formData.usuario.length > 0);
  }, [formData]);

  const handleChangeField = event => {
    const { name, value } = event.target;

    const newFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(newFormData);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const data = {
      username: formData.usuario,
      name: formData.usuario,
    };

    const response = await api.post('/users', data);
    if (response.status === 201) {
      setFormData(initialForm);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo o que está rolando no bairro,
        complete seu cadastro agora!
      </Text>

      <TextField
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={event => handleChangeField(event)}
      />

      <TextField
        placeholder="Usuário"
        name="usuario"
        value={formData.usuario}
        onChange={event => handleChangeField(event)}
      />

      <Button
        type="submit"
        label="Cadastrar"
        variant="primary"
        fullWidth
        disabled={!canSubmit}
      />
    </FormContainer>
  );
};

const FormCadastro = (props: any) => {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        flex={1}
        paddingRight={{ md: '0' }}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          {...props}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
};

export default FormCadastro;
