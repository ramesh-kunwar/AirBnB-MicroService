import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel, getHotelById } from "../repositories/hotel.repository";
import { BadRequestError } from "../utils/errors/app.error";

const blockListedAddresses = ["123 Fake St", "456 Elm St"];

export function isAddressBlockListed(address: string): boolean {
  return blockListedAddresses.includes(address);
}

export async function createHotelService(hotelData: createHotelDTO) {
  if (isAddressBlockListed(hotelData.address)) {
    throw new BadRequestError("Address is blocklisted");
  }

  const hotel = await createHotel(hotelData);

  return hotel;
}

export async function getHotelByIdService(id: number) {
  const hotel = await getHotelById(id);
  return hotel;
}
