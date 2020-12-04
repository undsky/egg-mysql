'use strict';

const mock = require('egg-mock');

describe('test/mysql.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mysql-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mysql')
      .expect(200);
  });
});
