export function getClassForStatus(status: string): string {
  const classes = [
    { name: 'is-warning', value: 'plan' },
    { name: 'is-success', value: 'active' },
    { name: 'is-danger', value: 'delayed' },
    { name: 'is-dark', value: 'canceled' },
  ];
  return classes.find(c => status === c.value)?.name || 'is-info';
}
export function getClassForPending(pendingCount: number): string {
  return pendingCount > 0 ? 'is-danger' : 'is-info';
}
export function getClassForCompleted(completedCount: number): string {
  return completedCount > 0 ? 'is-success' : 'is-info';
}
