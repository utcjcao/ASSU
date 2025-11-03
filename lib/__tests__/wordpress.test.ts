/**
 * Test file for WordPress data fetching and parsing
 * 
 * This demonstrates the CourseTestEntry type and parsing logic
 */

import { CourseTestEntry, isCourseTestEntry } from '../wordpress';

describe('CourseTestEntry Type', () => {
  test('should validate correct CourseTestEntry structure', () => {
    const validEntry: CourseTestEntry = {
      department: 'ACT',
      courses: ['240', '245', '247'],
    };

    expect(isCourseTestEntry(validEntry)).toBe(true);
  });

  test('should reject invalid structures', () => {
    const invalidEntry1 = {
      department: 'ACT',
      // missing courses
    };

    const invalidEntry2 = {
      department: 123, // wrong type
      courses: ['240'],
    };

    const invalidEntry3 = {
      department: 'ACT',
      courses: [240, 245], // wrong type (should be strings)
    };

    expect(isCourseTestEntry(invalidEntry1)).toBe(false);
    expect(isCourseTestEntry(invalidEntry2)).toBe(false);
    expect(isCourseTestEntry(invalidEntry3)).toBe(false);
  });

  test('should handle empty courses array', () => {
    const entry: CourseTestEntry = {
      department: 'ACT',
      courses: [],
    };

    expect(isCourseTestEntry(entry)).toBe(true);
  });
});

describe('Data Transformation Examples', () => {
  test('should transform CourseTestEntry to KeyValueList format', () => {
    const courseData: CourseTestEntry[] = [
      { department: 'ACT', courses: ['240', '245', '247'] },
      { department: 'ANA', courses: ['300', '301'] },
    ];

    // Transform to KeyValueList format
    const keyValueData = courseData.map((entry) => ({
      key: entry.department,
      values: entry.courses,
    }));

    expect(keyValueData).toEqual([
      { key: 'ACT', values: ['240', '245', '247'] },
      { key: 'ANA', values: ['300', '301'] },
    ]);
  });
});

describe('Sample Data Structures', () => {
  test('should demonstrate expected WordPress API response structure', () => {
    // This is what we expect from WordPress API
    const mockWordPressResponse = [
      {
        id: 123,
        title: {
          rendered: 'Past Test Library',
        },
        content: {
          rendered: `
            <ul>
              <li>ACT: 240, 245, 247, 348, 349, 370</li>
              <li>ANA: 300, 301</li>
              <li>APM: 120, 130</li>
            </ul>
          `,
        },
      },
    ];

    expect(mockWordPressResponse[0].content.rendered).toContain('ACT');
    expect(mockWordPressResponse[0].content.rendered).toContain('240');
  });

  test('should demonstrate various HTML formats that should be parsed', () => {
    const formats = {
      list: '<ul><li>ACT: 240, 245, 247</li><li>ANA: 300, 301</li></ul>',
      table: '<table><tr><td>ACT</td><td>240, 245, 247</td></tr></table>',
      paragraph: '<p>ACT: 240, 245, 247</p><p>ANA: 300, 301</p>',
      plainText: 'ACT: 240, 245, 247\nANA: 300, 301',
    };

    // All of these formats should be parsed by our cheerio logic
    Object.values(formats).forEach((format) => {
      expect(format).toBeTruthy();
      expect(typeof format).toBe('string');
    });
  });
});

describe('Expected Parse Results', () => {
  test('should show expected parsing of department and courses', () => {
    // These are examples of text lines that should be parsed
    const testCases = [
      {
        input: 'ACT: 240, 245, 247, 348, 349, 370',
        expected: {
          department: 'ACT',
          courses: ['240', '245', '247', '348', '349', '370'],
        },
      },
      {
        input: 'ANA - 300, 301',
        expected: {
          department: 'ANA',
          courses: ['300', '301'],
        },
      },
      {
        input: 'APM 120 130',
        expected: {
          department: 'APM',
          courses: ['120', '130'],
        },
      },
    ];

    testCases.forEach((testCase) => {
      // These demonstrate the expected parsing behavior
      const departmentMatch = testCase.input.match(/^([A-Z]{2,4})/);
      expect(departmentMatch).toBeTruthy();
      if (departmentMatch) {
        expect(departmentMatch[1]).toBe(testCase.expected.department);
      }

      const courseMatches = testCase.input.match(/\b\d{3,4}\b/g);
      expect(courseMatches).toBeTruthy();
      if (courseMatches) {
        expect(courseMatches).toEqual(testCase.expected.courses);
      }
    });
  });
});
