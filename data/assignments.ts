export type Assignment = {
  id: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
};

export const assignments: Assignment[] = [
  {
    id: '01',
    slug: 'e-waste-pledge',
    title: 'E-Waste Pledge',
    date: '29/07/2026',
    description: 'This sustainability awareness poster was created to highlight the importance of responsible engineering and environmental consciousness. It communicates key commitments such as using technology wisely, reducing waste, conserving resources, responsibly disposing of e-waste, and adopting sustainable practices in both personal and professional life.The poster aims to encourage students and future engineers to take meaningful action toward environmental protection and contribute to building a cleaner, greener, and more sustainable future. It reflects the values of responsible innovation, environmental awareness, and sustainable development.',
    images: [
      { src: '/images/assignments/assignment-01.png', alt: 'E-waste Pledge', caption: 'E-Waste Pledge' },
    ]
  },
  {
    id: '02',
    slug: 'e-waste-quiz',
    title: 'E-Waste Quiz',
    date: '29/07/2026',
    description: 'An interactive e-waste awareness crossword puzzle designed to make learning about electronic waste engaging and informative. The activity covers topics such as e-waste recycling, hazardous materials, electronic devices, environmental impacts, and responsible disposal practices. It combines problem-solving and environmental education, helping learners understand important concepts related to e-waste management in an enjoyable way.',
    images: [
      { src: '/images/assignments/assignment-02.png', alt: 'E-Waste Quiz ', caption: 'E-Waste Quiz' },
    ]
  }
];

export function addAssignment(item: Assignment) {
  assignments.push(item);
  return assignments;
}

export function deleteAssignment(slug: string) {
  const index = assignments.findIndex((assignment) => assignment.slug === slug);

  if (index !== -1) {
    assignments.splice(index, 1);
  }

  return assignments;
}

export function replaceAssignments(nextAssignments: Assignment[]) {
  assignments.splice(0, assignments.length, ...nextAssignments);
  return assignments;
}
