import { NiceNumberPipe } from './nice-number.pipe';

describe('NiceNumberPipe', () => {
  let pipe: NiceNumberPipe;

  beforeAll(() => {
    pipe = new NiceNumberPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('correctly transforms numbers', () => {
    expect(pipe.transform(0)).toBe('0');
    expect(pipe.transform(879)).toBe('879');
    expect(pipe.transform(1258)).toBe('1.3k');
    expect(pipe.transform(1000)).toBe('1k');
    expect(pipe.transform(15368125)).toBe('15.4M');
  });

  it('handles other types', () => {
    // TODO handle strings, undefined, NaN, etc...
  });
});
