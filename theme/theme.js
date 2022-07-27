import { Palette } from '@mui/icons-material';
import { blueGrey, grey, teal } from '@mui/material/colors';
import { createTheme, PaletteOptions } from '@mui/material/styles';

// type CustomPaletteOptions = PaletteOptions & {
//       blueyGrey: typeof blueGrey,
// }

// declare module "@mui/material/styles" {
//       interface Palette {
//             blueGrey: any;
//       }
//       interface PaletteOptions {
//             blueGrey: any;
//       }
// }

const { palette } = createTheme();

const theme = createTheme({
      palette: {
            primary: { main: blueGrey[800] },
            secondary: { main: teal[300] },
            text: {
                  primary: grey[100],
                  secondary: grey[100],
            },
            blueGrey: palette.augmentColor({ color: blueGrey }),
      },
      components: {
            // MuiPaper: {
            //       styleOverrides: {
            //             root: {
            //                   color: grey.A100,
            //                   backgroundColor: blueGrey.A400,
            //             }
            //       }
            // },
            MuiListItemIcon: {
                  styleOverrides: {
                        root: {
                              color: `${grey[50]}`,
                        }
                  }
            },
            MuiIconButton: {
                  styleOverrides: {
                        root: {
                              color: `${teal[50]}`,
                        }
                  }
            },
            MuiTypography: {
                  styleOverrides: {
                        root: {
                              color: grey.A100,
                        }
                  }
            },
            MuiTableContainer: {
                  styleOverrides: {
                        root: {
                              color: grey.A100,
                              backgroundColor: blueGrey.A400,
                              maxWidth: '700px',
                              margin: 'auto',
                              "&:hover": {
                                    backgroundColor: blueGrey.A400,
                              }
                        }
                  }
            },
            MuiTableHead: {
                  styleOverrides: {
                        root: {
                              color: grey.A100,
                              backgroundColor: blueGrey.A400,
                        },
                        '&.MuiTableCell-root':{
                              color: grey.A100,
                              backgroundColor: blueGrey.A800,
                        }
                  }
            },
            MuiTable: {
                  styleOverrides: {
                        root: {
                              color: grey.A100,
                              backgroundColor: blueGrey.A400,
                        }
                  }
            },
            // MuiTableCell: {
            //       styleOverrides: {
            //             root: {
            //                   color: grey.A100,
            //                   backgroundColor: blueGrey.A400,
            //             },
            //             '&.MuiTableHead-root':{
            //                   color: grey.A100,
            //                   backgroundColor: blueGrey.A800,
            //             }
            //       }
            // },
            MuiPaper: {
                  styleOverrides: {
                        root: {
                              color: grey.A100,
                              backgroundColor: blueGrey.A400,
                        }
                  }
            },
            MuiList: {
                  styleOverrides: {
                        root: {
                              color: grey.A100,
                              backgroundColor: blueGrey.A400,
                              maxWidth: '700px',
                              margin: 'auto',
                              borderRadius: '12px',
                              padding: '1rem',
                              "&:hover": {
                                    backgroundColor: blueGrey.A400,
                              }
                        }
                  }
            },
            MuiListItem: {
                  styleOverrides: {
                        root: {
                              backgroundColor: blueGrey[800],
                              marginBottom: '0.5rem',
                              borderRadius: '5px',
                              "&:hover": {
                                    backgroundColor: blueGrey[700],
                              }
                        }
                  }
            },
            MuiListItemButton: {
                  styleOverrides: {
                        root: {
                              backgroundColor: blueGrey[800],
                              margin: 'auto',
                              borderRadius: '5px',
                              "&:hover": {
                                    backgroundColor: blueGrey[700],
                              }
                        }
                  }
            },
      }
});

export default theme;