import client from './lib/sprintly-client';
import router from './router'

// Enable React dev tools
var React = require('react');
window.React = React;
window.manifold = router(client);
