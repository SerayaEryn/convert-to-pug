'use strict';

const t = require('tap');
const test = t.test;
const converter = require('../lib/converter')

test('', t => {
  t.plan(1);
  const code = 'a(href="before#{link}after", test=\'test\')';

  const resultCode = converter.convert(code);

  t.strictEqual(resultCode, 'a(href=`before${link}after`, test=\'test\')');
});

test('Should convert intended attribute', t => {
  t.plan(1);
  const code = 'div\n  a(href="before#{link}after", test=\'test\')';

  const resultCode = converter.convert(code);

  t.strictEqual(resultCode, 'div\n  a(href=`before${link}after`, test=\'test\')');
});

test('', t => {
  t.plan(1);
  const code = 'a(href=\'before#{link}after\', test=\'test\')';

  const resultCode = converter.convert(code);

  t.strictEqual(resultCode, 'a(href=`before${link}after`, test=\'test\')');
});

test('', t => {
  t.plan(1);
  const code = 'a(href="before${link}after", test=\'test\')';

  const resultCode = converter.convert(code);

  t.strictEqual(resultCode, 'a(href="before${link}after", test=\'test\')');
});
