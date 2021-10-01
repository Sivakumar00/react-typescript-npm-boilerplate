import * as ReactDOM from 'react-dom';
import Button from '@components/Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button label="Button" onClick={() => console.warn('Clicked')} />, div);
});
