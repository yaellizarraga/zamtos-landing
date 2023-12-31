import * as React from 'react'
import { Container, Grid, Typography, ThemeProvider, createTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image'

export default function Projects() {

    const theme = createTheme();

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
        };
    
    return (
        <ThemeProvider theme={theme}>
                <Container disableGutters>
                    <Grid container direction='row' mb={7} mt={7}>
                        <Grid item md={12}>
                            <Typography className='title-encanto' variant='h1' align='left'>
                                 Servicios
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Container disableGutters>
                {/* End hero unit */}
                <Grid container spacing={4} mb={5}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Ingeniería de Proyectos
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container direction={'row'}>
                                    <Grid item md={6} p={1}>
                                        <Typography align='justify'>
                                            MR Expertos realiza la ingeniería de tu proyecto generando un conglomerado de conceptos y conocimientos a partir de los cuales se definen los recursos que se van a necesitar en la ejecución de un proyecto. 
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} p={1}>
                                        <img src='/ingenieria-proyectos.jpeg' alt='ingenieria-proyectos' className='img-responsive' />
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Calculos Estructurales
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container direction={'row'}>
                                    <Grid item md={6} p={1}>
                                            <img src='/calculos-estructurales.jpeg' alt='ingenieria-proyectos' className='img-responsive' />
                                    </Grid>
                                    <Grid item md={6} p={1}>
                                        <Typography align='justify'>
                                            MR Expertos, realiza tu proyecto de  cálculo de estructuras, también llamado análisis estructural, Implica la realización de cálculos para medir los efectos de las cargas, así como de fuerzas internas (su propio peso) y externas (como lluvia o movimientos sísmicos) que puedan incidir en las construcciones.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Diseños Arquitectónicos
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container direction={'row'}>
                                    <Grid item md={6} p={1}>
                                        <Typography align='justify'>
                                            MR Expertos, realiza tu diseño arquitectónico, se trata del proceso mediante el cual los profesionales de la arquitectura interpretan las necesidades del cliente, las procesan y, con base en principios de funcionamiento, criterios generales de estructura y reglamentación elaboran de manera estética una propuesta para que pueda ser construida.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} p={1}>
                                        <img src='/dise-arqui.jpeg' alt='ingenieria-proyectos' className='img-responsive' />
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Proyectos de Construcción</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container direction={'row'}>
                                    <Grid item md={6} p={1}>
                                            <img src='/proyectos-construcion.jpeg' alt='ingenieria-proyectos' className='img-responsive' />
                                    </Grid>
                                    <Grid item md={6} p={1}>
                                        <Typography align='justify'>
                                            MR Expertos, realiza o ejecuta tu proyecto de forma física es decir, construye y ejecuta un proyecto de obra dándole cumplimiento al catalogo de definiciones de obra, cumpliendo siempre con tiempos y presupuestos.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Elaboración de Presupuesto</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container direction={'row'}>
                                    <Grid item md={6} p={1}>
                                        <Typography align='justify'>
                                        MR Expertos, realiza en base a un proyecto la realización del documento de presupuesto, el cual consiste en generar cada costo referente a la elaboración.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} p={1}>
                                        <img src='/calculo-presupuesto.jpeg' alt='ingenieria-proyectos' className='img-responsive' />
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Diseño de Interiores</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container direction={'row'}>
                                    <Grid item md={6} p={1}>
                                            <img src='/diseno-interiores.jpeg' alt='ingenieria-proyectos' className='img-responsive' />
                                    </Grid>
                                    <Grid item md={6} p={1}>
                                        <Typography align='justify'>
                                            MR Expertos, realiza El Diseño de Interiores  mediante proceso de crear y diseñar el espacio interior con la manipulación del volumen espacial, así como el tratamiento superficial, aplicando los paradigmas, teorías y conceptos que combinen esa manipulación del espacio, con el tratamiento de la superficie, para crear una realidad estética para nuestros sentidos como meta final.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
                </Container>
        </ThemeProvider>
    )
}