const formatNumberPhoneVenom = (input: string) => {
  const phone = input.replace('@c.us', '').substring(2).replace(/\D/g, '');

  if (phone.length >= 10) {
    const ddd = phone.substring(0, 2);
    const number = phone.substring(2, 6);
    const rest = phone.substring(6);
    return `(${ddd}) 9${number}-${rest}`;
  }
};

const formatUtils = {
  formatNumberPhoneVenom,
}

export default formatUtils;
