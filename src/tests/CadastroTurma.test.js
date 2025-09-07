
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import CadastoTurma from '../components/CadastoTurma';



test('renderizar inputs de nome,curso,instrutor,turno', () => {
    render(<CadastoTurma/>);

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/curso/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instrutor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/turno/i)).toBeInTheDocument();
});

test('chama onSubmit com dados corretos', () => {
    const handleSubmit = jest.fn();
    render(<CadastoTurma onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/nome/i),{target: {value: 'Tecnico de informatrica'} });
    fireEvent.change(screen.getByLabelText(/curso/i),{target: {value: 'ti'} });
    fireEvent.change(screen.getByLabelText(/instrutor/i),{target: {value: 'Wisner'} });
    fireEvent.change(screen.getByLabelText(/turno/i),{target: {value: 'Noturno'} });

    fireEvent.submit(screen.getByRole('form'));

    expect(handleSubmit).toHaveBeenCalledWith({
        nome: `Tecnico de informatrica`,
        curso: `ti`,
        instrutor: `Wisner`,
        turno: `Noturno`
    });
});

