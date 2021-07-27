import logoImg from '../../assets/capitalize-logo.gif';
import { Container, Content } from './styles';

interface HeaderProps {
   onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

   return (
      <Container>
         <Content>
            <img src={logoImg} alt="Logo capitalize" />
            <button type="button" onClick={onOpenNewTransactionModal}>
               Nova Transação
            </button>
         </Content>
      </Container>
   )
}