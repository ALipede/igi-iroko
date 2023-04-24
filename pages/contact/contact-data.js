const CONTACT_LIST = [
  {
    id: 'ctl1',
    ref: 'alipede@igi-iroko.com',
    href: 'mailto:alipede@igi-iroko.com?subject=igi iroko | Web Development&body=igi iroko : Contact - A.Lipede',
    target: '',
  },
  {
    id: 'ctl2',
    ref: '+4407830350762',
    href: 'tel:+4407830350763',
    target: '',
  },
  {
    id: 'ctl3',
    ref: 'LinkedIn/alipede',
    href: 'https://www.linkedin.com/in/alipede/',
    target: '_blank',
  },
  {
    id: 'ctl4',
    ref: 'GitHub/alipede',
    href: 'https://github.com/alipede',
    target: '_blank',
  },
  {
    id: 'ctl5',
    ref: 'Download CV',
    href: '/',
    target: '',
  },
];

export function getContactList() {
  return CONTACT_LIST;
}
