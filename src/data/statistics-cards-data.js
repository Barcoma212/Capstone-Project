import {
  UsersIcon,
  MapIcon,
  BanknotesIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: MapIcon,
    title: "Total Lots",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "pink",
    icon: UsersIcon,
    title: "Active Customers",
    value: "1,200",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last month",
    },
  },
  {
    color: "green",
    icon: BanknotesIcon,
    title: "Monthly Revenue",
    value: "$45,000",
    footer: {
      color: "text-green-500",
      value: "+12%",
      label: "than last month",
    },
  },
  {
    color: "orange",
    icon: CalendarIcon,
    title: "Pending Services",
    value: "45",
    footer: {
      color: "text-red-500",
      value: "-2",
      label: "than yesterday",
    },
  },
]; 