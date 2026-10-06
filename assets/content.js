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
    linkedin: "https://www.linkedin.com/in/ayhan-simsek-700a11181/"
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
        { code: "E1.1", title: "Yearly VET Study Plan (High-Level)", source: "Year planner balancing study, work and family – Assessment Task 1", file: "evidence/cluster-1/yearly-vet-study-plan.pdf" },
        { code: "E1.2", title: "Professional Teaching Map", source: "Self-assessment of my teaching values, knowledge and skills – Assessment Task 2", file: "evidence/cluster-1/professional-teaching-map.pdf" },
        { code: "E1.3", title: "VET Landscape activity", source: "Cluster 1 – Session 4", file: "" },
        { code: "E1.4", title: "Vocational Competency Matrix (VCM)", source: "My qualifications, industry experience and currency – Assessment Task 2", file: "evidence/cluster-1/vocational-competency-matrix.pdf" },
        { code: "E1.5", title: "Professional Development Plan", source: "Skills I plan to develop as a trainer and how – Assessment Task 2", file: "evidence/cluster-1/professional-development-plan.pdf" }
      ],
      reflection: {
        title: "VET Trainer Philosophy",
        media: "",
        questions: [
          { q: "Why I want to become a VET trainer",
            prompt: "1.1 Describe why you want to become a VET trainer. Include at least two reasons or examples that show how your background aligns with the VET sector, and how this motivation will influence your future teaching.",
            answer: `I started my career as a Physics and Computer Science teacher, then moved into IT support. In both jobs the part I enjoyed most was the moment someone finally "got it", whether it was a student or a staff member who couldn't connect to the Wi-Fi.

VET suits me because it is practical. Most of what I know about IT I learned by doing it on the job, and that is how VET teaches. I want my classes to feel like a real workplace, with real tickets, real devices and real problems to solve.` },
          { q: "Where I get feedback and support",
            prompt: "1.2 Identify where you will get feedback and support during the course. Describe at least three sources and explain how each one will help you develop as a VET practitioner.",
            answer: `My trainers and assessors are the first source. Their written feedback on each task tells me what meets the standard and what doesn't.

My classmates are the second. We reviewed each other's session plans in Cluster 2, and they often spot things I miss.

The third is the people I train. Learner feedback forms are the most honest check on whether a session actually worked. I also keep in touch with former IT colleagues so my examples stay current.` },
          { q: "Challenges and how I will manage them",
            prompt: "1.3 Explain the challenges you may face during the course. Include at least two challenges, why they may arise, and how you plan to manage them.",
            answer: `The first challenge is the paperwork. Assessment templates and VET terms like PC, PE and KE were new to me, and I lost time early on working out what each question was really asking. I now read the marking criteria before I start writing.

The second is time. Classes are only on Saturdays, so most of the work happens during the week alongside work and family life. Planning the whole year in advance helps me see busy periods coming.` },
          { q: "Organising my study time",
            prompt: "1.4 Describe how you will organise your study time and responsibilities. Include at least two strategies and explain how these will help you stay on track.",
            answer: `I use a yearly planner with all assessment due dates and family commitments on one page, so I can see clashes early. Each week I break the next task into small pieces and put them in my calendar.

I also try to finish a draft a few days before the due date. That leaves time to ask my trainer a question or fix something after a second read, instead of rushing the night before.` }
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
        { code: "E2.1", title: "Training and Assessment Strategy (TAS)", source: "Training program for a unit of competency – Assessment Task 2", file: "evidence/taedes411/training-and-assessment-strategy.pdf" }
      ],
      reflection: {
        title: "TAEDES411 Reflection",
        media: "",
        questions: [
          { q: "Packaging rules",
            prompt: "Describe what is meant by packaging rules.",
            answer: `Packaging rules explain how a qualification is put together. They say how many units you need in total, which core units are compulsory, and how many electives you can choose and where from, including units from other training packages.

As a trainer, they matter because the course I deliver has to follow them. If the units don't meet the rules, the learner doesn't get the qualification, even if they passed every unit.` },
          { q: "Stakeholders in training design",
            prompt: "Identify the main stakeholders that you would consider when designing training.",
            answer: `The main stakeholders are the learners, the employer or industry client, and the RTO. Learners bring their own needs and experience. The employer knows what the job really needs and when staff can attend. In my TAEDES411 task, the client wanted training outside 9 to 5, so I planned weekly evening sessions.

Others include industry bodies, the training package developers and the regulator, ASQA, because the training must meet the standards.` }
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
        { code: "E3.1", title: "Group Training and Delivery Plans", source: "Two ICT units planned for an industry client – Assessment Task 3", file: "evidence/cluster-2/group-training-and-delivery-plans.pdf" },
        { code: "E3.2", title: "Session plans (six sessions, two units)", source: "Session plans with peer and assessor feedback – Assessment Task 4", file: "evidence/cluster-2/session-plans.pdf" },
        { code: "E3.3", title: "Foundation skills session and resources", source: "Delivered session with cheat sheet, glossary and learner feedback – Assessment Task 5", file: "evidence/cluster-2/foundation-skills-session.pdf" }
      ],
      reflection: {
        title: "Cluster 2 Reflection",
        media: "",
        questions: [
          { q: "Universal Design for Learning",
            prompt: "Describe how your learning programs supported Universal Design for Learning (UDL): multiple means of engagement, representation, and action and expression.",
            answer: `I tried to give learners more than one way into each topic. For engagement, I used real IT scenarios like troubleshooting a faulty PC or a network outage, so the content felt relevant to their jobs.

For representation, I explained ideas verbally, showed them on screen and gave cheat sheets and glossaries to keep. For action and expression, learners could show what they knew through hands-on labs, short quizzes, diagrams in draw.io or written incident reports.` },
          { q: "The AQF and training design",
            prompt: "Explain how the Australian Qualifications Framework (AQF) supports or affects the design of training.",
            answer: `The AQF level tells me how deep the training needs to go. My plans were for ICT40120 Certificate IV in Information Technology, which is AQF level 4. At that level learners should apply skills in different situations and solve problems with some independence, not just follow steps.

So instead of only showing how to configure something, I added troubleshooting tasks where learners had to find the fault themselves and write up what they did.` },
          { q: "Using industry feedback",
            prompt: "Describe how you incorporated industry feedback into your learning design.",
            answer: `For my Group Training and Delivery Plans, I consulted an IT manager at a Melbourne IT services company. She wanted junior technicians to get faster at diagnosing network and hardware problems and to follow security procedures more closely.

That shaped the content. I put more time into hands-on troubleshooting labs and added ticket and incident report writing, because that is what the team does every day. My assessor also suggested a mid-lab check-in to keep timing on track, which I added.` }
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
        { code: "E2.1", title: "Work skill session: Outlook rules and folders", source: "Plan, learner records, feedback and observation checklist – Assessment Task 2", file: "evidence/taedel311/work-skill-session.pdf" }
      ],
      reflection: {
        title: "TAEDEL311 Reflection",
        media: "",
        questions: [
          { q: "What I would improve",
            prompt: "Reflect on your deliveries in the workplace (resources used, where and how you delivered). What do you think you could improve on in future deliveries in the workplace?",
            answer: `I taught one learner how to create folders and automatic rules in Outlook. Next time I would check the learner's setup before the session. They had two email accounts in Outlook, which caused some confusion I hadn't planned for.

The learner's feedback also pointed out two simple things: my invitation email said "tomorrow" instead of a date and didn't say AM or PM, and the handout had a small typo. I now use a clear template for invitations and proofread everything before printing.` },
          { q: "What I did well",
            prompt: "What do you think you did well?",
            answer: `The session was practical from start to finish. The learner worked on their own laptop while I sat beside them, so they were doing it, not just watching.

Sending a live test email to trigger the new rule worked really well. They could see the email land in the right folder straight away. By the end they had set up a folder and a rule on their own, and said it was a skill they would use every day.` }
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
