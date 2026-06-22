/**
 * Portfolio projects — edit this file to add or update projects.
 *
 * Fields:
 *   title       — display name
 *   description — one-line summary shown on the card
 *   image       — optional custom preview (leave empty to use GitHub social preview)
 *   repo        — GitHub repo slug under wenyenhsu/ (used for default image & link)
 *   tags        — tech stack pills
 *   links       — app / github / blog URLs (omit or set null to hide)
 *   featured    — only featured: true projects are shown (set false to hide without deleting)
 */
const PROJECTS = [
  {
    title: 'JägerOS',
    description:
      'A Django-based career intelligence platform for job tracking, skill extraction with Ollama, market demand analysis, and resume matching.',
    image: '',
    repo: 'jeageros-career-intelligence-platform',
    tags: ['RAG', 'LLM', 'Django', 'Docker', 'PostgreSQL'],
    links: {
      app: null,
      github: 'https://github.com/wenyenhsu/jeageros-career-intelligence-platform',
      blog: null,
    },
    featured: true,
  },
  {
    title: 'AKB Daily Intelligence',
    description:
      'A self-evolving knowledge graph that turns raw information into structured, reusable intelligence via LLM reasoning and embedding-based memory.',
    image: '',
    repo: 'llm-powered-daily-intelligence-system',
    tags: ['LLM', 'RAG', 'Knowledge Graph', 'Ollama'],
    links: {
      app: null,
      github: 'https://github.com/wenyenhsu/llm-powered-daily-intelligence-system',
      blog: null,
    },
    featured: true,
  },
  {
    title: 'AI GUI Automation Agent',
    description:
      'Vision-based desktop automation agent that detects UI elements and drives workflows through a Streamlit demo interface.',
    image: '',
    repo: 'ai-gui-automation-agent-vision-based-detection',
    tags: ['Computer Vision', 'LLM', 'Streamlit', 'Automation'],
    links: {
      app: null,
      github: 'https://github.com/wenyenhsu/ai-gui-automation-agent-vision-based-detection',
      blog: null,
    },
    featured: true,
  },
  {
    title: 'RoBERTa Sentiment Pipeline',
    description:
      'End-to-end RoBERTa ensemble pipeline for social media text: collection, preprocessing, training, and evaluation.',
    image: '',
    repo: 'llm-roberta-based-sentiment-classification-with-ensemble-approach',
    tags: ['NLP', 'RoBERTa', 'Ensemble', 'Python'],
    links: {
      app: null,
      github: 'https://github.com/wenyenhsu/llm-roberta-based-sentiment-classification-with-ensemble-approach',
      blog: null,
    },
    featured: true,
  },
  {
    title: 'DeFungi CNN Pipeline',
    description:
      'TensorFlow/Keras image classification pipeline comparing multiple CNN architectures on the DeFungi fungal dataset.',
    image: '',
    repo: 'tensorflow-defungi-image-classification-pipeline',
    tags: ['TensorFlow', 'CNN', 'Computer Vision', 'Keras'],
    links: {
      app: null,
      github: 'https://github.com/wenyenhsu/tensorflow-defungi-image-classification-pipeline',
      blog: null,
    },
    featured: true,
  },
  {
    title: 'Quant Research Platform',
    description:
      'A quantitative research workspace for exploring market data, backtesting strategies, and analyzing financial signals.',
    image: '',
    repo: 'quant-research-platform',
    tags: ['Quant', 'Python', 'Data Analysis'],
    links: {
      app: null,
      github: 'https://github.com/wenyenhsu/quant-research-platform',
      blog: null,
    },
    featured: true,
  },
];

const GITHUB_USER = 'wenyenhsu';

function projectImageUrl(project) {
  if (project.image) return project.image;
  return `https://opengraph.githubassets.com/1/${GITHUB_USER}/${project.repo}`;
}

function projectPrimaryUrl(project) {
  return project.links.app || project.links.github || `https://github.com/${GITHUB_USER}/${project.repo}`;
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const featured = PROJECTS.filter((p) => p.featured !== false);

  container.innerHTML = featured
    .map((project) => {
      const primaryUrl = projectPrimaryUrl(project);
      const tags = project.tags
        .map((tag) => `<span class="project-tag">${tag}</span>`)
        .join('');

      const linkItems = [];
      if (project.links.app) {
        linkItems.push(
          `<a href="${project.links.app}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="bi bi-globe"></i> App
          </a>`
        );
      }
      if (project.links.github) {
        linkItems.push(
          `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="bi bi-github"></i> GitHub
          </a>`
        );
      }
      if (project.links.blog) {
        linkItems.push(
          `<a href="${project.links.blog}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="bi bi-medium"></i> Blog
          </a>`
        );
      }

      return `
        <article class="project-card">
          <a href="${primaryUrl}" target="_blank" rel="noopener noreferrer" class="project-card-image-link">
            <img
              src="${projectImageUrl(project)}"
              alt="${project.title} preview"
              class="project-card-image"
              loading="lazy"
            />
          </a>
          <div class="project-card-body">
            <div class="project-card-header">
              <a href="${primaryUrl}" target="_blank" rel="noopener noreferrer" class="project-card-title">
                ${project.title}
                <i class="bi bi-box-arrow-up-right project-card-external"></i>
              </a>
            </div>
            <p class="project-card-description">${project.description}</p>
            <div class="project-card-tags">${tags}</div>
            ${linkItems.length ? `<div class="project-card-links">${linkItems.join('')}</div>` : ''}
          </div>
        </article>
      `;
    })
    .join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);
