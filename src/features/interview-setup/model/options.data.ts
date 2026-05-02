import type { SelectOption } from '@shared/ui/select-field';

export const sphereOptions: SelectOption[] = [
  { value: 'it', label: 'IT и разработка' },
  { value: 'analytics', label: 'Аналитика и данные' },
  { value: 'design', label: 'Дизайн' },
  { value: 'management', label: 'Менеджмент' },
];

export const directionOptionsBySphere: Record<string, SelectOption[]> = {
  it: [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'devops', label: 'DevOps' },
  ],
  analytics: [
    { value: 'data-analyst', label: 'Data Analyst' },
    { value: 'data-engineer', label: 'Data Engineer' },
    { value: 'ml', label: 'ML Engineer' },
  ],
  design: [
    { value: 'product', label: 'Product Designer' },
    { value: 'ui-ux', label: 'UI/UX Designer' },
  ],
  management: [
    { value: 'product-manager', label: 'Product Manager' },
    { value: 'project-manager', label: 'Project Manager' },
  ],
};

export const specialtyOptions: SelectOption[] = [
  { value: 'react', label: 'React-разработчик' },
  { value: 'vue', label: 'Vue-разработчик' },
  { value: 'node', label: 'Node.js-разработчик' },
  { value: 'python', label: 'Python-разработчик' },
  { value: 'go', label: 'Go-разработчик' },
];

export const gradeOptions: SelectOption[] = [
  { value: 'junior', label: 'Junior' },
  { value: 'middle', label: 'Middle' },
  { value: 'senior', label: 'Senior' },
  { value: 'lead', label: 'Lead' },
];
