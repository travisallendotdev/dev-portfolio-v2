const skills: { category: string; items: string[] }[] = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript (ES6+)', 'SQL'] },
  {
    category: 'Backend',
    items: ['Node.js', 'GraphQL', 'REST APIs', 'Express'],
  },
  {
    category: 'Infrastructure',
    items: [
      'AWS (Lambda, SQS, KMS, DynamoDB, CloudWatch, IAM)',
      'Kubernetes',
      'Docker',
      'Flux CD',
    ],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'],
  },
  {
    category: 'Observability',
    items: ['CloudWatch', 'OpenTelemetry', 'OpenObserve'],
  },
  {
    category: 'AI / ML',
    items: [
      'RAG pipelines',
      'pgvector',
      'LLM API Integration',
      'Agentic Workflows',
    ],
  },
  {
    category: 'Practices',
    items: [
      'Distributed systems',
      'Event-driven architecture',
      'Zero-trust security',
      'CI/CD (GitLab Pipelines)',
      'GitOps (Flux CD)',
    ],
  },
];

export default function SkillsTabContent() {
  return (
    <>
      <h1>Skills</h1>
      {skills.map(({ category, items }) => (
        <div key={category}>
          <h3>{category}</h3>
          <p>{items.join(', ')}</p>
        </div>
      ))}
    </>
  );
}
