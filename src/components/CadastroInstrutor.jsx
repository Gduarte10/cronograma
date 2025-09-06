import React, { useState } from 'react';

const Cadastroinstrutor = ({onSubmit}) => {
    const [formData, setFormData] = useState({nome: '',especializacao: '',email: '',telefone: ''});

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
                especializacao
                <input type="text" name="especializacao" value={formData.especializacao} onChange={handleChange} />
            </label>
            <label>
                email
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                telefone
                <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
            </label>
            <button type = "submit">Salvar</button>
        </form>
    );
};

export default Cadastroinstrutor;