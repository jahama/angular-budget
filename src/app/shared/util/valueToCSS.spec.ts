import {
  getClassForCompletedCount,
  getClassForNotificationStatus,
  getClassForPendingCount,
  getClassForProjectStatus
} from './valueToCSS';

fdescribe('Bulma class based completed tasks', () => {
  it('Should return "is-success" class for 1 completed task', () => {
    expect(getClassForCompletedCount(1)).toBe('is-success');
  });

  it('Should return "is-info" class for 0 completed task', () => {
    expect(getClassForCompletedCount(0)).toBe('is-info');
  });

  it('Should return "is-info" class for -1 completed task', () => {
    expect(getClassForCompletedCount(-1)).toBe('is-info');
  });
});

fdescribe('Bulma class based on pending tasks', () => {
  it('Should return "is-danger" class for 1 pending task', () => {
    const input = 1;
    const actual = getClassForPendingCount(input);
    const expected = 'is-danger';
    expect(actual).toBe(expected);
  });
  it('Should return "is-info" class for 0 pending task', () => {
    const input = 0;
    const actual = getClassForPendingCount(input);
    const expected = 'is-info';
    expect(actual).toBe(expected);
  });
  it('Should return "is-info" class for -1 pending task', () => {
    const input = -1;
    const actual = getClassForPendingCount(input);
    const expected = 'is-info';
    expect(actual).toBe(expected);
  });
});

fdescribe('Bulma class based on notification status', () => {
  it('Should return "is-success" class for "success"', () => {
    const input = 'success';
    const actual = getClassForNotificationStatus(input);
    const expected = 'is-success';
    expect(actual).toBe(expected);
  });
  it('Should return "is-warning" class for "warning"', () => {
    const input = 'warning';
    const actual = getClassForNotificationStatus(input);
    const expected = 'is-warning';
    expect(actual).toBe(expected);
  });
  it('Should return "is-danger" class for "danger"', () => {
    const input = 'danger';
    const actual = getClassForNotificationStatus(input);
    const expected = 'is-danger';
    expect(actual).toBe(expected);
  });
  it('Should return "is-info" class for "info"', () => {
    const input = 'info';
    const actual = getClassForNotificationStatus(input);
    const expected = 'is-info';
    expect(actual).toBe(expected);
  });
});

fdescribe('Bulma class based on project status', () => {
  it('Should return "is-success" class for "active"', () => {
    const input = 'active';
    const actual = getClassForProjectStatus(input);
    const expected = 'is-success';
    expect(actual).toBe(expected);
  });
  it('Should return "is-warning" class for "planned"', () => {
    const input = 'planned';
    const actual = getClassForProjectStatus(input);
    const expected = 'is-warning';
    expect(actual).toBe(expected);
  });
  it('Should return "is-danger" class for "delayed"', () => {
    const input = 'delayed';
    const actual = getClassForProjectStatus(input);
    const expected = 'is-danger';
    expect(actual).toBe(expected);
  });
  it('Should return "is-dark" class for "canceled"', () => {
    const input = 'canceled';
    const actual = getClassForProjectStatus(input);
    const expected = 'is-dark';
    expect(actual).toBe(expected);
  });
});
