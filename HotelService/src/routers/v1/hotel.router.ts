import express from "express";
import {
  createHotelHandler,
  getAllHotelHandler,
  getHotelByIdHandler,
} from "../../controllers/hotel.controller";
import { validateRequestBody } from "../../validators";
import { hotelSchema } from "../../validators/hotel.validator";
const hotelRouter = express.Router();

hotelRouter.post("/", validateRequestBody(hotelSchema), createHotelHandler);
hotelRouter.get("/", getAllHotelHandler);

hotelRouter.get("/:id", getHotelByIdHandler);

export default hotelRouter;
