export type Author = { name: string; me?: boolean }

export type Publication = {
  title: string
  pdf: string
  authors: Author[]
  venue: string
  year: number
  doi: string
  link: string
  finding: string
}

export const publications: Publication[] = [
  {
    title: 'An Ensemble Model for Software Development Cost Estimation',
    pdf: '/pdfs/maher-2022-ensemble-cost-estimation.pdf',
    authors: [
      { name: 'Mohammed Maher', me: true },
      { name: 'Jamal Salahaldeen Alneamy' },
    ],
    venue: 'ISRITI',
    year: 2022,
    doi: 'https://doi.org/10.1109/ISRITI56927.2022.10052861',
      link: 'https://ieeexplore.ieee.org/document/10052861/',

    finding:
      'A stacking ensemble with a Random Forest meta-learner, tuned via PSO, improved cost estimation accuracy over individual base learners on the ISBSG dataset.',
  },
  {
    title:
      'An Overview of Machine Learning Approaches to Software Development Cost Estimation',
    pdf: '/pdfs/maher-2022-ml-cost-estimation-overview.pdf',
    authors: [
      { name: 'Mohammed Maher', me: true },
      { name: 'Jamal Salahaldeen Alneamy' },
    ],
    venue: 'ICCITM',
    year: 2022,
    doi: 'https://doi.org/10.1109/ICCITM56309.2022.10032008',
    link: 'https://ieeexplore.ieee.org/document/10032008/',
    finding:
      'A survey of recent ML approaches to software cost estimation, contrasting where each family performs best and outlining open challenges.',
  },
]
