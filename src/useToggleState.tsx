import { useState } from "react";
import { ExpandIcon } from "./ExpandIcon";
import { ToggleSelect } from "./ToggleSelect";
import type { Group, Setting } from "./schema";
import type { ToggleProps } from "./Toggle";

interface ToggleData {
  checked: boolean;
  value?: string;
}

type ToggleState = Record<string, ToggleData>;

/**
 * Hook used the manage the state of toggles.
 * Each toggle can be checked on/off and have an optional
 * value associated with it (selected from a drop-down).
 *
 * This hook manages the state and provides a helper function
 * that creates the props required for a `Toggle` component.
 */
export function useToggleState(schema: Group[]) {
  const [state, setState] = useState<ToggleState>(() => {
    // Build an object keyed on the name of each toggle
    // that contains the toggle checked state and selected
    // value (for toggles with associated inputs.)
    let toggles: ToggleState = {};
    schema.forEach((section) => {
      section.panels.forEach((panel) => {
        panel.toggles.forEach((toggle) => {
          toggles[toggle.name] = {
            checked: toggle.checked,
            value: toggle.value,
          };
          toggle.toggles?.forEach((toggle) => {
            toggles[toggle.name] = {
              checked: toggle.checked,
              value: toggle.value,
            };
          });
        });
      });
    });
    return toggles;
  });

  return {
    state,
    // Return the props required to render a toggle
    toggleProps: ({ name, label, toggles, values }: Setting): ToggleProps => {
      return {
        name,
        label,
        icon: toggles && <ExpandIcon checked={state[name].checked} />,
        checked: state[name].checked,
        onChange: (event, checked) => {
          setState((state) => ({
            ...state,
            [name]: {
              value: state[name].value,
              checked,
            },
          }));
        },
        input: values && (
          <ToggleSelect
            disabled={!state[name].checked}
            value={state[name].value || ""}
            onChange={(event) => {
              setState((state) => ({
                ...state,
                [name]: {
                  value: event.target.value,
                  checked: state[name].checked,
                },
              }));
            }}
            values={values}
          />
        ),
      };
    },
  };
}
