import '../../config/setupTests';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('tests for utils', () => {
  test('should return the current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  test('should return correct string with true parameter', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('should return correct string with false parameter', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  })

  test('should return the correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  })
})
