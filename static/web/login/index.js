import React from 'react';
import ReactDom from 'react-dom';

import {startModel, register, relate} from 'ader';

import Model from './models/main';

import Home from './container';

register([Model]);


const store = startModel();


let Page = relate(Home);

ReactDom.render(<Page store={store}/>, document.getElementById('app'));