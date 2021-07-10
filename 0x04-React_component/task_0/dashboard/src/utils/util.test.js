import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Create basic tests with four tests', function () {
  describe('check that the function getFullYear returns the correct year', function () {
    it('should return current year', function () {
      expect(getFullYear()).toBe(new Date().getFullYear());
    });
  });
  describe('check that getFooterCopy returns the correct string when the argument is true or false', function () {
    it('Should return true message', function () {
      expect(getFooterCopy(true)).toEqual('Holberton School');
    });
    it('Should return false message', function () {
      expect(getFooterCopy(false)).toEqual('Holberton School Main Dashboard');
    });
  });
  describe('Test checking the returned string for getLatestNotification', function () {
    it('shold return correct string element', function () {
      expect(getLatestNotification()).toEqual(
        '<strong>Urgent requirement</strong> - complete by EOD'
      );
    });
  });
});
