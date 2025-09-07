import React, { useState } from 'react';

const CadastoTurma = ({onSubmit}) => {
    const [formData, setFormData] = useState({nome: '',curso: '',instrutor: '',turno: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form role="form" onSubmit={handleSubmit}>
            <label>
                nome
                <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
            </label>
            <label>
                curso
                <input type="text" name="curso" value={formData.curso} onChange={handleChange} />
            </label>
            <label>
                instrutor
                <input type="text" name="instrutor" value={formData.instrutor} onChange={handleChange} />
            </label>
            <label>
                turno
                <input type="text" name="turno" value={formData.turno} onChange={handleChange} />
            </label>
            <button type = "submit">Salvar</button>
        </form>
    );
};

export default CadastoTurma;