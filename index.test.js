const cjob = require('./index');

test('cjob, lv1, get value', () => {
    const mock = {
        a: 1
    }
    const result = cjob(mock, 'a')
    expect(result).toBe(1);
});
 
test('cjob, lv1, get obj', () => {
    const mock = {
        a: {
            b: 1
        }
    }
    const result = cjob(mock, 'a')
    expect(typeof result).toBe('object');
    expect(result.b).toBe(1);
});

test('cjob, lv1, get obj value', () => {
    const mock = {
        a: {
            b: 1
        }
    }
    const result = cjob(mock, 'a')
    expect(typeof result).toBe('object');
    expect(result.b).toBe(1);
});

test('cjob, lv1, get array', () => {
    const mock = {
        a: [1]
    }
    const result = cjob(mock, 'a')
    expect(typeof result).toBe('object');
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toBe(1);
});

test('cjob, lv2, get array value', () => {
    const mock = {
        a: [1,2]
    }
    const result = cjob(mock, 'a.0')
    expect(result).toBe(1);

    const result2 = cjob(mock, 'a.1')
    expect(result2).toBe(2);
});

test('cjob, lv2, get array object value', () => {
    const mock = {
        a: [{ b: 1}]
    }
    const result = cjob(mock, 'a.0.b')
    expect(result).toBe(1);
});

test('cjob, lv2, get array value', () => {
    const mock = [1,2]
    expect(cjob(mock, '0')).toBe(1);
    expect(cjob(mock, '1')).toBe(2);
});

test('cjob, lv2, get array object value', () => {
    const mock = [{a:1}]
    expect(cjob(mock, '0.a')).toBe(1);
});


test('cjob, complex use case', () => {
    const mock = {
        a: {
            b: {
                c: [
                    [ {d: 1} ]
                ]
            }
        }
    }
    const result = cjob(mock, 'a.b.c.0.0.d') //1
    expect(result).toBe(1);
});
