const defaultState = {
  session: {
    shiftsToggle: false,
    loggedIn: false,
  },
  pending: {
    speciality: 'A&E',
    currentMonth: {
      month: 5,
      year: 2017,
      staff: [
        {
          name: 'Dr Example',
          grade: 'SHO',
          allotedLeave: 12,
        },
      ],
      shifts: [
        {
          date: 22,
          time: '1000-2200',
          grade: 'SHO',
          assigned: 'Dr Example',
        },
        {
          date: 12,
          time: '1600-0200',
          assigned: 'Dr Example',
        },
      ],
    },
  },
};

export default defaultState;
