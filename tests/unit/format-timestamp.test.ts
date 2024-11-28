import { formatTimestamp } from '../../src/utils/format-timestamp';

describe('formatTimestamp', () => {
  it('should format timestamp correctly', () => {
    const timestamp = 1718140371;
    const formattedDate = formatTimestamp(timestamp);

    expect(formattedDate).toBe('June 12, 2024 at 02:42 AM');
  });
});
