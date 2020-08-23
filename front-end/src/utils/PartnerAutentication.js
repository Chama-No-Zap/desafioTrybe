import Partners from '../fakeUsersdatabase/Partners';

const Authentication = () => {
  return Partners.find((el) => Number(window.location.pathname.split('/')[1]) === el.id);
}

export default Authentication;
