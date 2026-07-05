// Temporary mock data so the UI has something real to render before
// the API, MongoDB, and auth layers are wired in.

export const MOCK_USER = {
  name: "Aditi Sharma",
  email: "aditi.sharma@intellmeet.io",
  role: "Product Designer",
  initials: "AS",
};

export const MOCK_MEETINGS = [
  {
    id: "9182-4471-203",
    title: "Design Sync — Q3 Roadmap",
    host: "Aditi Sharma",
    date: "Today",
    time: "10:30 AM",
    durationMins: 45,
    participants: 6,
    status: "live",
  },
  {
    id: "5520-1187-994",
    title: "Intern Stand-up",
    host: "Rohan Mehta",
    date: "Today",
    time: "4:00 PM",
    durationMins: 15,
    participants: 9,
    status: "upcoming",
  },
  {
    id: "7734-6602-810",
    title: "Client Walkthrough — IntellMeet",
    host: "Aditi Sharma",
    date: "Tomorrow",
    time: "11:00 AM",
    durationMins: 60,
    participants: 4,
    status: "upcoming",
  },
  {
    id: "3309-8845-271",
    title: "Sprint Retrospective",
    date: "Fri, 21 Jun",
    host: "Neha Kapoor",
    time: "5:30 PM",
    durationMins: 30,
    participants: 8,
    status: "upcoming",
  },
  {
    id: "1145-7723-668",
    title: "Onboarding Session",
    host: "Karan Verma",
    date: "Mon, 24 Jun",
    time: "9:00 AM",
    durationMins: 30,
    participants: 3,
    status: "ended",
  },
];

export function getInitials(fullName = "") {
  return fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}