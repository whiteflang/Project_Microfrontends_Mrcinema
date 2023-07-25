
import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

const envName = environment.name
const manifestFile = `/assets/mf.manifest.${envName}.json`;

console.warn(`Using ${envName} to load manifest file ${manifestFile}`);

loadManifest(manifestFile)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));