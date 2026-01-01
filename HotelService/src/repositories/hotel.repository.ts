import logger from "../config/logger";
import Hotel from "../db/models/hotel";
import { createHotelDTO, UpdateHotelDTO } from "../dto/hotel.dto";
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

export async function getAllHotel() {
  const hotel = await Hotel.findAll({
    where: {
      deletedAt: null,
    },
  });

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

export async function updateHotelById(id: number, hotelData: UpdateHotelDTO) {
  //   const hotel = await Hotel.findByPk(id);
  const hotel = await Hotel.findByPk(id);

  if (!hotel) {
    logger.error(`Hotel not found : ${id}`);

    throw new NotFoundError(`Hotel with id ${id} not found`);
  }
  await hotel.update({
    ...hotelData,
  });

  logger.info(`Hotel with id ${hotel.id} updated successfully`);

  return hotel;
}

export async function softDeleteHotel(id: number) {
  //   const hotel = await Hotel.findByPk(id);
  const hotel = await Hotel.findByPk(id);

  if (!hotel) {
    logger.error(`Hotel not found : ${id}`);

    throw new NotFoundError(`Hotel with id ${id} not found`);
  }

  hotel.deletedAt = new Date();

  await hotel.save();

  logger.info(`Hotel with id ${hotel.id} updated successfully`);

  return true;
}
