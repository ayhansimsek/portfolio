/* =====================================================================
   PORTFOLIO CONTENT — edit this file to update the website.
   ---------------------------------------------------------------------
   • Each "section" below is one page in the top menu (Units ▾).
   • status: "complete" | "in-progress" | "upcoming"
   • Evidence: put the file in the evidence/<section-id>/ folder and
     write its path in "file", e.g. "evidence/cluster-3/feedback-jo.pdf".
     For a video, paste a link (YouTube unlisted, OneDrive, Google Drive)
     in "file" instead. Leave "file" empty ("") until it is ready.
   • Reflection answers: write your text between the backticks ` `.
     Leave it empty (``) until it is ready. Use a blank line for a new
     paragraph. For an audio/video reflection, put its link in "media".
   ===================================================================== */

window.PORTFOLIO = {
  owner: {
    name: "Ayhan Simsek",
    qualification: "TAE40122 Certificate IV in Training and Assessment",
    provider: "Box Hill Institute",
    location: "Melbourne, Australia",
    email: "ayhansimsek@hotmail.com",
    linkedin: "https://www.linkedin.com/in/ayhansimsek"
  },

  sections: [
    /* ---------------------------------------------------------------- */
    {
      id: "cluster-1",
      label: "Cluster 1",
      title: "Working in the VET sector",
      units: [
        ["TAEPDD401", "Work effectively in the VET sector"],
        ["BSBPEF301", "Organise personal work priorities"]
      ],
      status: "complete",
      summary: "Planning my study, mapping my professional teaching practice and understanding the VET landscape I will be working in.",
      evidence: [
        { code: "E1.1", title: "Yearly VET Study Plan (High-Level)", source: "Cluster 1 – Assessment Task 1, Part 1", file: "" },
        { code: "E1.2", title: "Professional Teaching Map", source: "Cluster 1 – Assessment Task 2, Part 2", file: "" },
        { code: "E1.3", title: "VET Landscape activity", source: "Cluster 1 – Session 4", file: "" },
        { code: "E1.4", title: "Vocational Competency Matrix (VCM)", source: "Cluster 1 – Task 2", file: "" },
        { code: "E1.5", title: "Professional Development Plan", source: "Cluster 1 – Task 2", file: "" }
      ],
      reflection: {
        title: "VET Trainer Philosophy",
        media: "",
        questions: [
          { q: "Why I want to become a VET trainer",
            prompt: "1.1 Describe why you want to become a VET trainer. Include at least two reasons or examples that show how your background aligns with the VET sector, and how this motivation will influence your future teaching.",
            answer: `` },
          { q: "Where I get feedback and support",
            prompt: "1.2 Identify where you will get feedback and support during the course. Describe at least three sources and explain how each one will help you develop as a VET practitioner.",
            answer: `` },
          { q: "Challenges and how I will manage them",
            prompt: "1.3 Explain the challenges you may face during the course. Include at least two challenges, why they may arise, and how you plan to manage them.",
            answer: `` },
          { q: "Organising my study time",
            prompt: "1.4 Describe how you will organise your study time and responsibilities. Include at least two strategies and explain how these will help you stay on track.",
            answer: `` }
        ]
      }
    },

    /* ---------------------------------------------------------------- */
    {
      id: "taedes411",
      label: "TAEDES411",
      title: "Use nationally recognised training products",
      units: [["TAEDES411", "Use nationally recognised training products to meet vocational training needs"]],
      status: "complete",
      summary: "Reading training packages, packaging rules and units of competency, and using them to build a Training and Assessment Strategy.",
      evidence: [
        { code: "E2.1", title: "Training and Assessment Strategy (TAS)", source: "TAEDES411 – Task 2", file: "" }
      ],
      reflection: {
        title: "TAEDES411 Reflection",
        media: "",
        questions: [
          { q: "Packaging rules",
            prompt: "Describe what is meant by packaging rules.",
            answer: `` },
          { q: "Stakeholders in training design",
            prompt: "Identify the main stakeholders that you would consider when designing training.",
            answer: `` }
        ]
      }
    },

    /* ---------------------------------------------------------------- */
    {
      id: "cluster-2",
      label: "Cluster 2",
      title: "Designing learning programs",
      units: [
        ["TAEDES412", "Design and develop plans for vocational training"],
        ["TAELLN422", ""]
      ],
      status: "complete",
      summary: "Designing learning programs and resources for diverse learners, aligned with the AQF and with industry input.",
      evidence: [
        { code: "E3.1", title: "Group Training and Delivery Plan", source: "Cluster 2 assessment", file: "" },
        { code: "E3.2", title: "Session plan (unit 1)", source: "Cluster 2 assessment", file: "" },
        { code: "E3.2", title: "Session plan (unit 2)", source: "Cluster 2 assessment", file: "" },
        { code: "E3.3", title: "Learning resource I created", source: "Cluster 2 – PowerPoint, worksheet or visual aid", file: "" }
      ],
      reflection: {
        title: "Cluster 2 Reflection",
        media: "",
        questions: [
          { q: "Universal Design for Learning",
            prompt: "Describe how your learning programs supported Universal Design for Learning (UDL): multiple means of engagement, representation, and action and expression.",
            answer: `` },
          { q: "The AQF and training design",
            prompt: "Explain how the Australian Qualifications Framework (AQF) supports or affects the design of training.",
            answer: `` },
          { q: "Using industry feedback",
            prompt: "Describe how you incorporated industry feedback into your learning design.",
            answer: `` }
        ]
      }
    },

    /* ---------------------------------------------------------------- */
    {
      id: "taedel311",
      label: "TAEDEL311",
      title: "Provide work skill instruction",
      units: [["TAEDEL311", "Provide work skill instruction"]],
      status: "complete",
      summary: "Planning and delivering a short work skill session in a workplace setting.",
      evidence: [
        { code: "E2.1", title: "Recording of my work skill session", source: "TAEDEL311 – Task 2", file: "" }
      ],
      reflection: {
        title: "TAEDEL311 Reflection",
        media: "",
        questions: [
          { q: "What I would improve",
            prompt: "Reflect on your deliveries in the workplace (resources used, where and how you delivered). What do you think you could improve on in future deliveries in the workplace?",
            answer: `` },
          { q: "What I did well",
            prompt: "What do you think you did well?",
            answer: `` }
        ]
      }
    },

    /* ---------------------------------------------------------------- */
    {
      id: "cluster-3",
      label: "Cluster 3",
      title: "Delivering group and workplace training",
      units: [
        ["TAEDEL411", "Facilitate vocational training"],
        ["TAEDEL412", "Facilitate workplace-based learning"]
      ],
      status: "in-progress",
      summary: "Planning, delivering, adapting and evaluating group training sessions and one-to-one workplace-based learning.",
      evidence: [
        { code: "E5.1", title: "Learner feedback from my group sessions", source: "Cluster 3 – one learner's feedback form", file: "" },
        { code: "E5.2", title: "Video of a group training session", source: "Cluster 3 – Assessment Task 2", file: "" }
      ],
      reflection: {
        title: "Cluster 3 Reflection",
        media: "",
        questions: [
          { q: "How my sessions went",
            prompt: "Describe how you believe your sessions went for this cluster.",
            answer: `` },
          { q: "Participant feedback",
            prompt: "Summarise the feedback you received from your participants.",
            answer: `` },
          { q: "Assessor feedback",
            prompt: "Summarise the feedback you received from your assessor.",
            answer: `` },
          { q: "Making my training more inclusive",
            prompt: "Explain how you would adapt your training to be more inclusive.",
            answer: `` }
        ]
      }
    },

    /* ---------------------------------------------------------------- */
    {
      id: "cluster-4",
      label: "Cluster 4",
      title: "Competency-based assessment",
      units: [
        ["TAEASS412", "Assess competence"],
        ["TAEASS413", "Participate in assessment validation"]
      ],
      status: "upcoming",
      summary: "Conducting competency-based assessment, giving clear feedback and supporting learners before and after assessment.",
      evidence: [
        { code: "E5.1", title: "Observation Checklist I created", source: "Cluster 4 – Assessment Task 4", file: "" },
        { code: "E5.2", title: "Assessment Result and Feedback Form (student)", source: "Cluster 4 – Assessment Task 4", file: "" },
        { code: "E5.3", title: "Assessment Result and Feedback Form (RPL candidate)", source: "Cluster 4 – Assessment Task 4", file: "" }
      ],
      reflection: {
        title: "Cluster 4 Reflection",
        media: "",
        questions: [
          { q: "Competency-based assessment",
            prompt: "5.1 Describe how competency-based assessment is different from other forms of assessment.",
            answer: `` },
          { q: "Why clear feedback matters",
            prompt: "5.2 Explain why clear assessment feedback is important for student growth.",
            answer: `` },
          { q: "Helping learners feel comfortable",
            prompt: "5.3 Describe how you can make students feel comfortable before an assessment.",
            answer: `` }
        ]
      }
    },

    /* ---------------------------------------------------------------- */
    {
      id: "cluster-5",
      label: "Cluster 5",
      title: "Online learning and assessment",
      units: [
        ["TAEDEL405", "Plan, organise and facilitate online learning"],
        ["TAEASS404", ""]
      ],
      status: "upcoming",
      summary: "Designing, delivering and evaluating online learning in synchronous and asynchronous formats.",
      evidence: [
        { code: "E6.1", title: "Video of one of my online sessions", source: "Cluster 5 – Assessment Task 2 or 3", file: "" },
        { code: "E6.2", title: "Synchronous learning activity", source: "Cluster 5 – Assessment Task 2", file: "" },
        { code: "E6.3", title: "Asynchronous assessment activity", source: "Cluster 5 – Assessment Task 3", file: "" }
      ],
      reflection: {
        title: "Cluster 5 Reflection",
        media: "",
        questions: [
          { q: "Online training in the workplace",
            prompt: "6.1 Describe how online training could be beneficial in your workplace.",
            answer: `` },
          { q: "My concerns about online learning",
            prompt: "6.2 Identify your concerns about online learning and assessment in VET.",
            answer: `` },
          { q: "Building learners' digital skills",
            prompt: "6.3 Describe how learners can improve their digital skills to participate fully in the workplace after completing their course.",
            answer: `` }
        ]
      }
    }
  ]
};
