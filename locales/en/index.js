import flatten from 'flat';
import button from './button.json';

export default {
  button: flatten(button, {
    delimiter: '_',
  })
};