export type ThemeMode = 'light' | 'dark';

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
}

export interface HeroData {
  name: string;
  title: string;
  stackLine: string;
  summary: string;
  actions: HeroAction[];
}

export interface HeroHighlight {
  value: string;
  label: string;
  detail: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  experience: string;
  avatarUrl: string;
  availability: string;
  focusAreas: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  tone: 'emerald' | 'blue' | 'cyan' | 'slate' | 'amber';
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  external?: boolean;
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  status: string;
  statusTone: 'emerald' | 'blue' | 'amber';
  primaryAction: ProjectAction;
  secondaryAction?: ProjectAction;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  note: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  hint: string;
  available: boolean;
}

export interface ContactData {
  intro: string;
  closing: string;
  githubUrl: string;
  emailHref: string;
  items: ContactItem[];
}

export interface PortfolioSeo {
  title: string;
  description: string;
}

export interface PortfolioData {
  seo: PortfolioSeo;
  navItems: NavItem[];
  profile: ProfileData;
  hero: HeroData;
  highlights: HeroHighlight[];
  skills: SkillGroup[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem;
  contact: ContactData;
}

export const portfolioData: PortfolioData = {
  seo: {
    title: 'Alaa Mahmoud | Senior Full Stack .NET Developer',
    description:
      'Professional portfolio for Alaa Mahmoud, Senior Full Stack .NET Developer specializing in ASP.NET Core, Angular, SQL Server, integrations, and clean architecture.'
  },
  navItems: [
    { label: 'Home', sectionId: 'home' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Education', sectionId: 'education' },
    { label: 'Contact', sectionId: 'contact' }
  ],
  profile: {
    name: 'Alaa Mahmoud',
    title: 'Senior Full Stack .NET Developer',
    location: 'Giza, Egypt',
    experience: '7+ years',
    avatarUrl: 'https://github.com/EngAlaaMahmoud.png',
    availability: 'Open to senior engineering roles, architecture consulting, and enterprise delivery work.',
    focusAreas: [
      'Scalable enterprise web applications',
      'ERP systems, integrations, and internal platforms',
      'Angular frontends backed by clean ASP.NET Core APIs'
    ]
  },
  hero: {
    name: 'Alaa Mahmoud',
    title: 'Senior Full Stack .NET Developer',
    stackLine: 'ASP.NET Core | Angular | SQL Server | Clean Architecture',
    summary:
      'I build scalable enterprise web applications, ERP systems, booking platforms, dashboards, and integration solutions using ASP.NET Core, Angular, SQL Server, and Clean Architecture.',
    actions: [
      { label: 'View Projects', href: '#projects', variant: 'primary' },
      { label: 'Contact Me', href: '#contact', variant: 'secondary' },
      {
        label: 'GitHub',
        href: 'https://github.com/EngAlaaMahmoud',
        variant: 'ghost',
        external: true
      }
    ]
  },
  highlights: [
    {
      value: '7+',
      label: 'Years of experience',
      detail: 'Delivering production-grade business applications for real operational teams.'
    },
    {
      value: 'ERP',
      label: 'Enterprise specialization',
      detail: 'Focused on financial workflows, integrations, bookings, dashboards, and back-office systems.'
    },
    {
      value: 'API',
      label: 'Integration mindset',
      detail: 'Comfortable owning tax, invoicing, booking, and third-party service integrations end to end.'
    }
  ],
  skills: [
    {
      title: 'Backend',
      description: 'Robust APIs, secure services, background processing, and maintainable domain logic.',
      tone: 'emerald',
      items: ['ASP.NET Core', 'C#', 'REST APIs', 'EF Core', 'Identity', 'JWT', 'Hangfire']
    },
    {
      title: 'Frontend',
      description: 'Enterprise user interfaces that stay fast, responsive, and easy to maintain.',
      tone: 'blue',
      items: ['Angular', 'TypeScript', 'Angular Material', 'Tailwind', 'Responsive UI']
    },
    {
      title: 'Database',
      description: 'Data modeling and performance tuning for long-lived line-of-business systems.',
      tone: 'cyan',
      items: ['SQL Server', 'Stored Procedures', 'Query Optimization', 'Multi-tenant DB Design']
    },
    {
      title: 'Architecture',
      description: 'Practical patterns that improve reliability, testability, and delivery speed.',
      tone: 'slate',
      items: ['Clean Architecture', 'SOLID', 'Repository Pattern', 'CQRS basics', 'DDD basics']
    },
    {
      title: 'DevOps & Tools',
      description: 'Delivery and observability tooling that supports stable deployments and support work.',
      tone: 'amber',
      items: ['Git', 'GitHub', 'IIS', 'Docker basics', 'Serilog', 'Swagger', 'Postman']
    }
  ],
  experiences: [
    {
      role: 'Senior Full Stack .NET Developer',
      company: 'Nibras Al-Manar',
      location: 'Remote',
      period: 'Dec 2025 - Present',
      responsibilities: [
        'Building and maintaining enterprise web applications using ASP.NET Core and Angular.',
        'Working on ERP integrations, tax integrations, food authority integrations, and customer deployments.',
        'Handling production support, deployment, and client communication.'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'ERP Integrations', 'Production Support']
    },
    {
      role: 'Senior Full Stack .NET Developer',
      company: 'Ultimate Solutions',
      location: 'Egypt',
      period: '2023 - 2025',
      responsibilities: [
        'Developed ERP modules and financial/invoicing workflows.',
        'Worked with Angular, .NET, SQL Server, microservices concepts, RabbitMQ, Docker, and CI/CD.',
        'Improved performance, maintainability, and system reliability.'
      ],
      technologies: ['Angular', '.NET', 'SQL Server', 'RabbitMQ', 'Docker', 'CI/CD']
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'Independent',
      location: 'Giza, Egypt',
      period: 'Selected engagements',
      responsibilities: [
        'Built small business systems, dashboards, ERP modules, and integrations.',
        'Delivered practical solutions for local clients.'
      ],
      technologies: ['.NET', 'Angular', 'Dashboards', 'ERP Modules', 'Client Delivery']
    }
  ],
  projects: [
    {
      name: 'Mini ERP',
      description:
        'Lightweight ERP system for inventory, sales, purchases, customers, suppliers, and warehouse management.',
      tags: ['.NET', 'Blazor/Angular', 'SQL Server', 'Clean Architecture'],
      status: 'Operations platform',
      statusTone: 'emerald',
      primaryAction: { label: 'Discuss Project', href: '#contact', variant: 'primary' },
      secondaryAction: {
        label: 'GitHub Profile',
        href: 'https://github.com/EngAlaaMahmoud',
        variant: 'secondary',
        external: true
      }
    },
    {
      name: 'GoFleet / Bus Booking Platform',
      description:
        'Fleet and bus reservation management platform with authentication, vehicles, drivers, trips, and dashboards.',
      tags: ['.NET 9', 'Angular', 'JWT', 'Clean Architecture'],
      status: 'Booking workflow',
      statusTone: 'blue',
      primaryAction: { label: 'Discuss Project', href: '#contact', variant: 'primary' },
      secondaryAction: {
        label: 'GitHub Profile',
        href: 'https://github.com/EngAlaaMahmoud',
        variant: 'secondary',
        external: true
      }
    },
    {
      name: 'GoldBranch Integration',
      description:
        'Multi-tenant e-invoicing and integration system with Angular SSR frontend, ASP.NET Core API, JWT authentication, and SQL Server tenant resolution.',
      tags: ['ASP.NET Core', 'Angular SSR', 'SQL Server', 'Multi-tenancy'],
      status: 'Enterprise integration',
      statusTone: 'amber',
      primaryAction: { label: 'Discuss Project', href: '#contact', variant: 'primary' },
      secondaryAction: {
        label: 'GitHub Profile',
        href: 'https://github.com/EngAlaaMahmoud',
        variant: 'secondary',
        external: true
      }
    },
    {
      name: 'Egypt E-Invoice API',
      description:
        'Integration with Egyptian Tax Authority e-invoicing including document serialization, USB token signing, and invoice submission.',
      tags: ['.NET', 'ETA', 'PKCS#11', 'Digital Signature'],
      status: 'Government API',
      statusTone: 'amber',
      primaryAction: { label: 'Discuss Project', href: '#contact', variant: 'primary' },
      secondaryAction: {
        label: 'GitHub Profile',
        href: 'https://github.com/EngAlaaMahmoud',
        variant: 'secondary',
        external: true
      }
    },
    {
      name: 'Zid ERP Integration',
      description:
        'Middleware concept for connecting Zid orders with local ERP database for invoices, stock, payments, and accounting.',
      tags: ['.NET', 'Webhooks', 'SQL Server', 'Hangfire'],
      status: 'Middleware concept',
      statusTone: 'emerald',
      primaryAction: { label: 'Discuss Project', href: '#contact', variant: 'primary' },
      secondaryAction: {
        label: 'GitHub Profile',
        href: 'https://github.com/EngAlaaMahmoud',
        variant: 'secondary',
        external: true
      }
    },
    {
      name: 'ERP Dashboard Theme',
      description:
        'Angular ERP dashboard template focused on inventory, warehouses, orders, suppliers, and analytics.',
      tags: ['Angular', 'Tailwind', 'Dashboard UI'],
      status: 'UI system',
      statusTone: 'blue',
      primaryAction: { label: 'Discuss Project', href: '#contact', variant: 'primary' },
      secondaryAction: {
        label: 'GitHub Profile',
        href: 'https://github.com/EngAlaaMahmoud',
        variant: 'secondary',
        external: true
      }
    }
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Higher Institute of Computer Science - Culture and Science City',
    period: '2012 - 2017',
    note: 'Built a strong foundation in software engineering, databases, systems analysis, and practical application development.'
  },
  contact: {
    intro:
      'If you are building an ERP platform, internal business system, dashboard, or integration-heavy product, I can help translate business needs into reliable software.',
    closing:
      'Available for senior engineering roles, solution architecture support, and enterprise delivery collaborations.',
    githubUrl: 'https://github.com/EngAlaaMahmoud',
    emailHref: 'mailto:your.email@example.com',
    items: [
      {
        label: 'GitHub',
        value: 'github.com/EngAlaaMahmoud',
        href: 'https://github.com/EngAlaaMahmoud',
        hint: 'Code samples, side projects, and portfolio source.',
        available: true
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/your-linkedin',
        href: 'https://www.linkedin.com/in/your-linkedin/',
        hint: 'Placeholder ready to replace from this data file.',
        available: false
      },
      {
        label: 'Email',
        value: 'your.email@example.com',
        href: 'mailto:your.email@example.com',
        hint: 'Placeholder ready to replace from this data file.',
        available: false
      },
      {
        label: 'Location',
        value: 'Giza, Egypt',
        href: 'https://maps.google.com/?q=Giza,Egypt',
        hint: 'Based in Egypt and available for remote collaboration.',
        available: true
      }
    ]
  }
};
