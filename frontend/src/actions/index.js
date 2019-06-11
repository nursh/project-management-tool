import axios from 'axios';
import {
  GET_ERRORS,
  GET_PROJECTS,
  GET_PROJECT
} from './types';


export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:8080/api/projects', project);
    history.push('/dashboard');
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
} 

export const getProjects = () => async dispatch => {
  const res = await axios.get('http://localhost:8080/api/projects');
  dispatch({
    type: GET_PROJECTS,
    payload: res.data
  });
}

export const getProject = (id) => async dispatch => {
  const res = await axios.get(`http://localhost:8080/api/projects/${id}`);
  dispatch({
    type: GET_PROJECT,
    payload: res.data
  });
}