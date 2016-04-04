'use strict'

import './index.html'

import './assets/css/app.styl'


import ReactDom from 'react-dom'

import createRootReducer from './bootstrap/create-root-reducer'
import configureStore from './bootstrap/configure-store'
import createRootComponent from './bootstrap/create-root-component'

const rootReducer = createRootReducer()
const createStore = configureStore()

const initalState = {
}

const store = createStore(rootReducer, initalState)
const root = createRootComponent(store)
const hook = document.getElementById('app')

ReactDom.render(root, hook)
