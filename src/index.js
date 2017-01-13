// @flow
import express from 'express';

import {thingProvider} from './lib/thing';

const app = express();

app.get('/', async (req: express$Request, res: express$Response) => {
  try {
    // async/await!
    const thing = await Promise.resolve({one: 'two'});

    // object-rest-spread!
    let response: Response = {...thing, hello: 'world'};

    return res.json(response);
  } catch (e) {
    return res.json({error: e.message});
  }
});

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  if (__DEV__) {
    // webpack flags!
    console.log('> in development');
  }

  console.log(`> listening on port ${port}`);
});
