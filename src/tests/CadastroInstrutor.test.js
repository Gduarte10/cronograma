
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Cadastroinstrutor from '../components/CadastroInstrutor';


test('renderizar inputs de nome,especializacao,email,telefone', () => {
    render(<Cadastroinstrutor/>);

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/especializacao/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument();
});

test('chama onSubmit com dados corretos', () => {
    const handleSubmit = jest.fn();
    render(<Cadastroinstrutor onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/nome/i),{target: {value: 'Wisner'} });
    fireEvent.change(screen.getByLabelText(/especializacao/i),{target: {value: 'ti'} });
    fireEvent.change(screen.getByLabelText(/email/i),{target: {value: 'adsdasd@gmail.com'} });
    fireEvent.change(screen.getByLabelText(/telefone/i),{target: {value: '63999999999'} });

    fireEvent.submit(screen.getByRole('form'));

    expect(handleSubmit).toHaveBeenCalledWith({
        nome: `Wisner`,
        especializacao: `ti`,
        email: `adsdasd@gmail.com`,
        telefone: `63999999999`
    });
});

