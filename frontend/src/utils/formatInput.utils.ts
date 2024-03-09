const formatInputCpf = (input: string) => {
  const cpf = input.replace(/\D/g, '');
  if (cpf.length <= 11) {
    return cpf
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  }
};

const formatInputDate = (input: string) => {
  const date = input.replace(/\D/g, '');
  if (date.length <= 8) {
    return date
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  }
}

const formatInputUtils = {
  formatInputCpf,
  formatInputDate
};


export default formatInputUtils;
