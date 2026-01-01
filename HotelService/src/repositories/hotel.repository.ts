import logger from "../config/logger";
import Hotel from "../db/models/hotel";
import { createHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: createHotelDTO) {
  const hotel = await Hotel.create({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: Number(hotelData?.rating),
    ratingCount: Number(hotelData.ratingCount),
  });

  logger.info(`Hotel creatd: ${hotel.id}`);

  return hotel;
}

export async function getHotelById(id: number) {
  const hotel = await Hotel.findByPk(id);

  if (!hotel) {
    logger.error(`Hotel not found : ${id}`);

    throw new NotFoundError(`Hotel with id ${id} not found`);
  }

  return hotel;
}

export async function getAllHotel() {
  const hotel = await Hotel.findAll();

  return hotel;
}
