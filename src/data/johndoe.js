const johnDoe = () => {
  return {
    info: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohnDoe@gmail.com',
      phoneNumber: '123-456-7890',
    },
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'C#',
      'C++',
      'Ruby',
      'Python',
      'Java',
      'PHP',
    ],
    education: [
      {
        Name: 'Stanford University',
        Location: 'Standford, CA',
        Degree: 'Bachelor of Sciences (BS)',
        Major: 'Computer Science',
        DateCompleted: '2021-01-01',
      },
    ],
    jobs: [
      {
        Name: 'Facebook',
        Title: 'Software Engineer',
        Location: 'Menlo Park, CA',
        Start: '01-01-2021',
        End: '04-01-2021',
        Description: [
          'Work closely with our product and design teams to build new and innovative application experiences for the iOS platform',
          'Implement custom native user interfaces using the latest iOS programming techniques',
          'Build reusable iOS software components for interfacing with our back-end platforms',
        ],
      },
      {
        Name: 'Google',
        Title: 'Product Manager',
        Location: 'Mountain View, CA',
        Start: '01-01-2021',
        End: '04-01-2021',
        Description: [
          'Work collaboratively with engineering, marketing, legal, UX, and other teams on cutting edge technologies.',
          'Understand markets, competition, and user requirements in depth.',
          'Launch new products and features, test their performance, and iterate quickly.',
        ],
      },
      {
        Name: 'Tesla',
        Title: 'Simulation Engineer',
        Location: 'Grand Rapids, MI',
        Start: '01-01-2021',
        End: '04-01-2021',
        Description: [
          'Lead design for manufacturing formability studies, working with the product designer to determine best tooling plan for all stamped parts.',
          'ead tooling engineering team in developing formability plans and laying out tooling processes for sheet metal stamping parts – ranging from large Class A automotive parts to small progressive parts.',
          'Use Autoform and/or PamStamp simulation software to setup and run formability feasibility studies on sheet metal stamping parts/processes. This includes the completion of all trim development and form compensations.',
        ],
      },
    ],
    references: [
      {
        Name: 'Steve Jobs',
        Relation: 'Mentor',
        PhoneNumber: '123-456-7890',
      },
      {
        Name: 'Bill Gates',
        Relation: 'Finance Manager',
        PhoneNumber: '098-654-3210',
      },
      {
        Name: 'Tim Jackson',
        Relation: 'Best Friend',
        PhoneNumber: '999-999-9999',
      },
    ],
  };
};

export default johnDoe;
