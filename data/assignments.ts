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
  learningOutcome: string;
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
    ],
    learningOutcome:'I learned the importance of responsible engineering and environmental sustainability. I understood how using technology wisely, reducing waste, conserving resources, and properly disposing of e-waste can help protect the environment. This activity encouraged me to adopt sustainable practices in my daily life and future engineering career.'
  },
  {
    id: '02',
    slug: 'e-waste-crossword',
    title: 'E-Waste Crossword',
    date: '29/07/2026',
    description: 'An interactive e-waste awareness crossword puzzle designed to make learning about electronic waste engaging and informative. The activity covers topics such as e-waste recycling, hazardous materials, electronic devices, environmental impacts, and responsible disposal practices. It combines problem-solving and environmental education, helping learners understand important concepts related to e-waste management in an enjoyable way.',
    images: [
      { src: '/images/assignments/assignment-02.png', alt: 'E-Waste Crossword ', caption: 'E-Waste Crossword' },
    ],
    learningOutcome:'I learned the importance of responsible engineering and environmental sustainability. I understood how using technology wisely, reducing waste, conserving resources, and properly disposing of e-waste can help protect the environment. This activity encouraged me to adopt sustainable practices in my daily life and future engineering career.'
  },{
    id: '03',
    slug: 'carbon-footprint-calculator',
    title: 'Carbon-FootPrint-Calculator',
    date: '5/08/2026',
    description: 'This carbon footprint assessment presents an overview of the household’s annual greenhouse gas emissions and compares them with the average emissions in India and worldwide. The assessment shows a total annual footprint of 14.06 tonnes of CO₂, with food contributing the largest share at 56%, followed by transportation at 26% and electricity at 18%. The activity helps identify major sources of household emissions and highlights the importance of making sustainable choices such as reducing energy consumption, adopting cleaner transportation, minimizing food waste, and choosing environmentally responsible lifestyles.',
    images: [
      { src: '/images/assignments/assignment-03.png', alt: 'Carbon-FootPrint', caption: 'Carbon-FootPrint' },
    ],
    learningOutcome: 'I learned how different household activities contribute to carbon emissions and how a carbon footprint can be measured and compared with national and global averages. From this assessment, I understood that food, transportation, and electricity consumption are major contributors to my household’s emissions. This activity increased my awareness of the environmental impact of my daily choices and encouraged me to reduce energy use, minimize waste, use sustainable transportation, and adopt more environmentally friendly practices.'  }
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
