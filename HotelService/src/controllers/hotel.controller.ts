import { NextFunction, Request, Response } from "express";
import {
  createHotelService,
  getAllHotelService,
  getHotelByIdService,
  softDeleteHotelService,
  updateHotelServiceById,
} from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export const createHotelHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hotelResponse = await createHotelService(req.body);

  res.status(StatusCodes.CREATED).json({
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

  res.status(StatusCodes.OK).json({
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

  res.status(StatusCodes.OK).json({
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
  const hotelReponse = await updateHotelServiceById(
    Number(req.params.id),
    req.body
  );

  res.status(StatusCodes.OK).json({
    message: `Hotel with id ${hotelReponse.id} updated successfully`,
    data: hotelReponse,
    success: true,
  });
};

export const deleteHotelHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await softDeleteHotelService(Number(req.params.id));

  res.status(StatusCodes.OK).json({
    message: `Hotel with id ${req.params.id} deleted successfully`,

    success: true,
  });
};
