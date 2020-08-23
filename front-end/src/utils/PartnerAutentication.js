import partners from '../fakeUsersdatabase';

const Authentication = () => {
  return partners.find((el) => Number(window.location.pathname.split('/')[1]) === el.id);
}

export default Authentication;
