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

const formatNumberPhoneVenom = (input: string) => {
  const phone = input.replace('@c.us', '').substring(2).replace(/\D/g, '');

  if (phone.length >= 10) {
    const ddd = phone.substring(0, 2);
    const number = phone.substring(2, 6);
    const rest = phone.substring(6);
    return `(${ddd}) 9${number}-${rest}`;
  }
};





const formatInputUtils = {
  formatInputCpf,
  formatInputDate,
  formatNumberPhoneVenom,
};


export default formatInputUtils;
