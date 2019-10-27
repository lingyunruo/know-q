import React from 'react';
import ReactDom from 'react-dom';

import {startModel, register, relate} from 'ader';

import Model from './models';
import HeaderModel from '../components/Header/model';

import Home from './container';

register([Model, HeaderModel]);


const store = startModel();


let Page = relate(Home);

ReactDom.render(<Page store={store}/>, document.getElementById('app'));