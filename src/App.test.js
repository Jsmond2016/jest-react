import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import Adapater from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapater() })

test('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('[data-test="container"]')).toExist()
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
