import styled from '@emotion/styled'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Collapse, FormControl, FormControlLabel, Icon, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Paper, Radio, RadioGroup, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useReducer, useState } from 'react'
import useDatabase from '../hooks/useDatabase'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import useCollection from '../hooks/useCollection'
import SettingsIcon from '@mui/icons-material/Settings';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ACTIONS =  {
      VIEW: 'VIEW',
      ADD: 'ADD',
      EDIT: 'EDIT',
      DELETE: 'DELETE',
      CLOSEMODAL: 'CLOSEMODAL',
      ADDCOLLECTION: 'ADDCOLLECTION',
}

const initialState = {
      count: 0,
      openModal: false,
      isEditing: false,
      selectedService: null,
      addingService: false, 
      addingCollection: false, 
};

const servicesActionsHandler = (state, action) => {

      const servicePayload = action.payload ? action.payload : null;

      switch(action.type) {

            case action.type = ACTIONS.VIEW: 
                  // setOpenModal(!openModal)
                  console.log('viewing...')
                  return {...state, openModal: !state.openModal, selectedService: servicePayload};

            case action.type = ACTIONS.ADD: 
                  // setOpenModal(!openModal)
                  // setIsEditing(!isEditing)
                  console.log('adding...')
                  return {...state, openModal: true, addingService: true };

            case action.type = ACTIONS.EDIT: 
                  // setOpenModal(!openModal)
                  // setIsEditing(!isEditing)
                  console.log('editing...')
                  // console.log({state})
                  return {...state, openModal: !state.openModal, isEditing: !state.isEditing, selectedService: servicePayload};

            case action.type = ACTIONS.DELETE: 
                  console.log('deleting...')
                  return {...state, openModal: !state.openModal, selectedService: null};

            case action.type = ACTIONS.CLOSEMODAL: 
                  console.log('closing modal...')
                  return {...state, openModal: false, selectedService: null, addingService:false, addingCollection: false, isEditing: false};

            case action.type = ACTIONS.ADDCOLLECTION: 
                  console.log('adding collection...')
                  return {...state, openModal: true, addingCollection: true};

            default:
                  console.log('default...')
      } 
}

const OtherRadio = () => {

      const [checked, setChecked] = useState(false)
      const [value, setValue] = useState()

      return(<FormControlLabel
            control={<Radio
                  checked={checked}
                  onClick={() => setChecked(!checked)}
                  value={value}
                  label="other"
                  />}
            label={
                  checked ? (
                        <TextField
                        disabled={!checked}
                        label="Please Specify"
                        variant="standard" 
                        onChange={(e) => setValue(e.target.value)}
                        />
                  ) : ("Other")
            }
            >

      </FormControlLabel>)
}

const ListCategoryButton = ({collectionName, databaseName, dispatch}) => {

      const collection = useCollection(databaseName, collectionName)

      const editFormHandler = () => {
            collection.actions.deletePost(one._id)
            collection.ui.setRefreshKey((value) => value + 1)

      }

      return(<AccordionCategory>
            <ListCategory
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  {collectionName}
            </ListCategory>
            <AccordionDetails>
                        {collection.dataLoaded && collection.data.map(one => {
                              return <Accordion key={`${one._id}`}>
                                    <AccordionSummary 
                                          expandIcon={<VisibilityIcon/>}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                          >
                                          {one.title}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          {one.title && <p>Nombre: {one.title}</p> }
                                          {one.description && <p>Descripcion: {one.description}</p> }
                                          {one.price && <p>Precio: {one.price}e</p> }
                                          {one.duration && <p>Duracion: {one.duration}min</p> }
                                          {one.category && <p>Categoria: {one.category}</p> }
                                          <Button variant="contained" onClick={() => dispatch({ type: ACTIONS.EDIT, payload: one })} endIcon={<EditIcon />}>EDITAR</Button>
                                          <Button variant="contained" onClick={() => editFormHandler(one)} endIcon={<DeleteIcon />}>BORRAR</Button>
                                    </AccordionDetails>
                              </Accordion>
                        })}
            </AccordionDetails>
    </AccordionCategory>)
}
const TableX = ({collectionNames, collectionName, databaseName, dispatch, state}) => {

      const collection = useCollection(databaseName, collectionName)

      return(<AccordionCategory key={state._id}>
            <ListCategory
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  {collectionName}
            </ListCategory>
            <AccordionDetails>
                  <TableContainer component={Paper}>
                        <Table size="small" sx={{ minWidth: 'max-content' }}>
                              <TableHead>
                                    <TableRow>
                                          <TableCell align="left" colSpan="3">Service</TableCell>
                                          <TableCell align="left">Description</TableCell>
                                          <TableCell align="left">Price&nbsp;(e)</TableCell>
                                          <TableCell align="left">Duration&nbsp;(min)</TableCell>
                                          <TableCell align="left">Category</TableCell>
                                          <TableCell align="left" colSpan="2">Actions</TableCell>
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                              {collection.dataLoaded && collection.data.map(one => {
                                          return (<TableRow key={one._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell align="left" colSpan="3" component="th" scope="row">{one.title}</TableCell>
                                                <TableCell align="left">{one.description ? one.description : 'none'}</TableCell> 
                                                <TableCell align="left">{one.price}</TableCell>
                                                <TableCell align="left">{one.duration}</TableCell>
                                                <TableCell align="left">{one.category}</TableCell>
                                                <TableCell align="left" colSpan="2" sx={{ verticalAlign: 'middle' }}>
                                                      <IconButton onClick={() => dispatch({ type: ACTIONS.EDIT, payload: one })}><EditIcon /></IconButton>
                                                      <IconButton onClick={() => collection.actions.deletePost(one._id)}><DeleteIcon /></IconButton>
                                                </TableCell>
                                          </TableRow>)})}
                              </TableBody>
                        </Table>
                  </TableContainer>
            </AccordionDetails>
      </AccordionCategory>)
}
{/* <ListItemButton
type="submit"
variant="contained"
size="large"
onClick={() => dispatch({ type: ACTIONS.ADD })}
>
      <ListItemIcon>
            <AddIcon/>
      </ListItemIcon>
      <ListItemText primary="Add service" />
</ListItemButton> */}
const EditSwitch = ({dbName, name}) => {

      const db = useDatabase(dbName)

      const renameCollectionHandler = () => {
            console.log({db})
            db.renameCollection(name, value)
      }

      const [checked, setChecked] = useState(false)
      const [value, setValue] = useState()

      return(
            <>
                  {checked ? (<>
                        <TextField
                        disabled={!checked}
                        label={name}
                        variant="standard" 
                        onChange={(e) => setValue(e.target.value)}
                        />
                        <Button variant="contained" onClick={() => renameCollectionHandler(value)}>SUBMIT</Button>
                  </>) 
                  : (<>
                        <ListItemText primary={name} />
                        <IconButton onClick={() => setChecked(!checked)}><EditIcon/></IconButton>

                  </>)}
            </>)
}
    
const Login = () => {

      const db = useDatabase('services') //change services for router
      
      // const collection = useCollection() //change services for router

      const [selectedService, setSelectedService] = useState({
            _id: null,
            title:  null,
            description: null,
            price: null,
            duration:  null,
            category: null,
      });

      const [newService, setNewService] = useState({
            _id: null,
            title:  null,
            description: null,
            price: null,
            duration:  null,
            category: null,
      })

      const [state, dispatch] = useReducer(servicesActionsHandler, initialState);

      const formHandler = ( event ) => {
            event.preventDefault();

            if(!db.collectionNames.includes(event.target.category.value)){

                  db.actions.createCollection(event.target.category.value)
                  db.actions.addPost(event)
            } else {

                  db.actions.addPost(event)
            }
            dispatch({ type: ACTIONS.CLOSEMODAL })
      }

      const addCollectionHandler = (event) => {
            event.preventDefault();

            db.actions.createCollection(event.target.name.value)
      }

      const editFormHandler = ( event ) => {
            event.preventDefault();
            db.actions.editPost(event, state.selectedService)
            // if(!db.collectionNames.includes(event.target.category.value)){

            //       db.actions.createCollection(event.target.category.value)
            //       db.actions.addPost(event)
            // } else {

            //       db.actions.addPost(event)
            // }
            dispatch({ type: ACTIONS.CLOSEMODAL })
      }

      useEffect(() => {
            // console.log('login page rendered')
            // console.log('services.data',db.data)

            // if(db.dataLoaded){
            //       console.log({db})
            // }

      }, [db])
      
return (
      <div>
            <h1>Services</h1>
            {!db.isLoaded && <p>loading...</p>}
            <List>
                  <h2>Services</h2>
                  <ListItem disablePadding>
                        <ListItemButton
                              type="submit"
                              variant="contained"
                              size="large"
                              onClick={() => dispatch({ type: ACTIONS.ADD })}
                              >
                              <ListItemIcon>
                                    <AddIcon/>
                              </ListItemIcon>
                              <ListItemText primary="Add service" />
                        </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                        <ListItemButton
                              type="submit"
                              variant="contained"
                              size="large"
                              onClick={() => dispatch({ type: ACTIONS.ADDCOLLECTION })}
                              >
                              <ListItemIcon>
                                    <SettingsIcon/>
                              </ListItemIcon>
                              <ListItemText primary="Manage categories" />
                        </ListItemButton>
                  </ListItem>
                  {db.isLoaded && db.collectionNames.map((collection, index)=>{
                        return <TableX key={index} collectionName={collection} databaseName={db.databaseName} dispatch={dispatch} state={state} collectionNames={db.collectionNames} />
                  })}
            </List>   
            {/* EDIT ONE */}
            {/* {state.selectedService && state.isEditing && state.openModal && <XModal
                  open={state.openModal}
                  onClose={() => dispatch({ type: ACTIONS.CLOSEMODAL })}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  >
                  <ModalCard>
                        <h2>EDITING</h2>
                        {state.selectedService !== null && <div>
                              <Form onSubmit={event => editFormHandler(event)}>
                                    <Field
                                          id="outlined-helperText"
                                          name='title'
                                          label='Name'
                                          defaultValue={state.selectedService.title}
                                          onChange={e=>setNewService({...selectedService, title: e.target.value})}
                                          // helperText="Some important text"
                                    />
                                    <Field
                                          id="outlined-helperText"
                                          name='description'
                                          label='Description'
                                          defaultValue={state.selectedService.description ? state.selectedService.description:'none'}
                                          onChange={e=>setNewService({...selectedService, description: e.target.value})}
                                          // helperText="Some important text"
                                    />
                                    <Field
                                          id="outlined-helperText"
                                          name='price'
                                          type='number'
                                          label='Price'
                                          defaultValue={state.selectedService.price}
                                          onChange={e=>setNewService({...selectedService, price: e.target.value})}
                                          InputProps={{
                                                endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                          }}
                                    />
                                    <Field
                                          id="outlined-helperText"
                                          name='duration'
                                          type='number'
                                          label='Duration'
                                          defaultValue={state.selectedService.duration}
                                          onChange={e=>setNewService({...selectedService, duration: e.target.value})}
                                          InputProps={{
                                                endAdornment: <InputAdornment position="end">min</InputAdornment>,
                                          }}                                    />
                                    <Field
                                          id="outlined-helperText"
                                          name='category'
                                          label='Category'
                                          defaultValue={state.selectedService.category}
                                          onChange={e=>setNewService({...selectedService, category: e.target.value})}
                                    />
                                    <RadioGroup name="category-radio-group" defaultValue="first">
                                          {db.dataLoaded && db.data.map((collection) => {
                                                return <FormControlLabel value={`${collection}`} label={`${collection}`} control={<Radio />} />    
                                          })}
                                    </RadioGroup>
                                    <Button type="submit" variant="contained">SAVE</Button>
                                    <Button type="button" variant="contained" onClick={() => {dispatch({ type: ACTIONS.CLOSEMODAL });return false;}}>CANCEL</Button>
                              </Form>
                        </div>} 
                  </ModalCard>
            </XModal>} */}
            {state.selectedService && state.isEditing && state.openModal && <XModal
                  open={state.openModal}
                  onClose={() => dispatch({ type: ACTIONS.CLOSEMODAL })}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  >
                  <ModalCard>
                        <h2>EDITING</h2>
                        {state.selectedService !== null && <div>
                              <Form onSubmit={event => editFormHandler(event)}>
                                    <Field
                                          id="outlined-helperText"
                                          name='title'
                                          label='Name'
                                          defaultValue={state.selectedService.title}
                                          onChange={e=>setNewService({...selectedService, title: e.target.value})}
                                          // helperText="Some important text"
                                    />
                                    <Field
                                          id="outlined-helperText"
                                          name='description'
                                          label='Description'
                                          defaultValue={state.selectedService.description ? state.selectedService.description:'none'}
                                          onChange={e=>setNewService({...selectedService, description: e.target.value})}
                                          // helperText="Some important text"
                                    />
                                    <Field
                                          id="outlined-helperText"
                                          name='price'
                                          type='number'
                                          label='Price'
                                          defaultValue={state.selectedService.price}
                                          onChange={e=>setNewService({...selectedService, price: e.target.value})}
                                          InputProps={{
                                                endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                          }}
                                    />
                                    <Field
                                          id="outlined-helperText"
                                          name='duration'
                                          type='number'
                                          label='Duration'
                                          defaultValue={state.selectedService.duration}
                                          onChange={e=>setNewService({...selectedService, duration: e.target.value})}
                                          InputProps={{
                                                endAdornment: <InputAdornment position="end">min</InputAdornment>,
                                          }}                                    
                                    />
                                    <RadioGroup row name='category' defaultValue={state.selectedService.category}>
                                          {db.collectionNames.map((collection) => {
                                                return <FormControlLabel key={collection._id} value={`${collection}`} label={`${collection}`} control={<Radio />} />    
                                          })}
                                    </RadioGroup>
                                    <Button type="submit" variant="contained">SAVE</Button>
                                    <Button type="button" variant="contained" onClick={() => {dispatch({ type: ACTIONS.CLOSEMODAL });return false;}}>CANCEL</Button>
                              </Form>
                        </div>} 
                  </ModalCard>
            </XModal>}
            {/* Manage CATEGORY */}
            {state.addingCollection && state.openModal && <XModal
                  open={state.openModal}
                  onClose={() => dispatch({ type: ACTIONS.CLOSEMODAL })}
                  >
                        <List>
                              {db.isLoaded && db.collectionNames.map(collection=>{
                                    return <ListItem key={collection} align="right" variant="contained" size="large">
                                          <EditSwitch dbName={db.databaseName} name={collection}/>
                                    </ListItem> 
                              })}
                        </List>
            </XModal>}

            {/* INSERT ONE */}
            {state.addingService && state.openModal && <XModal
                  open={state.openModal}
                  onClose={() => dispatch({ type: ACTIONS.CLOSEMODAL })}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  >
                  <ModalCard>
                        <h2>Add service</h2>
                        {/* <Form onSubmit={event => db.actions.addPost(event)}> */}
                        <Form onSubmit={event => formHandler(event)}>
                              <Field
                                    id="outlined-helperText1"
                                    name='title'
                                    label='Title'
                                    autoComplete='no'
                                    onChange={e=>setNewService({...newService, title: e.target.value})}
                                    // helperText="Some important text"
                              />
                              <Field
                                    id="outlined-helperText2"
                                    name='description'
                                    label='Description'
                                    autoComplete='no'
                                    onChange={e=>setNewService({...newService, description: e.target.value})}
                                    // helperText="Some important text"
                              />
                              <Field
                                    id="outlined-helperText3"
                                    name='price'
                                    type='number'
                                    label='Price'
                                    autoComplete='no'
                                    onChange={e=>setNewService({...newService, price: e.target.value})}
                                    // helperText="Some important text"
                              />
                              <Field
                                    id="outlined-helperText4"
                                    name='duration'
                                    type='number'
                                    label='Duration'
                                    autoComplete='no'
                                    onChange={e=>setNewService({...newService, duration: e.target.value})}
                                    // helperText="Some important text"
                              />
                              <RadioGroup 
                                    row 
                                    name='category'
                                    onChange={e=>setNewService({...newService, category: e.target.value})}
                                    >
                                    {db.isLoaded && db.collectionNames.map((category) => {
                                          return <FormControlLabel key={`${category}`} value={`${category}`} label={`${category}`} control={<Radio />} />    
                                    })}
                                    <OtherRadio/>
                              </RadioGroup>
                              <Button type="submit" variant="contained">SUBMIT</Button>
                        </Form>
                  </ModalCard>
            </XModal>
            }
            
      </div>
  )
}

export default Login

const AccordionCategory = styled(Accordion)`
      background-color: #37474f;
      margin-bottom: 0.7rem;
`;

const AccordionSummaryForOne = styled(AccordionSummary)`
      display: flex;
      justify-content: space-between;
      align-items: center;
`;

const ListCategory = styled(AccordionSummary)`
      text-transform: capitalize;
`;

const Form = styled('form')`
      display: flex;
      flex-direction: column;

      gap: 0.2rem;

      padding: 1rem;
      margin: 2rem 1rem;
      border-radius: 12px;
      background-color: #242424;
`;

const XTable = styled(TableContainer)`
      max-width: 750px;
      margin: auto;

      &Button{

            text-transform: uppercase;
      }
`;

const ModalCard = styled(Box)`

      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin: 1rem auto;
      width: 100%;
      height: auto;
      overflow: scroll;
      max-width: 600px;
      border-radius: 12px;
      background-color: #242424;
      color: white;
`;

const XModal = styled(Modal)`

      display: flex;
      justify-content: center;
      align-items: center;
`;

const Field = styled(TextField)`

      margin: 0.4rem 1rem;

      label{
            color: white;

            &.Mui-focused {
                  color: white;
            }
      }

      .MuiOutlinedInput-root {
            color: white;
            border-color: white;

            &.Mui-focused fieldset{
                  border-color: white;
            }

            &:hover fieldset{
                  border-color: gray;         
            }

            fieldset{
                  color: white;
                  border-color: white;
            }

      }

`;



// const handleTableClick = (action, service) => {

//       setSelectedService(service)

//       switch(action) {

//             case action = ACTIONS.VIEW: 
//                   setOpenModal(!openModal)
//                   console.log('viewing...')
//                   break;

//             case action = ACTIONS.EDIT: 
//                   setOpenModal(!openModal)
//                   setIsEditing(!isEditing)
//                   console.log('editing...')
//                   break;

//             case action = ACTIONS.DELETE: 
//                   console.log('deleting...')
//                   break;
//       } 
// }