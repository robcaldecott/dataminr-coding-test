import { Fragment } from "react";
import { Paper, Grid, Container, Divider, Stack } from "@mui/material";
import { Toggle } from "./Toggle";
import { Title } from "./Title";
import { useToggleState } from "./useToggleState";
import type { Group } from "./schema";

interface AppProps {
  schema: Group[];
}

export function App({ schema }: AppProps) {
  const { state, toggleProps } = useToggleState(schema);

  return (
    <Container component="main" disableGutters sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {schema.map((group) => (
          <Fragment key={group.id}>
            {/* Group title */}
            {group.title && (
              <Grid item xs={12}>
                <Title>{group.title}</Title>
              </Grid>
            )}
            {/* Panels */}
            {group.panels.map((panel) => (
              <Grid key={panel.id} item xs={12} sm={6} md={4}>
                <Stack direction="column" spacing={2}>
                  {/* Panel title */}
                  {panel.title && (
                    <Grid item xs={12} sm={6} md={4}>
                      <Title>{panel.title}</Title>
                    </Grid>
                  )}
                  {/* Panel */}
                  <Paper elevation={4}>
                    {/* Toggles */}
                    {panel.toggles.map((toggle) => (
                      <Fragment key={toggle.id}>
                        {/* Divider */}
                        {toggle.toggles && <Divider />}
                        {/* Toggle */}
                        <Toggle {...toggleProps(toggle)} />
                        {/* Child toggles */}
                        {state[toggle.name].checked &&
                          toggle.toggles?.map((toggle) => (
                            <Toggle
                              key={toggle.id}
                              indent
                              {...toggleProps(toggle)}
                            />
                          ))}
                      </Fragment>
                    ))}
                  </Paper>
                </Stack>
              </Grid>
            ))}
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
}
