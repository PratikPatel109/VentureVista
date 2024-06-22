
import express from 'express'
import {createTour,deleteTour,getAllTour,getSingleTour,updateTour,getToursBySearch, getFeaturedTour, getTourCount}  from './../controllers/tourCountroller.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router= express.Router();

//create new tour
router.post("/", createTour);


//create new tour
router.put("/:id", updateTour);
//delete tour
router.delete("/:id", deleteTour);
//get single tour
router.get("/:id", getSingleTour);
//create all tour
router.get("/", getAllTour);

//get tours by search 
router.get('/search/getTourBySearch', getToursBySearch);
router.get('/search/getFeaturedTours', getFeaturedTour);
router.get('/search/getTourCount', getTourCount);
export default  router;