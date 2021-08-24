export function getClassForProjectStatus(projectStatus: ProjectStatus): StatusClass {
  const classes: { class: StatusClass; projectStatus: ProjectStatus }[] = [
    { class: 'is-warning', projectStatus: 'planned' },
    { class: 'is-success', projectStatus: 'active' },
    { class: 'is-danger', projectStatus: 'delayed' },
    { class: 'is-dark', projectStatus: 'canceled' },
  ];
  return classes.find(c => projectStatus === c.projectStatus)?.class || 'is-info';
}
export function getClassForNotificationStatus(notification: NotificationStatus): StatusClass {
  const classes: { class: StatusClass; notification: NotificationStatus }[] = [
    { class: 'is-warning', notification: 'warning' },
    { class: 'is-success', notification: 'success' },
    { class: 'is-danger', notification: 'danger' },
  ];
  return classes.find(c => notification === c.notification)?.class || 'is-info';
}
export function getClassForPendingCount(pendingCount: number): StatusClass {
  return pendingCount > 0 ? 'is-danger' : 'is-info';
}
export function getClassForCompletedCount(completedCount: number): StatusClass {
  return completedCount > 0 ? 'is-success' : 'is-info';
}

export type StatusClass = 'is-warning' | 'is-success' | 'is-danger' | 'is-dark' | 'is-info';

export type NotificationStatus = 'warning' | 'success' | 'danger' | 'info';

export type ProjectStatus = 'planned' | 'active' | 'delayed' | 'canceled';
