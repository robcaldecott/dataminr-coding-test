import { nanoid } from "nanoid";

export interface Setting {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  divider?: boolean;
  toggles?: Omit<Setting, "toggles">[];
  values?: string[];
  value?: string;
}

export interface Panel {
  id: string;
  title?: string;
  toggles: Setting[];
}

export interface Group {
  id: string;
  title?: string;
  panels: Panel[];
}

export const schema: Group[] = [
  {
    id: nanoid(),
    title: "General",
    panels: [
      {
        id: nanoid(),
        toggles: [
          {
            id: nanoid(),
            name: "caseManagement",
            label: "Case management",
            checked: true,
          },
        ],
      },
      {
        id: nanoid(),
        toggles: [
          {
            id: nanoid(),
            name: "mapTimeline",
            label: "Map timeline",
            checked: true,
          },
        ],
      },
      {
        id: nanoid(),
        toggles: [
          {
            id: nanoid(),
            name: "viewsAndBriefings",
            label: "Views & briefings",
            checked: true,
          },
        ],
      },
      {
        id: nanoid(),
        toggles: [
          {
            id: nanoid(),
            name: "notifications",
            label: "Notifications",
            checked: true,
          },
        ],
      },
      {
        id: nanoid(),
        toggles: [
          {
            id: nanoid(),
            name: "massCommunications",
            label: "Mass communications",
            checked: true,
          },
        ],
      },
      {
        id: nanoid(),
        toggles: [
          {
            id: nanoid(),
            name: "trafficCameras",
            label: "Traffic cameras",
            checked: true,
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    panels: [
      {
        id: nanoid(),
        title: "Settings",
        toggles: [
          {
            id: nanoid(),
            name: "auditLog",
            label: "Audit log",
            checked: true,
          },
          {
            id: nanoid(),
            name: "users",
            label: "Users",
            divider: true,
            checked: false,
            toggles: [
              {
                id: nanoid(),
                name: "usersAdd",
                label: "Users add",
                checked: true,
              },
              {
                id: nanoid(),
                name: "userDelete",
                label: "User delete",
                checked: false,
              },
              {
                id: nanoid(),
                name: "userEdit",
                label: "User edit",
                checked: true,
              },
              {
                id: nanoid(),
                name: "maxUsers",
                label: "Max users",
                checked: true,
                values: ["10", "20", "30"],
                value: "10",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    panels: [
      {
        id: nanoid(),
        title: "Alerts",
        toggles: [
          {
            id: nanoid(),
            name: "alertManager",
            label: "Alert manager",
            checked: true,
          },
          {
            id: nanoid(),
            name: "alertRules",
            label: "Alert rules",
            checked: true,
            values: ["10", "50", "100"],
            value: "100",
          },
        ],
      },
    ],
  },
];
