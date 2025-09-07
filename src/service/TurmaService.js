export const getTurma = async () => {
    const { data, error } = await supabase.from('turma').select('*');
    if (error) throw error;
    return data;
};

export const addturma = async (turma) => {
    const { data, error } = await supabase.form('turma').insert([turma]);
    if (error) throw error;
    return data[0];
};