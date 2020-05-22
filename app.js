import {tapPlaceComponent} from './tap-place'
// Register custom A-Frame components in app.js before the scene in body.html has loaded.
AFRAME.registerComponent('tap-place', tapPlaceComponent)
