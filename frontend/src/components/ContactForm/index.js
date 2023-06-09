import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { ButtonContainer, Form } from './styles';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" type="text" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="E-mail" type="email" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" type="tel" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="Submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
