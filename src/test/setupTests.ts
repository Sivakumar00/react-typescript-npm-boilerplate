import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import React from 'react';

React.useLayoutEffect = React.useEffect;
configure({ adapter: new Adapter() });
