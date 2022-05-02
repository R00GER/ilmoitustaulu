import { Fragment, useState } from 'react';
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ProjectIcon from '@mui/icons-material/ListAlt';
import BoardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  list: {
    width: '250px',
  },
  nestedListItem: {
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
    paddingLeft: '0px !important',
  },
  nestedListItemText: {
    paddingLeft: '16px',
  },
  createProjectButton: {
    maxWidth: '80%',
  },
  rightIcon: {
    justifyContent: 'flex-end',
  },
});

function ApplicationSideMenu({ open, onClose }) {
  const [projects] = useState(['Project1', 'Project2']);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const classes = useStyles();

  const list = [
    {
      label: 'Board',
      labelIcon: <BoardIcon />,
      type: 'forward',
      rightIcon: null,
      onClick: () => {},
    },
    {
      label: 'Projects',
      labelIcon: <ProjectIcon />,
      type: 'dropdown',
      rightIcon: projectsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />,
      onClick: () => setProjectsExpanded(!projectsExpanded),
    },
    {
      label: 'Settings',
      labelIcon: <SettingsIcon />,
      type: 'forward',
      rightIcon: null,
      onClick: () => {},
    },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <ListItem>
        <ListItemText
          primaryTypographyProps={{ style: { fontSize: '2rem' } }}
          primary="LOGO"
        />
      </ListItem>
      <List className={classes.list}>
        {list.map(item => (
          <Fragment key={item.label}>
            <ListItem button key={item.label} onClick={item.onClick}>
              <ListItemIcon>{item.labelIcon}</ListItemIcon>
              <ListItemText primary={item.label} />
              <ListItemIcon className={classes.rightIcon}>
                {item.rightIcon}
              </ListItemIcon>
            </ListItem>
            {item.type === 'dropdown' && (
              <Collapse in={projectsExpanded}>
                <List className={classes.nestedList}>
                  <ListItem button className={classes.nestedListItem}>
                    <ListItemText
                      className={classes.nestedListItemText}
                      primary="Create New Project"
                    />
                    <ListItemIcon className={classes.rightIcon}>
                      <ArrowRightIcon />
                    </ListItemIcon>
                  </ListItem>
                  {projects.map(project => (
                    <ListItem
                      key={project}
                      button
                      className={classes.nestedListItem}
                    >
                      <ListItemText
                        className={classes.nestedListItemText}
                        primary={project}
                      />
                      <ListItemIcon className={classes.rightIcon}>
                        <ArrowRightIcon />
                      </ListItemIcon>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default ApplicationSideMenu;
