import { expect } from 'chai';
import { describe, it } from 'mocha';

const regexMatcher = (regex, input) => {
  return new RegExp(regex).test(input);
};

describe('Password-regex', () => {
  it('the password-regex ensures the presence of a letter and number', () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/;

    expect(regexMatcher(passwordRegex, 'abcd1234')).to.eql(true);
    expect(regexMatcher(passwordRegex, 'abcdefgh')).to.eql(false);
    expect(regexMatcher(passwordRegex, '2222222a')).to.eql(true);
    expect(regexMatcher(passwordRegex, 'abcd123!')).to.eql(true);
    expect(regexMatcher(passwordRegex, '11111111')).to.eql(false);
  });

  it('the password-regex validates a length of at least 8 characters', () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/;

    expect(regexMatcher(passwordRegex, 'a')).to.eql(false);
    expect(regexMatcher(passwordRegex, 'abcd123')).to.eql(false);
    expect(regexMatcher(passwordRegex, 'aaaaaaaaaaaaaaaaaaaaaaa1')).to.eql(true);
  });
});

describe('Email-regex', () => {
  it('validates the correct e-mails', () => {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    expect(regexMatcher(emailRegex, 'abcd@mail.com')).to.eql(true);
    expect(regexMatcher(emailRegex, 'abc.def@mail.com')).to.eql(true);
    expect(regexMatcher(emailRegex, 'abc.def@mail.co.uk')).to.eql(true);

    expect(regexMatcher(emailRegex, 'abcd@mail')).to.eql(false);
    expect(regexMatcher(emailRegex, 'abcd_mail.com')).to.eql(false);
    expect(regexMatcher(emailRegex, 'mail.co.uk')).to.eql(false);
  });
});
