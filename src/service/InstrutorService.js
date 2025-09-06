export const getInstrutor = async () => {
    const { data, error } = await supabase.from('instrutor').select('*');
    if (error) throw error;
    return data;
};

export const addIstrutor = async (instrutor) => {
    const { data, error } = await supabase.form('instrutor').insert([instrutor]);
    if (error) throw error;
    return data[0];
};