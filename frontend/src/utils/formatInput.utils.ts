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

const formatNumberPhone = (input: string) => {
  const phone = input.replace(/\D/g, '');
  if (phone.length <= 11) {
    return phone
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
}

const formatInputPhoneFromVenom = (input: string) => {
  const phone = input.replace(/\D/g, '');
  if (phone.length <= 11) {
    let formattedNumber = '55' + phone.substring(0, 2); // Prefixo do país e código de área

    // Verifica se há um 9 após o código de área e remove, se houver
    if (phone.charAt(2) === '9') {
      formattedNumber += phone.substring(3); // Remove o '9' após o código de área
    } else {
      formattedNumber += phone.substring(2); // Caso não haja '9' após o código de área, inclui o restante do número normalmente
    }

    return formattedNumber + '@c.us';
  }
}



const formatInputUtils = {
  formatInputCpf,
  formatInputDate,
  formatNumberPhoneVenom,
  formatInputPhoneFromVenom,
  formatNumberPhone
};


export default formatInputUtils;