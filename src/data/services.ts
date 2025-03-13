export interface ServiceTrait {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  briefDescription: string;
  fullDescription: string;
  imagePath: string;
  iconPath?: string;
  traits: ServiceTrait[];
  symptoms: string[];
  isCommon?: boolean;
}

const services: Service[] = [
  {
    id: "aki",
    title: "Acute Kidney Injury (AKI)",
    shortTitle: "AKI",
    slug: "aki",
    briefDescription: "Sudden decline in kidney function requiring immediate medical attention",
    fullDescription: "Acute Kidney Injury represents a sudden decrease in kidney function that develops within a few hours or days. Dr. Rajdeb Saha specializes in diagnosing the underlying causes of AKI and implementing targeted treatment plans to prevent progression and restore kidney function.",
    imagePath: "/images/services/aki.jpg",
    iconPath: "/icons/aki-icon.svg",
    traits: [
      {
        title: "Rapid Onset",
        description: "AKI develops quickly, often within hours or days, requiring prompt medical intervention"
      },
      {
        title: "Potentially Reversible",
        description: "With early diagnosis and proper treatment, AKI can often be reversed before permanent damage occurs"
      },
      {
        title: "Multi-factorial",
        description: "Can be caused by decreased blood flow to kidneys, direct kidney damage, or urinary tract obstruction"
      }
    ],
    symptoms: [
      "Decreased urine output",
      "Fluid retention causing swelling in legs, ankles or feet",
      "Shortness of breath",
      "Fatigue",
      "Confusion",
      "Nausea",
      "Chest pain or pressure",
      "Seizures or coma in severe cases"
    ],
    isCommon: true
  },
  {
    id: "ckd",
    title: "Chronic Kidney Disease (CKD)",
    shortTitle: "CKD",
    slug: "ckd",
    briefDescription: "Progressive loss of kidney function over months or years requiring specialized management",
    fullDescription: "Chronic Kidney Disease involves the gradual loss of kidney function over time. Dr. Rajdeb Saha provides comprehensive management strategies to slow progression, treat complications, and improve quality of life for patients with all stages of CKD.",
    imagePath: "/images/services/ckd.jpg",
    iconPath: "/icons/ckd-icon.svg",
    traits: [
      {
        title: "Progressive",
        description: "CKD typically develops slowly over months or years, often without noticeable symptoms until advanced stages"
      },
      {
        title: "Staged Approach",
        description: "Managed according to five stages based on glomerular filtration rate (GFR) measurements"
      },
      {
        title: "Multidisciplinary Care",
        description: "Requires coordinated care addressing diet, medications, comorbidities, and preparation for possible dialysis or transplant"
      }
    ],
    symptoms: [
      "High blood pressure",
      "Anemia",
      "Bone disease",
      "Decreased appetite",
      "Swelling in feet and ankles",
      "Fatigue and weakness",
      "Sleep problems",
      "Changes in urination",
      "Persistent itching"
    ],
    isCommon: true
  },
  {
    id: "glomerulonephritis",
    title: "Glomerulonephritis",
    shortTitle: "Glomerulonephritis",
    slug: "glomerulonephritis",
    briefDescription: "Inflammation of the kidney's filtering units requiring specialized treatment",
    fullDescription: "Glomerulonephritis involves inflammation of the glomeruli, the tiny filtering units in the kidneys. Dr. Rajdeb Saha has extensive experience in diagnosing various forms of glomerulonephritis and providing targeted immunosuppressive and supportive therapies.",
    imagePath: "/images/services/glomerulonephritis.webp",
    iconPath: "/icons/glomerulonephritis-icon.svg",
    traits: [
      {
        title: "Immune-mediated",
        description: "Often caused by immune system disorders that damage the kidney's filtering units"
      },
      {
        title: "Varied Presentation",
        description: "Can present acutely or chronically, with symptoms ranging from mild to severe"
      },
      {
        title: "Diagnostic Challenge",
        description: "May require kidney biopsy for accurate diagnosis and treatment planning"
      }
    ],
    symptoms: [
      "Blood in urine (hematuria)",
      "Foamy urine due to excess protein",
      "High blood pressure",
      "Fluid retention with swelling in face, hands, feet, and abdomen",
      "Decreased urine output",
      "Joint or skin problems in immune-related cases"
    ]
  },
  {
    id: "electrolyte-imbalance",
    title: "Electrolyte Imbalance",
    shortTitle: "Electrolyte Disorders",
    slug: "electrolyte-imbalance",
    briefDescription: "Abnormal levels of essential minerals in the blood requiring specialized correction",
    fullDescription: "Electrolyte imbalances occur when essential minerals in your blood are too high or too low. Dr. Rajdeb Saha provides expert diagnosis and treatment for disorders involving sodium, potassium, calcium, magnesium, and other critical electrolytes.",
    imagePath: "/images/services/electrolyte.webp",
    iconPath: "/icons/electrolyte-icon.svg",
    traits: [
      {
        title: "Critical for Function",
        description: "Electrolytes are essential for nerve and muscle function, blood pH, and cellular processes"
      },
      {
        title: "Multiple Causes",
        description: "Can result from kidney disease, medications, dehydration, or other medical conditions"
      },
      {
        title: "Precise Correction",
        description: "Requires careful monitoring and balanced correction to avoid complications"
      }
    ],
    symptoms: [
      "Irregular heartbeat",
      "Muscle weakness or cramping",
      "Fatigue",
      "Confusion",
      "Numbness and tingling",
      "Headaches",
      "Seizures in severe cases",
      "Changes in blood pressure"
    ]
  },
  {
    id: "diabetic-kidney-disease",
    title: "Diabetic Kidney Disease",
    shortTitle: "Diabetic Nephropathy",
    slug: "diabetic-kidney-disease",
    briefDescription: "Kidney damage resulting from diabetes requiring specialized management",
    fullDescription: "Diabetic Kidney Disease is a common complication of both Type 1 and Type 2 diabetes. Dr. Rajdeb Saha provides integrated care focusing on glycemic control, blood pressure management, and kidney protection to slow progression and prevent complications.",
    imagePath: "/images/services/diabetic-kidney.webp",
    iconPath: "/icons/diabetes-icon.svg",
    traits: [
      {
        title: "Progressive",
        description: "Typically develops over years of diabetes exposure, with early intervention being critical"
      },
      {
        title: "Preventable",
        description: "Tight control of blood sugar and blood pressure can significantly reduce risk"
      },
      {
        title: "Detectable Early",
        description: "Regular screening can detect microalbuminuria (small amounts of protein in urine) before symptoms appear"
      }
    ],
    symptoms: [
      "Protein in urine (often detected before symptoms appear)",
      "Swelling in legs, ankles, feet, or hands",
      "Frequent urination",
      "Increased blood pressure",
      "Confusion or difficulty concentrating",
      "Loss of appetite",
      "Persistent itching",
      "Fatigue"
    ],
    isCommon: true
  },
  {
    id: "hypertension",
    title: "Hypertension Management",
    shortTitle: "Hypertension",
    slug: "hypertension",
    briefDescription: "Specialized treatment for high blood pressure affecting kidney health",
    fullDescription: "Hypertension (high blood pressure) can both cause and result from kidney disease. Dr. Rajdeb Saha offers specialized care for complex and resistant hypertension, including comprehensive evaluation for secondary causes and personalized treatment plans.",
    imagePath: "/images/services/hypertension.jpg",
    iconPath: "/icons/hypertension-icon.svg",
    traits: [
      {
        title: "Bidirectional Relationship",
        description: "Can both cause kidney damage and result from kidney dysfunction"
      },
      {
        title: "Often Resistant",
        description: "Kidney-related hypertension frequently requires multiple medications and specialized approaches"
      },
      {
        title: "Secondary Causes",
        description: "May be caused by underlying conditions requiring specific diagnosis and treatment"
      }
    ],
    symptoms: [
      "Often asymptomatic until advanced",
      "Headaches (particularly in the morning)",
      "Blurred vision",
      "Dizziness",
      "Shortness of breath",
      "Nosebleeds",
      "Flushing",
      "Blood in urine in severe cases"
    ],
    isCommon: true
  },
  {
    id: "kidney-transplant",
    title: "Kidney Transplant Care",
    shortTitle: "Transplant",
    slug: "kidney-transplant",
    briefDescription: "Comprehensive pre and post-transplant care for kidney transplant patients",
    fullDescription: "Dr. Rajdeb Saha provides expert care for patients before and after kidney transplantation. Services include transplant evaluation, waitlist management, immunosuppression monitoring, and long-term care to optimize transplant outcomes and quality of life.",
    imagePath: "/images/services/kidney-transplant.jpg",
    iconPath: "/icons/transplant-icon.svg",
    traits: [
      {
        title: "Life-Changing",
        description: "Transplantation offers better quality of life and survival compared to dialysis for eligible patients"
      },
      {
        title: "Requires Lifelong Care",
        description: "Ongoing immunosuppression and monitoring are essential for transplant survival"
      },
      {
        title: "Multidisciplinary",
        description: "Involves coordination between nephrologists, surgeons, immunologists, and other specialists"
      }
    ],
    symptoms: [
      "This is not a disease but a treatment approach",
      "Post-transplant monitoring focuses on signs of rejection:",
      "Decreased urine output",
      "Pain or tenderness over transplant site",
      "Fever",
      "Flu-like symptoms",
      "Elevated creatinine levels",
      "Side effects from immunosuppressive medications"
    ]
  },
  {
    id: "interventional-procedures",
    title: "Interventional Nephrology Procedures",
    shortTitle: "Procedures",
    slug: "interventional-procedures",
    briefDescription: "Specialized minimally invasive procedures for kidney disease diagnosis and treatment",
    fullDescription: "Dr. Rajdeb Saha offers various interventional nephrology procedures including kidney biopsies, dialysis access management, and minimally invasive treatments. These procedures are performed with advanced techniques to ensure patient safety and optimal outcomes.",
    imagePath: "/images/services/interventions.jpg",
    iconPath: "/icons/procedure-icon.svg",
    traits: [
      {
        title: "Minimally Invasive",
        description: "Many procedures can be performed with minimal discomfort and faster recovery"
      },
      {
        title: "Diagnostic and Therapeutic",
        description: "Procedures may be used for both diagnosis (biopsies) and treatment (access placement)"
      },
      {
        title: "Advanced Technology",
        description: "Utilizes ultrasound guidance and other modern techniques for precision and safety"
      }
    ],
    symptoms: [
      "This is not a disease but a treatment approach",
      "Procedures address various conditions including:",
      "Need for tissue diagnosis via biopsy",
      "Dialysis access creation or maintenance",
      "Fluid collection drainage",
      "Catheter placement for peritoneal dialysis",
      "Management of vascular access complications"
    ]
  }
];

export default services;

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getAllServices = (): Service[] => {
  return services;
};

export const getCommonServices = (): Service[] => {
  return services.filter(service => service.isCommon);
};