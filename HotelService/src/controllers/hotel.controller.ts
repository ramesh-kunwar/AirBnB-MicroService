import { NextFunction, Request, Response } from "express";
import {
  createHotelService,
  getAllHotelService,
  getHotelByIdService,
} from "../services/hotel.service";

export const createHotelHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hotelResponse = await createHotelService(req.body);

  res.status(201).json({
    message: `Hotel created successfully`,
    data: hotelResponse,
    success: true,
  });
};

export const getHotelByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hotelResponse = await getHotelByIdService(Number(req.params.id));

  res.status(201).json({
    message: `Hotel fetched successfully`,
    data: hotelResponse,
    success: true,
  });
};

export const getAllHotelHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hotelResponse = await getAllHotelService();

  res.status(501).json({
    message: `All hotels fetched successfully`,
    data: hotelResponse,
    success: true,
  });
};

export const updateHotelHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(501).json({
    message: "not implemented",
  });
};
